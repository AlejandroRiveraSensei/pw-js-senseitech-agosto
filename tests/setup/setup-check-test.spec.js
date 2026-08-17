import {text, expect} from requiere('@playwright/test');


test('My First Test', async ({page}) =>{
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
})