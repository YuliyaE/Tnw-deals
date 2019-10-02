const URL = 'https://deals.thenextweb.com/';
const AbstractElement = require('../general/abstract.methods.js');

class MainPage {
    constructor() {
        this.loginButton = element(by.xpath("//a[@class='nav-account-link']"));
        this.categories = element(by.xpath("//a[contains(text(), 'Categories')]"));
        this.businessButton = element(by.xpath("//a[contains(text(), 'Business')]"));
    }

    open() {
        return browser.get(URL);
    }

    clickLogin(){
        return AbstractElement.waitAndClick(this.loginButton);
    };

    clickCategories(){
        return AbstractElement.waitAndClick(this.categories);
    }

    chooseBusiness(){
        return AbstractElement.waitAndClick(this.businessButton);
    }

}

module.exports = new MainPage();