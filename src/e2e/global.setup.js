import { expect, test as setup } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// export default async function GlobalSetup(config) {
//   const { storageState } = config.projects[0].use;
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   const url = "http://localhost:3000";

//   await page.goto(url);
//   console.log("already logged in", url);

//   await expect(
//     page.getByRole("heading", { name: "Vite + React" })
//   ).toBeVisible();

//   // Select the input by id and type into

//   await context.storageState({ path: storageState });

//   await browser.close();
// }

setup("do login", async ({ page }) => {
  await page.goto("/");
  console.log("already logged in", page.url());

  await expect(
    page.getByRole("heading", { name: "Vite + React" })
  ).toBeVisible();

  // Select the input by id and type into

  const storageState = path.join(__dirname, "./auth.json");
  await page.context.storageState({ path: storageState });

  // await browser.close();
});
