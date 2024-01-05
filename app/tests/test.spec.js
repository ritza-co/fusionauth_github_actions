const { test, expect } = require('@playwright/test');

test('Test login', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const loginLink = await page.waitForSelector('a[href="/login"]');
  await loginLink.click();
  await page.waitForNavigation();
  expect(page.url()).toContain('http://localhost:9011/oauth2/authorize?response_type=code');
  await page.fill('#loginId', 'richard@example.com');
  await page.fill('#password', 'password');
  await page.click('button.blue.button');
  await page.waitForNavigation();
  expect(page.url()).toBe('http://localhost:3000/account');
  await page.waitForSelector('p.header-email');
  const emailText = await page.textContent('p.header-email');
  expect(emailText).toBe('richard@example.com');
});