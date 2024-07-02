import { expect, test } from "../fixtures/BaseTest";

test.describe("AddProduct", { tag: "@addToCart" }, () => {
  test("Verify Mega Menu Item", async ({ brandPage, productPage, registrationPage, loginPage, homePage, baseURL }) => {
    await registrationPage.goto(`${baseURL}route=account/login`);
    await loginPage.loginScenario();
    await homePage.clickMegaMenuItem("Apple");
    await expect(brandPage.brandName("Apple")).toBeVisible();
    await brandPage.clickBrandProduct("iPod Touch");
    await expect(productPage.productName("iPod Touch")).toBeVisible();
    await productPage.page.pause();
  });
});
