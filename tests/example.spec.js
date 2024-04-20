const { test, expect } = require('@playwright/test');

async function login(page, username, password) {
  await page.goto('http://the-internet.herokuapp.com/login');
  await page.fill('//input[@id="username"]', username);
  await page.fill('//input[@id="password"]', password);
  await page.getByRole('button', { name: 'Login' }).click();
}

test('Login success', async ({ page }) => {
  await login(page, 'tomsmith', 'SuperSecretPassword!')
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
  // await expect(page.getByText('You logged out of the secure area!', { exact: true })).toBeVisible();
  await expect(page.getByText('You logged out of the secure area!')).toBeVisible();
});

test('Login failed - Password incorrect', async ({ page }) => {
  await login(page, 'tomsmith', 'Password!')
  await expect(page.getByText('Your password is invalid!')).toBeVisible();
});

test('Login failed - Username not found', async ({ page }) => {
  await login(page, 'tomholland', 'Password!')
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});


