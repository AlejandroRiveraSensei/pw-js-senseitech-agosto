export class CheckoutPage{
    constructor (page){
        this.page = page
        //Declarar WebElements
        this.firstNameInput = page.locator('[data-test = "firstName"]')
        this.lastNameInput = page.locator('[data-test = "lastName"]')
        this.zipCodeInput = page.locator('[data-test = "postalCode"]')
        this.continueBtn = page.locator('[data-test = "continue"]')
        this.itemPrice = page.locator('[data-test = "inventory-item-price"]')
        this.finishBtn = page.locator('[data-test = "finish"]')

    }

    async fillCheckoutData(firstName, lastName, zipCode){
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.zipCodeInput.fill(zipCode)
    }

    async clickContinue(){
        await this.continueBtn.click()
    }

    async clickFinish(){
        await this.finishBtn.click()
    }

}