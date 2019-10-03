const Helper = require('../general/Helper.js');

class FilterPage{
    constructor(){
        this.productName = element(by.xpath("//*[@class='col-md-12 breadcrumbs' or @class='col-xs-12']/h1"));
        this.products = element.all(by.xpath("//*[@class='sale-detail-title']"));
    }

    getProductName(){
        return this.productName.getText();
    }

    chooseRandomProduct(){
        return this.products.count().then((items) => {
            let number = (Math.floor((Math.random() * items)/2));
            return Helper.waitAndClick(this.products.get(number));
        })
    }

}

module.exports = new FilterPage();