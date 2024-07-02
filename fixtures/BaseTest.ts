import { test as base, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import BrandPage from "../pages/BrandPage";
import ProductPage from "../pages/ProductPage";

type Fixtures = {
  homePage: HomePage;
  registrationPage: RegistrationPage;
  loginPage: LoginPage;
  brandPage: BrandPage;
  productPage: ProductPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  brandPage: async ({ page }, use) => {
    await use(new BrandPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { expect } from "@playwright/test";
