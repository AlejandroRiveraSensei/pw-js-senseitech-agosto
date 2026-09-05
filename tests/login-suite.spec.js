import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/login.page.js'
import { InventoryPage } from '../pages/inventory.page.js';
import { users } from '../data/users.js'

/*
Hooks - Ganchos

Sirven para:
 - Evitar repotir codigo ejemplo: navegacion a la pagina principal
 - Prepara el entorno antes de cada test ejemplo: tomar algun ID de base de datos/API
 - Limpiar datos despues de cada prueba ejemplo eliminar el usuario creado

 * beforeAll - Corre una ves antes de todos los test
 * beforeEach - Corre antes de cada test
 * afterEach - Corre despues de cada test
 * afterAll - corre una ves al final
*/


test.describe('SauceDemo - Login Test Suite', () => {

    let loginPage;
    let inventoryPage;

    test.beforeAll(async () => {
        console.log('Before all - Setup Global')
    })

    test.beforeEach(async ({page}) => {
        console.log('Before each - Navegacio a la pagina - El mas usado')

        loginPage = new LoginPage(page)
        inventoryPage = new InventoryPage(page)
        
        await loginPage.goto()

    })
    
    test('TC01 - Login exitoso con credenciales válidas', async ({page}) => { 
        await loginPage.login(users.standard.username,users.standard.password)

        await expect(page).toHaveURL(/check/)
        await expect(inventoryPage.title).toHaveText('Products')
    })

    test('TC02 - Login inválido con password incorrecto', async ({page}) => { 
        await loginPage.login(users.invalid.username,users.invalid.password)

        await expect(loginPage.errorBanner).toBeVisible()
        await expect(loginPage.errorBanner).toContainText('Username and password do not match')

    })

        test('TC03 - Login con usuario bloqueado', async ({page}) => { 
        await loginPage.login(users.locked.username,users.locked.password)

        await expect(loginPage.errorBanner).toBeVisible()
        await expect(loginPage.errorBanner).toContainText('Sorry, this user has been locked out')

    })

        test.afterEach(async () => {
        console.log('After each - Test Finalizado')
        })

        test.afterAll(async () => {
            console.log('After all - Fin de todos los test')
        })
})
