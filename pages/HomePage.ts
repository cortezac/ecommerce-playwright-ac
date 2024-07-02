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
  addOndsDropdown = () => this.page.locator('//span[@class="title"][contains(.,"AddOns")]');
  addOnsItem = (item: string) => this.page.getByRole("link", { name: `${item}` });
  myAccountDropdown = () => this.page.locator('//span[@class="title"][contains(.,"My account")]');
  myAccountItem = (item: string) => this.page.getByRole("link", { name: `${item}` });
  megaMenuDropdown = () => this.page.locator('//span[@class="title"][contains(.,"Mega Menu")]');
  dropDown = (dropdown: string) => this.page.locator(`//span[@class="title"][contains(.,'${dropdown}')]`); //generic locator for dropdown
  menuItem = (item: string) => this.page.getByRole("link", { name: `${item}` }); // generic locator for item in dropdown

  //Actions
  public async clickMegaMenuItem(item: string) {
    await this.megaMenuDropdown().hover();
    await this.menuItem(item).first().click();
  }

  public async clickDropDown(dropdown: string, item: string) {
    await this.dropDown(dropdown).hover();
    await this.menuItem(item).click();
  }
}
