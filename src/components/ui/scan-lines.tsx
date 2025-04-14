"use client";

export function ScanLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden dark:block">
      <div
        className="h-full w-full opacity-[0.02]"
        style={{
          background: `repeating-linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 0.5px,
            transparent 1px
          )`,
          backgroundSize: "100% 4px",
        }}
      />
    </div>
  );
}
