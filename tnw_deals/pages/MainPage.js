const URL = 'https://deals.thenextweb.com/';
const Helper = require('../utils/Helper.js');

class MainPage {
    constructor() {
        this.loginButton = element(by.xpath("//a[@class='nav-account-link']"));
        this.categories = element(by.xpath("//a[contains(text(), 'Categories')]"));
        this.businessButton = element(by.xpath("//a[contains(text(), 'Business')]"));
        this.discountWindow = element(by.xpath("//div[@class='email-capture-dismiss']"));
    }

    open() {
        return browser.get(URL);
    }

    clickLogin() {
        return Helper.waitAndClick(this.loginButton);
    };

    clickCategories() {
        return Helper.waitAndClick(this.categories);
    }

    chooseBusiness() {
        return Helper.waitAndClick(this.businessButton);
    }

    closeDiscountWindow() {
        return this.discountWindow.isPresent().then(result => {
            if (result == true) {
                return Helper.waitAndClick(this.discountWindow);
            }
        })
    }
}

module.exports = new MainPage();