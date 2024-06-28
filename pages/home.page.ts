import { Page } from "@playwright/test";

export default class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goto(url: string) {
    await this.page.goto(url);
  }

  //Locators
  myAccDropdown = () => this.page.locator("//li[@class='nav-item dropdown dropdown-hoverable']//span[contains(.,'My account')]");

  //li//span[@class="title"][contains(.,'My account')]
  loginButton = () => this.page.locator("//li[@class='nav-item dropdown dropdown-hoverable']//span[contains(.,'Login')]");
  registerButton = () => this.page.locator("//li[@class='nav-item dropdown dropdown-hoverable']//span[contains(.,'Register')]");

  //Actions
  public async clickRegisterButton() {
    await this.myAccDropdown().hover();
    await this.page.waitForTimeout(3000);
    await this.registerButton().click();
  }
}
