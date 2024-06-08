import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const link = page.getByLabel("메인페이지로 이동");

  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute("href", "/");

  const image = link.getByRole("img");
  await expect(image).toHaveAttribute("alt", "Arrr logo");
});
