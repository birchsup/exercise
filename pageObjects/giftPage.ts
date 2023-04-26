import { Page } from 'playwright';

export class GiftPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.scentbird.com/gift?months=6');
    }

    async checkThatPageLoaded() {
        await this.page.waitForSelector('#main', { state: 'visible' });
    }

    async fillFormWithInvalidDate() {
        const RecName = await this.page.waitForSelector('[data-testid="recipientName"]', { state: 'visible' });
        const RecEmail = await this.page.waitForSelector('[data-testid="recipientEmail"]', { state: 'visible' });
        const Message = await this.page.waitForSelector('[data-testid="recipientMessage"]', { state: 'visible' });
        const Name = await this.page.waitForSelector('[data-testid="senderName"]', { state: 'visible' });
        const sendDateRadioButton = await this.page.$('[data-testid="sendDateOptionLater"]');


        await RecName.type('Rec Name');
        await RecEmail.type('123@email.com');
        await Message.type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis lacus sed est dapibus, vel commodo metus accumsan. Morbi egestas eros id ex tincidunt, a lacinia tellus pellentesque. Proin malesuada dui et diam lobortis, vel egestas lectus euismod. Donec convallis dictum ante, ac feugiat mi eleifend vitae. Suspendisse eget odio vel mi vehicula ultrices ac quis neque. Aliquam erat volutpat. Duis non libero non nulla porttitor bibendum. Phasellus quis pulvinar nulla. Aliquam nec semper ipsum. Duis bibendum ante eget sem fringilla elementum. Nam in ipsum in tellus aliquam efficitur vel vitae dolor. Curabitur ornare quis est id malesuada. Sed non ligula non quam ultrices rhoncus. Curabitur consequat, purus vel placerat hendrerit, velit leo volutpat ipsum, in bibendum mi lorem sit amet mi.');
        await Name.type('Dmitrii');
        await sendDateRadioButton?.click();
        await sendDateRadioButton?.isChecked();

        const DateMonth = await this.page.waitForSelector('[data-testid="dateMonth"]', { state: 'visible' });
        const DateDay = await this.page.waitForSelector('[data-testid="dateDay"]', { state: 'visible' });
        const DateYear = await this.page.waitForSelector('[data-testid="dateYear"]', { state: 'visible' });

        const currentDate = new Date();
        const previousMonth = currentDate.getMonth();
        await this.page.selectOption('[data-testid="dateMonth"]', previousMonth.toString());
        await this.page.getByTestId('checkoutNowButton').click();
        await this.page.waitForSelector('[data-testid="dateError"]', { state: 'visible' });

    }
    async fillFormWithInvalidEmail() {
        const RecName = await this.page.waitForSelector('[data-testid="recipientName"]', { state: 'visible' });
        const RecEmail = await this.page.waitForSelector('[data-testid="recipientEmail"]', { state: 'visible' });
        const Message = await this.page.waitForSelector('[data-testid="recipientMessage"]', { state: 'visible' });
        const Name = await this.page.waitForSelector('[data-testid="senderName"]', { state: 'visible' });
        const sendDateOptionNow = await this.page.$('[data-testid="sendDateOptionLater"]');


        await RecName.type('Rec Name');
        await RecEmail.type('email.com');
        await Message.type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis lacus sed est dapibus, vel commodo metus accumsan. Morbi egestas eros id ex tincidunt, a lacinia tellus pellentesque. Proin malesuada dui et diam lobortis, vel egestas lectus euismod. Donec convallis dictum ante, ac feugiat mi eleifend vitae. Suspendisse eget odio vel mi vehicula ultrices ac quis neque. Aliquam erat volutpat. Duis non libero non nulla porttitor bibendum. Phasellus quis pulvinar nulla. Aliquam nec semper ipsum. Duis bibendum ante eget sem fringilla elementum. Nam in ipsum in tellus aliquam efficitur vel vitae dolor. Curabitur ornare quis est id malesuada. Sed non ligula non quam ultrices rhoncus. Curabitur consequat, purus vel placerat hendrerit, velit leo volutpat ipsum, in bibendum mi lorem sit amet mi.');
        await Name.type('Dmitrii');
        await sendDateOptionNow?.isChecked();
        await this.page.getByTestId('checkoutNowButton').click();
        await this.page.waitForSelector('[data-testid="recipientEmail"]', { state: 'visible' });

    }

    async sendFormNow() {
        const RecName = await this.page.waitForSelector('[data-testid="recipientName"]', { state: 'visible' });
        const RecEmail = await this.page.waitForSelector('[data-testid="recipientEmail"]', { state: 'visible' });
        const Message = await this.page.waitForSelector('[data-testid="recipientMessage"]', { state: 'visible' });
        const Name = await this.page.waitForSelector('[data-testid="senderName"]', { state: 'visible' });
        const sendDateOptionNow = await this.page.$('[data-testid="sendDateOptionLater"]');


        await RecName.type('Rec Name');
        await RecEmail.type('test@email.com');
        await Message.type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis lacus sed est dapibus, vel commodo metus accumsan. Morbi egestas eros id ex tincidunt, a lacinia tellus pellentesque. Proin malesuada dui et diam lobortis, vel egestas lectus euismod. Donec convallis dictum ante, ac feugiat mi eleifend vitae. Suspendisse eget odio vel mi vehicula ultrices ac quis neque. Aliquam erat volutpat. Duis non libero non nulla porttitor bibendum. Phasellus quis pulvinar nulla. Aliquam nec semper ipsum. Duis bibendum ante eget sem fringilla elementum. Nam in ipsum in tellus aliquam efficitur vel vitae dolor. Curabitur ornare quis est id malesuada. Sed non ligula non quam ultrices rhoncus. Curabitur consequat, purus vel placerat hendrerit, velit leo volutpat ipsum, in bibendum mi lorem sit amet mi.');
        await Name.type('Dmitrii');
        await sendDateOptionNow?.isChecked();
        await this.page.getByTestId('checkoutNowButton').click();
        await this.page.waitForSelector('[data-testid="cartModal"]', { state: 'visible' });

    }

    async sendFormInFeature() {
        const RecName = await this.page.waitForSelector('[data-testid="recipientName"]', { state: 'visible' });
        const RecEmail = await this.page.waitForSelector('[data-testid="recipientEmail"]', { state: 'visible' });
        const Message = await this.page.waitForSelector('[data-testid="recipientMessage"]', { state: 'visible' });
        const Name = await this.page.waitForSelector('[data-testid="senderName"]', { state: 'visible' });
        const sendDateRadioButton = await this.page.$('[data-testid="sendDateOptionLater"]');


        await RecName.type('Rec Name');
        await RecEmail.type('test@email.com');
        await Message.type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis lacus sed est dapibus, vel commodo metus accumsan. Morbi egestas eros id ex tincidunt, a lacinia tellus pellentesque. Proin malesuada dui et diam lobortis, vel egestas lectus euismod. Donec convallis dictum ante, ac feugiat mi eleifend vitae. Suspendisse eget odio vel mi vehicula ultrices ac quis neque. Aliquam erat volutpat. Duis non libero non nulla porttitor bibendum. Phasellus quis pulvinar nulla. Aliquam nec semper ipsum. Duis bibendum ante eget sem fringilla elementum. Nam in ipsum in tellus aliquam efficitur vel vitae dolor. Curabitur ornare quis est id malesuada. Sed non ligula non quam ultrices rhoncus. Curabitur consequat, purus vel placerat hendrerit, velit leo volutpat ipsum, in bibendum mi lorem sit amet mi.');
        await Name.type('Dmitrii');
        await sendDateRadioButton?.click();
        await sendDateRadioButton?.isChecked();

        await Promise.all([
            this.page.waitForSelector('[data-testid="dateMonth"]', { state: 'visible' }),
            this.page.waitForSelector('[data-testid="dateDay"]', { state: 'visible' }),
            this.page.waitForSelector('[data-testid="dateYear"]', { state: 'visible' })
        ]);

        const currentDate = new Date();
        const nextMonth = currentDate.getMonth() + 2;
        await this.page.selectOption('[data-testid="dateMonth"]', nextMonth.toString());
        await this.page.getByTestId('checkoutNowButton').click();
        await this.page.waitForSelector('[data-testid="cartModal"]', { state: 'visible' });

    }
}
