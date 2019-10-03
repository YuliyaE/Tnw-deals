const { Given, When, Then, defineSupportCode } = require('cucumber');
const expect = require('expect');
const MainPage = require('../../pages/MainPage.js')
const FilterPage = require('../../pages/FilterPage.js');
const ProductPage = require('../../pages/ProductPage.js');

defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(50 * 1000);
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
    return MainPage.closeDiscountWindow().then(() => {
        return FilterPage.chooseRandomProduct();
    })
});

Then('Check product name', function () {
    return FilterPage.getProductName().then((expectedProductName) => {
        return ProductPage.clickAddToCart().then(() => {
            return ProductPage.getActualProductName();
        }).then((actualName) => {
            expect(expectedProductName).toEqual(actualName);
        })
    });
})

Then('Remove product from cart', function () {
    return ProductPage.clickAddToCart().then(() => {
        return ProductPage.removeProductFromCart();
    })
})

Then('The notice should be {string}', function (expectedNotice) {
    return ProductPage.getCartNotice().then((notice) => {
        expect(expectedNotice).toEqual(notice);
    })
})