import { expect, test } from "../fixtures/BaseTest";

test.describe("Register", { tag: "@register" }, () => {
  test("Valid Inputs", async ({ registrationPage, baseURL }) => {
    await registrationPage.goto(`${baseURL}route=account/register`);
    await registrationPage.registrationScenario();
  });
});
test.describe("Login", { tag: "@login" }, () => {
  test("Valid login", async ({ loginPage, baseURL }) => {
    await loginPage.goto(`${baseURL}route=account/login`);
    await loginPage.loginScenario();
  });
});
