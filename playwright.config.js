import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "", ".env") });
export default defineConfig({
  testDir: "./src/e2e",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: false,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  // globalSetup: path.resolve(__dirname, "./src/e2e/global.js"),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: "http://localhost:3000",
    // storageState: path.resolve(__dirname, "./src/e2e/auth.json"),
    trace: "on-first-retry",
    browserName: "chromium",
  },

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: "chromium",
  //     use: { ...devices["Desktop Chrome"] },
  //   },

  //   {
  //     name: "firefox",
  //     use: { ...devices["Desktop Firefox"] },
  //   },

  //   {
  //     name: "webkit",
  //     use: { ...devices["Desktop Safari"] },
  //   },
  // ],
  projects: [
    {
      name: "setup",
      testMatch: "**/*.setup.ts",
    },
    {
      name: "e2e",
      dependencies: ["setup"],
      use: {
        storageState: path.resolve(__dirname, "src/e2e/auth.json"),
      },
    },
  ],
  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});
