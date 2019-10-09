const { Then } = require('cucumber'),
    expect = require('expect'),
    FilterPage = require('../pages/FilterPage.js'),
    ProductPage = require('../pages/ProductPage.js');

Then('Check product name', function () {
    return FilterPage.getProductName().then((expectedProductName) => {
        return ProductPage.clickAddToCart().then(() => {
            return ProductPage.getActualProductName();
        }).then((actualName) => {
            expect(actualName).toEqual(expectedProductName);
        })
    }).then(() => {
        return ProductPage.removeProductFromCart();
    })
})