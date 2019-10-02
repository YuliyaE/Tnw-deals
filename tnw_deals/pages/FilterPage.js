const AbstractElement = require('../general/abstract.methods.js');

class FilterPage{
    constructor(){
        this.productName = element(by.xpath("//*[@class='col-md-12 breadcrumbs' or @class='col-xs-12']/h1"));
        this.products = element.all(by.xpath("//*[@class='sale-detail-title']"));
    }

    getProductName(){
        return this.productName.getText();
    }

    chooseRandomProduct(){
        return this.products.then((items) => {
            console.log(items.length);
            let number = (Math.floor((Math.random() * 408)/2));
            console.log(number);
            return AbstractElement.waitAndClick(items[number]);
        })
    }

}

module.exports = new FilterPage();