import {test,expect} from '@playwright/test';


test('Ejemplo 1 Navigation', async ({context, page}) => { 
    /*Flujo
    1. Abrir login
    2. haver login
    3. Ir al carrito
    4. Regresar (goBack)
    5. Recargar (reload)
    */

    await page.goto('https://www.saucedemo.com/')
    const userNameInput = page.locator("[data-test = 'username']")
    const passwordInput = page.locator("[data-test = 'password']")
    const loginButton = page.locator("[data-test = 'login-button']")
    
    await userNameInput.fill('standard_user')
    await passwordInput.fill('secret_sauce')
    await loginButton.click()

    //Validar invetory
    await expect(page).toHaveURL(/inventory.html/)

    //ir al carrito
    await page.locator('.shopping_cart_link').click()

    // Validar pagina del carrtio
    await expect(page).toHaveURL(/cart.html/)

    //Regresar a una pagina anterior
    await page.goBack()

    await expect(page).toHaveURL(/inventory.html/)

    //Reload
    await page.reload()

    await expect(page).toHaveURL(/inventory.html/)

    await page.goto('https://www.example.com/')

    await expect(page).toHaveURL('https://www.example.com/')

    //Abrir una nueva pestaña
    const newPagePromise = context.waitForEvent('page')
    await page.evaluate(() =>{
        window.open('https://www.example.com/','_blank')
    })

    //Capturar la nueva pestaña
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL('https://www.example.com/')

    
});