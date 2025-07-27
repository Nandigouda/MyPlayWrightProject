// com/trello/myproject/pom/TrelloLogoutPage.js

class TrelloLogoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Define locator for the logout button
    this.logoutButton = page.locator("//button[@id='logout-submit']");
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }
}

module.exports = { TrelloLogoutPage };
