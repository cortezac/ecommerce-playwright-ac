import { test as base, expect } from "@playwright/test";
import HomePage from "../../pages/home.page";
import RegistrationPage from "../../pages/registration.page";

type Fixtures = {
  homePage: HomePage;
  registrationPage: RegistrationPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
});

export { expect } from "@playwright/test";
