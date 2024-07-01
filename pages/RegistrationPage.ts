import { Page } from "@playwright/test";
import * as testData from "../test-data/testData.json";

export default class RegistrationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  public async goto(url: string) {
    await this.page.goto(url);
  }
  //Locators
  firstNameTextBox = () => this.page.locator('//input[@id="input-firstname"]');
  lastNameTextBox = () => this.page.locator('//input[@id="input-lastname"]');
  emailTextBox = () => this.page.locator('//input[@id="input-email"]');
  telephoneTextBox = () => this.page.locator('//input[@id="input-telephone"]');
  passwordTextBox = () => this.page.locator('//input[@id="input-password"]');
  passwordConfirmTextBox = () => this.page.locator('//input[@id="input-confirm"]');
  subscribeYesCheckbox = () => this.page.locator('//div//input[@id="input-newsletter-yes"]');
  subscribeNoCheckbox = () => this.page.locator('//div//input[@id="input-newsletter-no"]');
  policyCheckbox = () => this.page.locator('//div//input[@id="input-agree"]');
  continueButton = () => this.page.locator('//div//input[@value="Continue"]');

  //Actions
  public async inputFirstName(firstName: string) {
    await this.firstNameTextBox().fill(firstName);
  }

  public async inputLastName(lastName: string) {
    await this.lastNameTextBox().fill(lastName);
  }

  public async inputEmail(email: string) {
    await this.emailTextBox().fill(email);
  }

  public async inputTelephone(telephone: string) {
    await this.telephoneTextBox().fill(telephone);
  }

  public async inputPassword(password: string) {
    await this.passwordTextBox().fill(password);
  }

  public async inputPasswordConfirm(passwordConfirm: string) {
    await this.passwordConfirmTextBox().fill(passwordConfirm);
  }

  public async clickSubscribeYesCheckbox() {
    await this.subscribeYesCheckbox().click({ force: true });
  }

  public async clickSubscribeNoCheckbox() {
    await this.subscribeNoCheckbox().click({ force: true });
  }

  public async clickPolicyCheckbox() {
    await this.policyCheckbox().click({ force: true });
  }

  public async clickContinueButton() {
    await this.continueButton().click();
  }
  //Scenario
  public async registrationScenario() {
    await this.inputFirstName(testData.RegistrationDetails.firstName);
    await this.inputLastName(testData.RegistrationDetails.lastName);
    await this.inputEmail(testData.RegistrationDetails.email);
    await this.inputTelephone(testData.RegistrationDetails.telephone);
    await this.inputPassword(testData.RegistrationDetails.password);
    await this.inputPasswordConfirm(testData.RegistrationDetails.password);
    await this.clickSubscribeYesCheckbox();
    await this.clickSubscribeNoCheckbox();
    await this.clickPolicyCheckbox();
    // await this.clickContinueButton();
  }
}
