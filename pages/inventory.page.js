export class InventoryPage{
    constructor(page){
        this.page = page
        //Declara WebElements
        this.title = page.locator('[data-test = "title"]')
        this.btnAddProduct = page.locator('[data-test = "add-to-cart-sauce-labs-backpack"]')
        this.badgeCounter = page.locator('[data-test = "shopping-cart-badge"]')
        this.openCartBtn = page.locator('[data-test = "shopping-cart-link"]')

    }

    async getTitleText(){
        return await this.title.textContent()
    }

    async addBackpackToCart(){
        await this.btnAddProduct.click()
    }

    async openCart(){
        await this.openCartBtn.click()
    }
}