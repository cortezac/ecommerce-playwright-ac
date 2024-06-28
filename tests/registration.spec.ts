import { expect, test } from "./fixtures/base";

test.describe("Register", { tag: "@register" }, () => {
  test("Valid Inputs", async ({ registrationPage, baseURL }) => {
    await registrationPage.goto(`${baseURL}route=account/register`);
    await registrationPage.registrationJourney();
  });
});
