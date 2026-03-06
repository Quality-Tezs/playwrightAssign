import { expect } from '@playwright/test';

export class CheckoutPage {

constructor(page){
    this.page = page;
}

async startCheckout(){
    await this.page.locator('[data-test="checkout"]').click();
}

async fillInformation(firstName,lastName,postalCode){

    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);

    await this.page.locator('[data-test="continue"]').click();
}

async finishOrder(){
    await this.page.locator('[data-test="finish"]').click();
}

async verifyOrderSuccess(){
    await expect(this.page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
	}

}