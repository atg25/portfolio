import { test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.resolve(process.cwd(), "playwright-screenshots");

const routes = [
  { name: "home", path: "/" },
  { name: "about", path: "/experience" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
  { name: "dataviz", path: "/dataviz" },
  { name: "movie-search", path: "/movie-search" },
  { name: "rag-demo", path: "/rag-demo" },
];

const viewports = [
  { name: "desktop", width: 1280, height: 720 },
  { name: "mobile", width: 390, height: 844 },
];

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

test.describe("UX audit (screens + contrast)", () => {
  test.beforeAll(() => {
    ensureDir(OUT_DIR);
  });

  for (const vp of viewports) {
    test.describe(vp.name, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });

      for (const route of routes) {
        test(`${route.name} (${vp.name})`, async ({ page, baseURL }) => {
          if (!baseURL) throw new Error("baseURL missing");

          // Reduce noise so screenshots are readable/stable.
          await page.addStyleTag({
            content: `
              *, *::before, *::after { animation: none !important; transition: none !important; }
              html { scroll-behavior: auto !important; }
            `,
          });

          await page.goto(new URL(route.path, baseURL).toString(), {
            waitUntil: "networkidle",
          });

          // Let fonts/layout settle.
          await page.waitForTimeout(300);

          const screenshotPath = path.join(
            OUT_DIR,
            `${route.name}__${vp.name}.png`,
          );
          await page.screenshot({ path: screenshotPath, fullPage: true });

          const contrastFindings = await page.evaluate(() => {
            function parseCssColor(
              cssColor: string,
            ): [number, number, number, number] | null {
              const m = cssColor
                .trim()
                .match(
                  /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i,
                );
              if (!m) return null;
              const r = Math.max(0, Math.min(255, Number(m[1])));
              const g = Math.max(0, Math.min(255, Number(m[2])));
              const b = Math.max(0, Math.min(255, Number(m[3])));
              const a =
                m[4] === undefined ? 1 : Math.max(0, Math.min(1, Number(m[4])));
              return [r, g, b, a];
            }

            function blendOver(
              top: [number, number, number, number],
              bottom: [number, number, number, number],
            ): [number, number, number, number] {
              const a = top[3];
              const r = top[0] * a + bottom[0] * (1 - a);
              const g = top[1] * a + bottom[1] * (1 - a);
              const b = top[2] * a + bottom[2] * (1 - a);
              return [r, g, b, 1];
            }

            function srgbToLinear(c: number) {
              const v = c / 255;
              return v <= 0.04045
                ? v / 12.92
                : Math.pow((v + 0.055) / 1.055, 2.4);
            }

            function luminance(rgb: [number, number, number]) {
              const [r, g, b] = rgb;
              const R = srgbToLinear(r);
              const G = srgbToLinear(g);
              const B = srgbToLinear(b);
              return 0.2126 * R + 0.7152 * G + 0.0722 * B;
            }

            function contrastRatio(
              fg: [number, number, number],
              bg: [number, number, number],
            ) {
              const L1 = luminance(fg);
              const L2 = luminance(bg);
              const lighter = Math.max(L1, L2);
              const darker = Math.min(L1, L2);
              return (lighter + 0.05) / (darker + 0.05);
            }

            function isVisible(el: Element) {
              const style = window.getComputedStyle(el);
              if (style.display === "none" || style.visibility === "hidden")
                return false;
              if (Number(style.opacity) === 0) return false;
              const rects = (el as HTMLElement).getClientRects();
              if (!rects || rects.length === 0) return false;
              return true;
            }

            function getBodyBackground(): [number, number, number, number] {
              const bodyBg = parseCssColor(
                window.getComputedStyle(document.body).backgroundColor,
              );
              return bodyBg ?? [255, 255, 255, 1];
            }

            function getEffectiveBackgroundColor(
              el: Element,
            ): [number, number, number, number] {
              const style = window.getComputedStyle(el);
              const bg = parseCssColor(style.backgroundColor);
              if (bg && bg[3] > 0) {
                if (bg[3] >= 1) return bg;
                const parent = el.parentElement
                  ? getEffectiveBackgroundColor(el.parentElement)
                  : getBodyBackground();
                return blendOver(bg, parent);
              }

              if (el.parentElement)
                return getEffectiveBackgroundColor(el.parentElement);
              return getBodyBackground();
            }

            function simpleSelector(el: Element) {
              const htmlEl = el as HTMLElement;
              if (htmlEl.id) return `#${CSS.escape(htmlEl.id)}`;
              const className = (htmlEl.className || "").toString().trim();
              if (className) {
                const cls = className.split(/\s+/).filter(Boolean).slice(0, 2);
                if (cls.length)
                  return `${el.tagName.toLowerCase()}.${cls.map((c) => CSS.escape(c)).join(".")}`;
              }
              return el.tagName.toLowerCase();
            }

            const candidates = Array.from(
              document.querySelectorAll(
                "p, span, a, li, label, h1, h2, h3, h4, h5, h6, button",
              ),
            );
            const findings: Array<{
              text: string;
              selector: string;
              ratio: number;
              fg: string;
              bg: string;
              fontSizePx: number;
              fontWeight: number;
              threshold: number;
            }> = [];

            for (const el of candidates) {
              if (!isVisible(el)) continue;

              const text = (el.textContent || "").replace(/\s+/g, " ").trim();
              if (text.length < 3) continue;

              const style = window.getComputedStyle(el);
              const fgRaw = style.color;
              const bgRaw = window.getComputedStyle(el).backgroundColor;
              const fg = parseCssColor(fgRaw);
              if (!fg || fg[3] === 0) continue;

              const bg = getEffectiveBackgroundColor(el);

              // If text color is translucent (e.g. text-white/80), blend it over the effective background.
              const fgEff = fg[3] >= 1 ? fg : blendOver(fg, bg);
              const fgRgb: [number, number, number] = [
                fgEff[0],
                fgEff[1],
                fgEff[2],
              ];
              const bgRgb: [number, number, number] = [bg[0], bg[1], bg[2]];

              const ratio = contrastRatio(fgRgb, bgRgb);

              const fontSizePx = Number.parseFloat(style.fontSize || "16");
              const fontWeight = Number.parseInt(style.fontWeight || "400", 10);
              const isBold = fontWeight >= 700;
              const isLargeText =
                fontSizePx >= 18.66 || (isBold && fontSizePx >= 14);
              const threshold = isLargeText ? 3 : 4.5;

              if (ratio < threshold) {
                findings.push({
                  text: text.slice(0, 120),
                  selector: simpleSelector(el),
                  ratio: Number(ratio.toFixed(2)),
                  fg: fgRaw,
                  bg: bgRaw === "rgba(0, 0, 0, 0)" ? "(inherited)" : bgRaw,
                  fontSizePx: Number(fontSizePx.toFixed(2)),
                  fontWeight,
                  threshold,
                });
              }
            }

            findings.sort((a, b) => a.ratio - b.ratio);
            return {
              count: findings.length,
              worst: findings.slice(0, 25),
            };
          });

          const reportPath = path.join(
            OUT_DIR,
            `${route.name}__${vp.name}.contrast.json`,
          );
          fs.writeFileSync(
            reportPath,
            JSON.stringify(contrastFindings, null, 2),
            "utf-8",
          );
        });
      }
    });
  }
});
