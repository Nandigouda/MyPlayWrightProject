// com/trello/myproject/pom/TrelloBoardsPage.js

class TrelloBoardsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.createBoard = page.locator("//span[normalize-space()='Create new board']");
    this.qasm6Board = page.locator("//div[@title='qasm6']");
    this.boardTitleInput = page.locator("//input[@type='text']");
    this.createBoardButton = page.locator("//button[text()='Create']");
    this.profileIcon = page.locator("//span[@class='lyE6dN0zPcEtwe PXrUPxLInxAuOB UUXk7U_m2LcHHZ']");
    this.logoutOption = page.locator("//button[@data-testid='account-menu-logout']//span[@class='bH80RvHHmoWYhk']");
    this.createStaticBoard = page.locator("//p[@class='szBTSFrvPTLGHM']");
    this.createStaticBoardClick = page.locator("//span[normalize-space()='Create board']");
  }

  // Methods to interact with the elements
  async clickCreateBoard() {
    await this.createBoard.click();
  }

  async fillBoardTitle(title) {
    await this.boardTitleInput.fill(title);
  }

  async clickCreateBoardButton() {
    await this.createBoardButton.click();
  }

  async clickProfileIcon() {
    await this.profileIcon.click();
  }

  async clickLogout() {
    await this.logoutOption.click();
  }

  async clickCreateStaticBoard() {
    await this.createStaticBoard.click();
  }

  async clickCreateStaticBoardConfirm() {
    await this.createStaticBoardClick.click();
  }

  async openBoardByTitle() {
    await this.qasm6Board.click();
  }
}

module.exports = { TrelloBoardsPage };
