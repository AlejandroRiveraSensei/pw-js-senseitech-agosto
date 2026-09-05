import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { InventoryPage } from '../pages/inventory.page.js';
import { CartPage } from '../pages/cart.page.js';
import { CheckoutPage } from '../pages/checkout.page.js';
import { CheckoutCompletePage } from '../pages/checkoutcomplete.page.js';

test('User can complete a purchse order successfully', async ({page}) => { 

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const carPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutcomplete = new CheckoutCompletePage(page);

    //Precondition - Abrir Paginar
    await loginPage.goto()

    //Step 1: Hacer Login
    await loginPage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL(/inventory/)
    await expect(inventoryPage.title).toHaveText('Products')

    //Step 2: Agregar backpack al carrito
    await inventoryPage.addBackpackToCart()
    await expect(inventoryPage.badgeCounter).toHaveText('1')

    //Step 3: Abrir carrito de compras
    await inventoryPage.openCart()
    await expect(carPage.title).toHaveText('Your Cart')

    //Step 4: Validar item y hacer click en checkout
    await expect(carPage.itemName).toHaveText('Sauce Labs Backpack')
    await carPage.clickCheckout()

    //Step 5: Llenar datos y hacer en continue
    await checkoutPage.fillCheckoutData('Alejandro','Rivera','90210')
    await checkoutPage.clickContinue()

    //Step 6: Validar Precio y hacer click en Finish
    await expect(checkoutPage.itemPrice).toHaveText('$29.99')
    await checkoutPage.clickFinish()

    //Validar el mensaje de "Thank you for your Order"
    await expect(checkoutcomplete.headerText).toHaveText('Thank you for your order!')

})