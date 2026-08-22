//Importart las funciones de playwright - liberaria o el modulo
// test - se usa para definir un caso de pruebas
//expect - se usa para hacer validaciones (assertions)
import {test,expect} from '@playwright/test';

//Definicion de un caso de prueba
// El text den de test() es el nombre de nuestra prueba
test('First PLaywright test - Login en SauceDemo', async ({page}) => { // page = WebDriver
    
    await page.goto('https://www.saucedemo.com/')

    await page.fill('#user-name','standard_user')

    await page.fill('#password','secret_sauce')

    await page.click('#login-button')

    //Ejemplo 1 Assetion
    await expect(page).toHaveURL(/inventory/)

    //Ejemplo 2 Assertion
    await expect(page.getByText('Products')).toBeVisible(); 

    //Ejemplo 3 assertions contar en elementos en la pagina
    await expect(page.locator('.inventory_item_name')).toHaveCount(6)

    //getByText - basado en el texto visible
    //await page.getByText('Sauce Labs Backpack').click()

    /*
    page.locator()
    //Recomnedados
    page.getByRole()
    page.getByText()
    page.getByLabel()
    */
});

test('Ejemplos Playwright', async ({page}) => { // page = WebDriver
    
    await page.goto('https://www.saucedemo.com/')

    /*
    page.locator()
    //Recomnedados
    page.getByRole()
    page.getByText()
    page.getByLabel()
    */

    //Ejemplo Locator
    page.locator('[data-test = "username"]').fill('standard_user')

    //Get by role - toma el webElement/Objeto de acuerdo a su tipo - la forma mas practica
    await page.getByRole('button').click

    /*
    Acciones en Playwright:
    click() - hace un click webElement
    fill() - escribe texto en un input/campo texto
    type() - escribe text pero lo hace caracter por caracter
    hover() - mover el mouse sobre un elemento
    check() - marcar un checkbox
    uncheck() - desmarcar un checkbox
    selectOption() - seleccion un valor en un dropdown
    press() - persionar teclas en el teclado 
    */

    /*
        Assertions mas comunes en Playwright

        toBeVisble() - verificar que un elemento sea visible
        toHaveText) - verificar el text de un elemento - que sea igual
        toContainsText() - verificar que una parte del texto sea correcto
        toHaveURL() -  verifica la URL 
        toHaveValue() - verificar que el inputo tenga cierto 
        toHaveCount() - verificar la cantidad de elementos
    */

});
