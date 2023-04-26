import { test, expect } from '@playwright/test';

import { GiftPage } from '../pageObjects/giftPage';

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.navigate();
    await giftPage.checkThatPageLoaded();

  });
  test("Check that the date error appears", async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.fillFormWithInvalidDate();
  });

  test("Check that the email error appears", async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.fillFormWithInvalidEmail();
  });

  test("Check that the user can send form now", async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.sendFormNow();
  });
  test("Check that the user can send form to the feature date", async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.sendFormInFeature();
  });
})