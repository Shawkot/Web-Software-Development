// @ts-check
//const { test, expect } = require('@playwright/test');
import { test, expect } from "@playwright/test";
test('Checking the landing page!', async ({ page }) => {
  await page.goto('/');
  await page.getByTitle("TODO");

  /* const randomName = `Book ${10000 + Math.floor(Math.random() * 90000)}`;

  await page.waitForTimeout(1000);

  await page.getByLabel("Todo:").fill(randomName);
  await page.getByRole("button", {name: "Add"}).click(); */

  //await expect(page.getByText('Existing todos:')).toHaveCount(1);
  //await page.locator("li").filter({ hasText: "make tea" }).getByRole('button', {name: 'Delete'}).click();
});
test("checking creating todo", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Todo:").fill("do assignment");
  await page.getByRole("button", { name: "Add"}).click();
})
