import { test, expect } from './support/testSetup.spec.js';
import { TrelloBoardsPage } from '../com/trello/myproject/pom/TrelloBoardsPage';
import { TrelloUserCreatedBoardsPage } from '../com/trello/myproject/pom/TrelloUserCreatedBoardsPage';
import { readPropertyFile } from '../com/trello/myproject/genericutility/fileUtility';

test('Trello E2E Test: Login, Create Board, Add Cards, Delete Board, Logout', async ({ pageWithLogin }) => {
  const boardTitle = await readPropertyFile('boadrtitle');
  const boardTitle2 = await readPropertyFile('boardTitle2');
  const expectedTitle = await readPropertyFile('title1');

  const boardsPage = new TrelloBoardsPage(pageWithLogin);
  const createdPage = new TrelloUserCreatedBoardsPage(pageWithLogin);

  // Validate board title and URL
      await pageWithLogin.waitForTimeout(2000);
  await expect(pageWithLogin).toHaveTitle(expectedTitle);
  await expect(pageWithLogin).toHaveURL('https://trello.com/u/nikhilnandigoud/boards');

  // Create Board
  await boardsPage.createBoard.click();
  await boardsPage.boardTitleInput.fill(boardTitle);
  await boardsPage.createBoardButton.click();

  // Add Cards
  await expect(pageWithLogin).toHaveTitle(boardTitle2);
  await pageWithLogin.keyboard.press('Enter');
  await pageWithLogin.keyboard.type('salar');
  await createdPage.addCard.click();

  await pageWithLogin.keyboard.press('Enter');
  await pageWithLogin.keyboard.type('kgf');
  await createdPage.addCard.click();

  // Delete board
  await createdPage.profileIcon.click();
  await createdPage.closeBoard.click();
  await createdPage.closeBoardButton.click();
  await createdPage.profileIcon.click();
  await createdPage.deletePermenantLinltext.click();
  await createdPage.deletePermanentButton.click();

  // Logout happens automatically in afterEach from testSetup.js
});
