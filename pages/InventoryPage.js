import { expect } from '@playwright/test';

export class InventoryPage {

constructor(page){
    this.page = page;
    this.productsTitle = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
}

async verifyInventoryPage(){
    await expect(this.productsTitle).toContainText('Products');
}

async addTwoProducts(){
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
}

async verifyCartCount(){
    await expect(this.cartBadge).toHaveText('2');
}

async goToCart(){
    await this.cartIcon.click();
	}
	
}