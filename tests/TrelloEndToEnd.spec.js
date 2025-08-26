// tests/TrelloEndToEnd.spec.js
import { test, expect } from './support/testSetup';
import { TrelloBoardsPage } from '../com/trello/myproject/pom/TrelloBoardsPage';
import { TrelloUserCreatedBoardsPage } from '../com/trello/myproject/pom/TrelloUserCreatedBoardsPage';
import { readPropertyFile } from '../com/trello/myproject/genericutility/fileUtility';
import { label, step, attachScreenshot } from '../com/trello/myproject/genericutility/allureHelper';

let boardTitle, boardTitle2, title1, url1;

test.describe('Trello End-to-End Flow', () => {
  test.beforeAll(async () => {
    boardTitle = await readPropertyFile('boardTitle');
    boardTitle2 = await readPropertyFile('boardTitle2');
    title1 = await readPropertyFile('title1');
    url1 = await readPropertyFile('url1');
  });

  test('Create board, add cards, and delete board', async ({ pageWithLogin }) => {
    label('owner', 'Nikhil');
    label('severity', 'critical');
    label('feature', 'Trello Board Management');

    const boardsPage = new TrelloBoardsPage(pageWithLogin);
    const createdPage = new TrelloUserCreatedBoardsPage(pageWithLogin);

    // Step 1: Create Board
    await step('Create board', async () => {
      await pageWithLogin.waitForTimeout(2000);
     // await expect(pageWithLogin).toHaveTitle(title1);
     // await expect(pageWithLogin).toHaveURL(url1);
      await boardsPage.createBoard.click();
      await boardsPage.boardTitleInput.fill(boardTitle);
      await boardsPage.createBoardButton.click();

      const screenshot = await pageWithLogin.screenshot();
      attachScreenshot('After board creation', screenshot);
    });

    // Step 2: Add Two Cards
    await step('Add two cards', async () => {
      await pageWithLogin.waitForTimeout(2000);
      await expect(pageWithLogin).toHaveTitle(boardTitle2);
      await pageWithLogin.keyboard.press('Enter');
      await pageWithLogin.keyboard.type('Card 1');
      await createdPage.addCard.click();

      await pageWithLogin.keyboard.press('Enter');
      await pageWithLogin.keyboard.type('Card 2');
      await createdPage.addCard.click();
    });

    // Step 3: Delete the Created Board
    await step('Delete the board', async () => {
      await createdPage.profileIcon.click();
      await createdPage.closeBoard.click();
      await createdPage.closeBoardButton.click();
      await createdPage.profileIcon.click();
      await createdPage.deletePermenantLinltext.click();
      await createdPage.deletePermanentButton.click();
    });
  });
});
