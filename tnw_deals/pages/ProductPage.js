const Helper = require('../utils/Helper.js');

class ProductPage {
    constructor() {
        this.addToCartButton = element(by.xpath("(//*[contains(text(), 'Add to Cart') or contains(text(), 'Add To Cart')])[1]"));
        this.actualProductName = element(by.xpath("//*[@class='col-xs-7 js-cart-item']"));
        this.removeProduct = element(by.css("a.js-cart-item-remove"));
        this.noticeAfterRemove = element(by.css("div[class='row text-center cart-empty'] p"));
    }

    clickAddToCart() {
        return Helper.waitAndClick(this.addToCartButton);
    }

    getActualProductName(){
        return this.actualProductName.getAttribute('data-sale-name');
    }

    removeProductFromCart(){
        return Helper.waitAndClick(this.removeProduct);
    }

    getCartNotice(){
        return this.noticeAfterRemove.getText();
    }

}

module.exports = new ProductPage();