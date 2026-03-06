import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../utils/testData';

test('Login Test', async ({ page }) => {

const loginPage = new LoginPage(page);
const inventoryPage = new InventoryPage(page);

await loginPage.goto();
await loginPage.login(users.username, users.password);

await inventoryPage.verifyInventoryPage();

});