// tests/support/testSetup.spec.js
import { test as base, expect } from '@playwright/test';
import { TrelloHomePage } from '../../com/trello/myproject/pom/TrelloHomePage';
import { TrelloLoginPage } from '../../com/trello/myproject/pom/TrelloLoginPage';
import { TrelloPasswordPage } from '../../com/trello/myproject/pom/TrelloPasswordPage';
import { TrelloBoardsPage } from '../../com/trello/myproject/pom/TrelloBoardsPage';
import { TrelloLogoutPage } from '../../com/trello/myproject/pom/TrelloLogoutPage';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Load environment variables from .env file

export const test = base.extend({
  pageWithLogin: async ({ page }, use) => {
    // 🔐 Secure way to fetch credentials
    const username = process.env.TRELLO_USERNAME;
    const password = process.env.TRELLO_PASSWORD;
    const url = process.env.TRELLO_URL;

    const homePage = new TrelloHomePage(page);
    const loginPage = new TrelloLoginPage(page);
    const pwdPage = new TrelloPasswordPage(page);

    await page.goto(url);
    await homePage.loginOption.click();
    await loginPage.enterMail.fill(username);
    await loginPage.loginContinueButton.click();
    await pwdPage.enterPwd.fill(password);
    await pwdPage.clickOnPwdButton.click();
      
      await use(page); // Run the test steps

    const boardsPage = new TrelloBoardsPage(page);
    const logoutPage = new TrelloLogoutPage(page);


    await boardsPage.clickDropDown();
    await boardsPage.clickBoardsButton();

    await boardsPage.clickProfileIcon();
    await boardsPage.clickLogout();
    await logoutPage.logoutButton.click();
    await page.close();
  },
});

export { expect };