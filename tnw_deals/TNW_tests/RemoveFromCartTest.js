const { Given, When, Then } = require('cucumber');
const { defineSupportCode } = require('cucumber');
const expect = require('expect');
const MainPage = require('../pages/MainPage.js')
const FilterPage = require('../pages/FilterPage.js');
const ProductPage = require('../pages/ProductPage.js');
const expectedNotice = 'Your cart is empty. Continue Shopping!';

defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(20 * 1000);
});


Given('Open main page', function () {
    browser.manage().window().maximize();
    return MainPage.open();
});

Then('Open business category', function () {
    return MainPage.clickCategories().then(() => {
        return MainPage.chooseBusiness();
    });
});

When('Choose random product', function () {
    return FilterPage.chooseRandomProduct();
});

Then('Check product name', function () {
    return ProductPage.clickAddToCart().then(() => {
        return ProductPage.removeProductFromCart();
    }).then(() => {
      return ProductPage.getCartNotice();
    }).then((notice) => {
        expect(expectedNotice).toEqual(notice);
    })
})