import { test } from "@playwright/test";
const url = "http://localhost:3000";

// require("dotenv").config({ path: ".env.test" });

test("Test plant page", async ({ browser }) => {
  //  create new context for page
  const context = await browser.newContext();
  const page = await context.newPage();
  // navigate to root
  await page.goto(url);
});
