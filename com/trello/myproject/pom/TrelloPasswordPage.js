// com/trello/myproject/pom/TrelloPasswordPage.js

class TrelloPasswordPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.enterPwd = page.locator("//input[@id='password']");
    this.clickOnPwdButton = page.locator("//span[text()='Log in']");
  }

  async enterPassword(password) {
    await this.enterPwd.fill(password);
  }

  async clickLoginButton() {
    await this.clickOnPwdButton.click();
  }
}

module.exports = { TrelloPasswordPage };
