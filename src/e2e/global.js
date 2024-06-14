import { chromium, expect, type FullConfig } from "@playwright/test";
export default async function GlobalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = "https://vitejs.dev/guide/";

  await page.goto(url);
  console.log("already logged in", url);

  await expect(
    page.getByRole("heading", { name: "Getting Started" })
  ).toBeVisible();

  // Select the input by id and type into

  await context.storageState({ path: storageState as string });

  await browser.close();
}
