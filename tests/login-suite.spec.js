import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { InventoryPage } from '../pages/inventory.page.js';


test.describe('SauceDemo - Login Test Suite', () => {
    
    test('TC01 - Login exitoso con credenciales válidas', async ({page}) => { 
        const loginPage = new LoginPage(page)
        const inventoryPage = new InventoryPage(page)

        await loginPage.goto()
        await loginPage.login('standard_user','secret_sauce')

        await expect(page).toHaveURL(/inventory/)
        await expect(inventoryPage.title).toHaveText('Products')
    })

    test('TC02 - Login inválido con password incorrecto', async ({page}) => { 
        const loginPage = new LoginPage(page)

        await loginPage.goto()
        await loginPage.login('standard_user','wrong_password')

        await expect(loginPage.errorBanner).toBeVisible()
        await expect(loginPage.errorBanner).toContainText('Username and password do not match')

    })

    
})
