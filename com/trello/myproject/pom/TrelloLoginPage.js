// com/trello/myproject/pom/TrelloLoginPage.js

class TrelloLoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Define locators
    this.enterMail = page.locator("//input[@id='username-uid1']");
    this.loginContinueButton = page.locator("//span[normalize-space()='Continue']");
  }

  async enterEmail(email) {
    await this.enterMail.fill(email);
  }

  async clickContinue() {
    await this.loginContinueButton.click();
  }
}

module.exports = { TrelloLoginPage };
