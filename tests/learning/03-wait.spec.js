import {test,expect} from '@playwright/test';


test('Ejemplo 1 Waits', async ({page}) => { 

    //Mala Practica
//await page.waitForTimeout(60000)

await page.goto('https://www.saucedemo.com/')

//Reutilizar webElemets/ Guardar en una constante
const userNameInput = page.locator("[data-test = 'username']")
const passwordInput = page.locator("[data-test = 'password']")
const loginButton = page.locator("[data-test = 'login-button']")

// Explicit Wait
await expect(userNameInput).toBeVisible({timeout:60000})
await expect(passwordInput).toBeEditable()

await userNameInput.fill('standard_user')
await passwordInput.fill('secret_sauce')
await loginButton.click()

await page.waitForURL('**/inventory.html')

const addToCartBtn = page.locator("[data-test ='add-to-cart-sauce-labs-backpack']")
const removeBtn = page.locator("[data-test ='remove-sauce-labs-backpack']")

await addToCartBtn.click()
await expect(removeBtn).toBeVisible()

await removeBtn.click()
await expect(addToCartBtn).toBeVisible()

});
