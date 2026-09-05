export class CheckoutCompletePage{
    constructor (page){
        this.page = page
        //Declarar WebElements
        this.headerText = page.locator('[data-test = "complete-header"]')
    }
}