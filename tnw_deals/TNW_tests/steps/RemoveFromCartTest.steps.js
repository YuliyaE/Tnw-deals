const { Given, When, Then } = require('cucumber');
const { defineSupportCode } = require('cucumber');
const expect = require('expect');
const MainPage = require('../../pages/MainPage.js')
const FilterPage = require('../../pages/FilterPage.js');
const ProductPage = require('../../pages/ProductPage.js');
const testData = require("../../properties/data.json");
//const expectedNotice = 'Your cart is empty. Continue Shopping!';

//let user = '{ "expectedNotice": "Your cart is empty. Continue Shopping!"}';
let expectedNotice = (JSON.parse(testData)).expectedNotice;

defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(30 * 1000);
});

Given('Open main page', function () {
    return MainPage.open().then(() => {
        return MainPage.closeDiscountWindow();
    })
});

Then('Open business category', function () {
    return MainPage.clickCategories().then(() => {
        return MainPage.chooseBusiness();
    });
});

When('Choose random product', function () {
    MainPage.closeDiscountWindow();
    return FilterPage.chooseRandomProduct();
});

Then('Remove product from cart', function () {
    return ProductPage.clickAddToCart().then(() => {
        return ProductPage.removeProductFromCart();
    }).then(() => {
        return ProductPage.getCartNotice();
    }).then((notice) => {
        expect(expectedNotice).toEqual(notice);
    })
})