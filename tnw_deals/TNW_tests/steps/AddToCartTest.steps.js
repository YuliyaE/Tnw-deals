const { Given, When, Then } = require('cucumber');
const expect = require('expect');
const FilterPage = require('../../pages/FilterPage.js');
const ProductPage = require('../../pages/ProductPage.js');

Then('Check product name', function () {
    return FilterPage.getProductName().then((expectedProductName) => {
        return ProductPage.clickAddToCart().then(() => {
            return ProductPage.getActualProductName();
        }).then((actualName) => {
            expect(expectedProductName).toEqual(actualName);
        })
    });
})