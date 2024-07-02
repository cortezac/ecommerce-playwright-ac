import { Page } from "@playwright/test";

export default class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goto(url: string) {
    await this.page.goto(url);
  }

  //Locators
  productName = (product: string) => this.page.locator(`//h1[@class="h3"][contains(.,'${product}')]`);

  //Actions
}
