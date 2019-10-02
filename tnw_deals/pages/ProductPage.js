const AbstractElement = require('../general/abstract.methods.js');

class ProductPage {
    constructor() {
        this.addToCartButton = element(by.xpath("(//*[contains(text(), 'Add to Cart')])[1]"));
        this.actualProductName = element(by.xpath("//*[@class='col-xs-7 js-cart-item']//h4[@class='sale-title ng-binding']"));
        this.removeProduct = element(by.xpath("//*[@class='js-cart-item-remove']"));
        this.emptyCar = element(by.xpath("//*[@class='row text-center cart-empty']/p"));
    }

    clickAddToCart() {
        return AbstractElement.waitAndClick(this.addToCartButton);
    }

    getActualProductName(){
        return this.actualProductName.getText();
    }

    removeProductFromCart(){
        return AbstractElement.waitAndClick(this.removeProduct);
    }

    getCartNotice(){
        return this.emptyCar.getText();
    }

}

module.exports = new ProductPage();