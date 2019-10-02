const { Given, When, Then } = require('cucumber');
const { defineSupportCode } = require('cucumber');
const expect = require('expect');
const MainPage = require('../pages/MainPage.js')
const FilterPage = require('../pages/FilterPage.js');
const ProductPage = require('../pages/ProductPage.js');

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
    let expectedProductName;
    return FilterPage.getProductName().then((name) => {
        expectedProductName = name;
        return ProductPage.clickAddToCart();
    }).then(() => {
        return ProductPage.getActualProductName();
    }).then((actualName) => {
        expect(expectedProductName).toEqual(actualName);
    })
})