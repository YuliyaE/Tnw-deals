const Helper = require('../utils/Helper.js');

class FilterPage {
    constructor() {
        this.productName = element(by.xpath("//*[@class='col-md-12 breadcrumbs' or @class='col-xs-12' or @class='container']/h1"));
        this.products = element.all(by.xpath("//*[@class='sale-detail-title']"));
    }

    getProductName() {
        return this.productName.getText();
    }

    chooseRandomProduct() {
        return this.products.count().then((items) => {
            return Helper.waitAndClick(this.products.get(Helper.getRandomNumber(items)));
        })
    }

}

module.exports = new FilterPage();