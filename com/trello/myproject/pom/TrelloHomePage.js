// com/trello/myproject/pom/TrelloHomePage.js

class TrelloHomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Equivalent of @FindBy in Playwright
    this.loginOption = page.locator("//a[text()='Get Trello for free']/preceding-sibling::a[text()='Log in']");
  }

  async clickLoginOption() {
    await this.loginOption.click();
  }
}

module.exports = { TrelloHomePage };
