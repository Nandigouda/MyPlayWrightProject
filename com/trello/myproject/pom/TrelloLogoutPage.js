// com/trello/myproject/pom/TrelloLogoutPage.js

class TrelloLogoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.logoutButton = page.locator("//button[@id='logout-submit']");
  }

  async clickLogoutButton() {
    // Ensure the logout button is visible and enabled before clicking
    await this.logoutButton.waitFor({ state: 'visible' });
    await this.logoutButton.click();
  }
}

module.exports = { TrelloLogoutPage };
// Export the class for use in other files