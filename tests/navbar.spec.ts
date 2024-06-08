import { test, expect } from "@playwright/test";

test("navigation bar user flow", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const link = page.getByLabel("메인페이지로 이동");

  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute("href", "/");
  await link.click();
  await expect(page).toHaveURL("http://localhost:3000");

  const image = link.getByRole("img");
  await expect(image).toHaveAttribute("alt", "Arrr logo");

  const productLink = page.getByRole("link", { name: /product/i });
  const bestLink = page.getByRole("link", { name: /best/i });
  const arrrLifeLink = page.getByRole("link", { name: /Arrr life/i });

  // product Link click, toHaveUrl
  await productLink.click();
  await expect(page).toHaveURL("http://localhost:3000/product");

  await bestLink.click();
  await expect(page).toHaveURL("http://localhost:3000/best");

  await arrrLifeLink.click();
  await expect(page).toHaveURL("http://localhost:3000/arrr-life");

  const searchButton = page.getByLabel("search button");
  await expect(searchButton).toBeVisible();

  const recentlyViewedProductsButton = page.getByLabel(
    "recently viewed products",
  );
  await expect(recentlyViewedProductsButton).toBeVisible();

  const cartButton = page.getByLabel("cart");
  await expect(cartButton).toBeVisible();

  const loginButton = page.getByRole("link", { name: "로그인" });
  await loginButton.click();
  await expect(page).toHaveURL("http://localhost:3000/login");

  const signupButton = page.getByRole("link", { name: "회원가입" });
  await signupButton.click();
  await expect(page).toHaveURL("http://localhost:3000/signup");
});
