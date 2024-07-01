import { Page } from "@playwright/test";
import * as testData from "../test-data/testData.json";

export default class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goto(url: string) {
    await this.page.goto(url);
  }

  //Locators
  emailTextBox = () => this.page.locator('//input[@id="input-email"]');
  passwordTextBox = () => this.page.locator('//input[@id="input-password"]');
  loginButton = () => this.page.locator('//input[@value="Login"]');

  //Actions
  public async inputEmail(email: string) {
    await this.emailTextBox().fill(email);
  }

  public async inputPassword(password: string) {
    await this.passwordTextBox().fill(password);
  }

  public async clickLoginButton() {
    await this.loginButton().click();
  }

  //Scenario
  public async loginScenario() {
    await this.inputEmail(testData.RegistrationDetails.email);
    await this.inputPassword(testData.RegistrationDetails.password);
    await this.clickLoginButton();
  }
}
