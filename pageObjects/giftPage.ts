import { Page } from 'playwright';

export class GiftPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get previousMonth() {
        const currentDate = new Date();
        return (currentDate.getMonth() - 1).toString();
    }
    get nextMonth() {
        const currentDate = new Date();
        return (currentDate.getMonth() + 2).toString();
    }

    get giftLink() {
        return this.page.goto('https://www.scentbird.com/gift?months=6');
    }

    get mainPageLocator() {
        return this.page.locator('#main');
    }

    get RecName() {
        return this.page.getByTestId('recipientName');
    }
    get RecEmail() {
        return this.page.getByTestId('recipientEmail');
    }
    get Message() {
        return this.page.getByTestId('recipientMessage');
    }
    get Name() {
        return this.page.getByTestId('senderName');
    }
    get sendLaterRadioButton() {
        return this.page.getByTestId('sendDateOptionLater');
    }
    get yearField() {
        return this.page.getByTestId('dateYear');
    }
    get mounthField() {
        return this.page.getByTestId('dateMonth');
    }
    get dayField() {
        return this.page.getByTestId('dateDay');
    }
    get checkoutNowButton() {
        return this.page.getByTestId('checkoutNowButton');
    }
    get dateErrorMessage() {
        return this.page.getByTestId('dateError')
    }
    get sendNowRadioButton() {
        return this.page.getByTestId('sendDateOptionNow')
    }

    get emailErrorMessage() {
        return this.page.getByTestId('recipientEmailError')
    }

    get cartModal() {
        return this.page.getByTestId('cartModal')
    }
}
