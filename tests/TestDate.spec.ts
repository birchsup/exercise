import { test, expect } from '@playwright/test';

import { GiftPage } from '../pageObjects/giftPage';

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.giftLink;
    await giftPage.mainPageLocator.isVisible;

  });
  test("Check that the date error appears", async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.RecName.type('Rec Name');
    await giftPage.RecEmail.type('123@email.com');
    await giftPage.Message.type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis lacus sed est dapibus, vel commodo metus accumsan. Morbi egestas eros id ex tincidunt, a lacinia tellus pellentesque. Proin malesuada dui et diam lobortis, vel egestas lectus euismod. Donec convallis dictum ante, ac feugiat mi eleifend vitae. Suspendisse eget odio vel mi vehicula ultrices ac quis neque. Aliquam erat volutpat. Duis non libero non nulla porttitor bibendum. Phasellus quis pulvinar nulla. Aliquam nec semper ipsum. Duis bibendum ante eget sem fringilla elementum. Nam in ipsum in tellus aliquam efficitur vel vitae dolor. Curabitur ornare quis est id malesuada. Sed non ligula non quam ultrices rhoncus. Curabitur consequat, purus vel placerat hendrerit, velit leo volutpat ipsum, in bibendum mi lorem sit amet mi.');
    await giftPage.Name.type('Dmitrii');
    await giftPage.sendLaterRadioButton?.click();
    await giftPage.sendLaterRadioButton?.isChecked();
    await Promise.all([
      giftPage.yearField.isVisible(),
      giftPage.mounthField.isVisible(),
      giftPage.dayField.isVisible()
    ]);
    await giftPage.mounthField.selectOption(giftPage.previousMonth);
    await giftPage.checkoutNowButton.click();
    await giftPage.dateErrorMessage.isVisible();

  });

  test("Check that the email error appears", async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.RecName.type('Rec Name');
    await giftPage.RecEmail.type('email.com');
    await giftPage.Message.type('Lorem Ipsum');
    await giftPage.emailErrorMessage.isVisible();
  });

  test("Check that the user can send form now", async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.RecName.type('Rec Name');
    await giftPage.RecEmail.type('123@email.com');
    await giftPage.Message.type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis lacus sed est dapibus, vel commodo metus accumsan. Morbi egestas eros id ex tincidunt, a lacinia tellus pellentesque. Proin malesuada dui et diam lobortis, vel egestas lectus euismod. Donec convallis dictum ante, ac feugiat mi eleifend vitae. Suspendisse eget odio vel mi vehicula ultrices ac quis neque. Aliquam erat volutpat. Duis non libero non nulla porttitor bibendum. Phasellus quis pulvinar nulla. Aliquam nec semper ipsum. Duis bibendum ante eget sem fringilla elementum. Nam in ipsum in tellus aliquam efficitur vel vitae dolor. Curabitur ornare quis est id malesuada. Sed non ligula non quam ultrices rhoncus. Curabitur consequat, purus vel placerat hendrerit, velit leo volutpat ipsum, in bibendum mi lorem sit amet mi.');
    await giftPage.Name.type('Dmitrii');
    await giftPage.sendNowRadioButton.isChecked();
    await giftPage.checkoutNowButton.click();
    await giftPage.cartModal.isVisible();
  });

  test("Check that the user can send form to the feature date", async ({ page }) => {
    const giftPage = new GiftPage(page);
    await giftPage.RecName.type('Rec Name');
    await giftPage.RecEmail.type('123@email.com');
    await giftPage.Message.type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis lacus sed est dapibus, vel commodo metus accumsan. Morbi egestas eros id ex tincidunt, a lacinia tellus pellentesque. Proin malesuada dui et diam lobortis, vel egestas lectus euismod. Donec convallis dictum ante, ac feugiat mi eleifend vitae. Suspendisse eget odio vel mi vehicula ultrices ac quis neque. Aliquam erat volutpat. Duis non libero non nulla porttitor bibendum. Phasellus quis pulvinar nulla. Aliquam nec semper ipsum. Duis bibendum ante eget sem fringilla elementum. Nam in ipsum in tellus aliquam efficitur vel vitae dolor. Curabitur ornare quis est id malesuada. Sed non ligula non quam ultrices rhoncus. Curabitur consequat, purus vel placerat hendrerit, velit leo volutpat ipsum, in bibendum mi lorem sit amet mi.');
    await giftPage.Name.type('Dmitrii');
    await giftPage.sendLaterRadioButton?.click();
    await giftPage.sendLaterRadioButton?.isChecked();
    await Promise.all([
      giftPage.yearField.isVisible(),
      giftPage.mounthField.isVisible(),
      giftPage.dayField.isVisible()
    ]);
    await giftPage.mounthField.selectOption(giftPage.nextMonth);
    await giftPage.checkoutNowButton.click();
    await giftPage.cartModal.isVisible();
  });
})