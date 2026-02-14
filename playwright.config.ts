import type { PlaywrightTestConfig } from "@playwright/test";

const PORT = 3001;

const config: PlaywrightTestConfig = {
  testDir: "./playwright",
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    baseURL: `http://localhost:${PORT}`,
    screenshot: "off",
    video: "off",
    trace: "off",
  },
  webServer: {
    command: `npm run build && npm run start -- -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 120_000,
  },
  reporter: [["list"]],
};

export default config;
