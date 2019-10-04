const { Given, When, Then } = require('cucumber');
const MainPage = require('../../pages/MainPage.js')
const FilterPage = require('../../pages/FilterPage.js');

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