// com/trello/myproject/pom/TrelloUserCreatedBoardsPage.js

class TrelloUserCreatedBoardsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.profileIcon = page.locator("//div[@class='Tp0C38uQUEpYUw']//button[@aria-label='Show menu']");
    this.profileIcon123 = page.locator("//span[@title='Nikhil Nandigoud (nikhilnandigoud)']");
    this.addCard = page.locator("//div/button[text()='Add list']");
    this.moreOption = page.locator("//ul/li/a[@class='board-menu-navigation-item-link js-open-more']");
    this.closeBoard = page.locator("//li[20]//button[1]");
    this.closeBoardButton = page.locator("//button[normalize-space()='Close']");
    this.deletePermenantLinltext = page.locator("//li/button[text()='Permanently delete board']");
    this.deletePermanentButton = page.locator("//button[normalize-space()='Permanently delete board']");
    this.addcardbutton = page.locator("//div/button[text()='Add list']");
  }

  // Methods (optional for cleaner tests)
  async clickAddCard() {
    await this.addCard.click();
  }

  async clickMoreOption() {
    await this.moreOption.click();
  }

  async clickCloseBoard() {
    await this.closeBoard.click();
  }

  async clickCloseBoardButton() {
    await this.closeBoardButton.click();
  }

  async clickDeleteBoardTextLink() {
    await this.deletePermenantLinltext.click();
  }
  async clickProfileIcon() {
    await this.profileIcon.click();
  }

  async clickDeleteBoardButton() {
    await this.deletePermanentButton.click();
  }

  async clickAddCardButton() {
    await this.addcardbutton.click();
  }
}

module.exports = { TrelloUserCreatedBoardsPage };
