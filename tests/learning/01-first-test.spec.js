//Importart las funciones de playwright - liberaria o el modulo
// test - se usa para definir un caso de pruebas
//expect - se usa para hacer validaciones (assertions)
import {test,expect} from '@playwright/test';

//Definicion de un caso de prueba
// El text den de test() es el nombre de nuestra prueba
test('First PLaywright test - Login en SauceDemo', async ({page}) => { // page = WebDriver
    await page.goto('https://www.saucedemo.com/')
});
