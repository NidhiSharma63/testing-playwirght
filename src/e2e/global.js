import { chromium, expect } from "@playwright/test";

export default async function GlobalSetup(config) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = "http://localhost:3000";

  await page.goto(url);
  console.log("already logged in", url);

  await expect(
    page.getByRole("heading", { name: "Vite + React" })
  ).toBeVisible();

  // Select the input by id and type into

  await context.storageState({ path: storageState });

  await browser.close();
}
