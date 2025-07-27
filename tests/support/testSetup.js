// tests/support/testSetup.spec.js
import { test as base, expect } from '@playwright/test';
import { TrelloHomePage } from '../../com/trello/myproject/pom/TrelloHomePage';
import { TrelloLoginPage } from '../../com/trello/myproject/pom/TrelloLoginPage';
import { TrelloPasswordPage } from '../../com/trello/myproject/pom/TrelloPasswordPage';
import { TrelloBoardsPage } from '../../com/trello/myproject/pom/TrelloBoardsPage';
import { TrelloLogoutPage } from '../../com/trello/myproject/pom/TrelloLogoutPage';
import { readPropertyFile } from '../../com/trello/myproject/genericutility/fileUtility';

export const test = base.extend({
  pageWithLogin: async ({ page }, use) => {
    const username = await readPropertyFile('username');
    const password = await readPropertyFile('password');
    const url = await readPropertyFile('url');

    const homePage = new TrelloHomePage(page);
    const loginPage = new TrelloLoginPage(page);
    const pwdPage = new TrelloPasswordPage(page);

    await page.goto(url);
    await homePage.loginOption.click();
    await loginPage.enterMail.fill(username);
    await loginPage.loginContinueButton.click();
    await pwdPage.enterPwd.fill(password);
    await pwdPage.clickOnPwdButton.click();

    await use(page);

    const boardsPage = new TrelloBoardsPage(page);
    const logoutPage = new TrelloLogoutPage(page);

    await boardsPage.profileIcon.click();
    await boardsPage.logoutOption.click();
    await logoutPage.logoutButton.click();

   // pageWithLogin.close()
  
    
  },
});

export { expect };
