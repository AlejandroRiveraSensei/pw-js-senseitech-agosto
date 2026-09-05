export class CartPage{
    constructor (page){
        this.page = page
        //Declarar WebElements
        this.title = page.locator('[data-test = "title"]')
        this.itemName = page.locator('[data-test = "inventory-item-name"]')
        this.checkOutBtn = page.locator('[data-test = "checkout"]')
    }

    async clickCheckout(){
        await this.checkOutBtn.click()
    }

}