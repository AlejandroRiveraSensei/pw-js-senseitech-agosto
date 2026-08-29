import {test,expect} from '@playwright/test';

test('E2E Sauce Demo', async ({page}) => { 

//Precondition Abrir pagina de prueba:
await page.goto('https://www.saucedemo.com/')

// 1. Hacer el login con standar user
await page.fill('#user-name','standard_user')
await page.fill('#password','secret_sauce')
await page.click('#login-button')

// 2. Validar la pagina de inventario
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') //1er Assertion
await expect(page.getByText('Products')).toBeVisible();// 2da Assertion
await expect(page.locator('.inventory_item_name ')).toHaveCount(6) //3er Assertion

// 3. Validar informacion del product
await page.getByText('Sauce Labs Backpack').toBeVisible //1er ejemplo 
await page.locator('.inventory_item_name').filter({hastText:'Sauce Labs Backpack'}) //2do ejemplo

// 4. Agregar el producto al carrito
await page.locator("[data-test = 'add-to-cart-sauce-labs-backpack']").click()

// 5. Validar el contador del carrito   
await expect(page.locator('.shopping_cart_badge')).toHaveText('1') // Assertion

// 6. Abrir el carrito
await page.locator('.shopping_cart_link').click()

// 7. Validar el producto dentro del carrito
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html') //1er Assertion
await page.getByText('Sauce Labs Backpack') //2da Assetion

// 8. Iniciar checkout
await page.getByRole('button',{ name: 'checkout'}).click()
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html') //1er Assertion
await expect(page.getByText('Checkout: Your Information',{ exact : true})).toBeVisible()

// 9. Completar datos del checkout
await page.getByPlaceholder('First Name').fill('Alejandro')
await page.getByPlaceholder('Last Name').fill('Rivera')
await page.getByPlaceholder('Zip/Postal Code').fill('90210')

await page.getByRole('button',{ name: 'Continue'}).click()

// 10. Finalizar la compra
//await page.getByRole('button', {class: '.btn btn_action btn_medium cart_button'}).click() ESTE NO ES UNA FORMA VALIDA
await page.getByRole('button',{ name: 'Finish'}).click()
//await page.locator('.btn_medium').click()

// 11. Validar compra exitosa 
await expect(page.getByRole('heading',{name: 'Thank you for your order!'})).toBeVisible()
await expect(page.getByText('Thank you for your order!')).toBeVisible();

});