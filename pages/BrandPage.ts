import { Page } from "@playwright/test";

export default class BrandPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async goto(url: string) {
    await this.page.goto(url);
  }

  //Locators
  brandName = (brand: string) => this.page.locator(`//h1[@class="h4"][contains(.,'${brand}')]`);
  brandProduct = (product: string) => this.page.locator(`//a[contains(.,'${product}')]`);

  //Actions
  public async clickBrandProduct(product: string) {
    await this.brandProduct(product).click();
  }
}
