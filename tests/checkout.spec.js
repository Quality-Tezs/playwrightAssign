import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users, checkoutInfo } from '../utils/testData';

test('Add to cart and complete checkout', async ({ page }) => {

const loginPage = new LoginPage(page);
const inventoryPage = new InventoryPage(page);
const checkoutPage = new CheckoutPage(page);

await loginPage.goto();
await loginPage.login(users.username, users.password);

await inventoryPage.addTwoProducts();
await inventoryPage.verifyCartCount();

await inventoryPage.goToCart();

await checkoutPage.startCheckout();

await checkoutPage.fillInformation(
checkoutInfo.firstName,
checkoutInfo.lastName,
checkoutInfo.postalCode
);

await checkoutPage.finishOrder();

await checkoutPage.verifyOrderSuccess();

});