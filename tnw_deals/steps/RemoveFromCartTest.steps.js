const { Then } = require('cucumber'),
    expect = require('expect'),
    ProductPage = require('../pages/ProductPage.js');

Then('Remove product from cart', function () {
    return ProductPage.clickAddToCart().then(() => {
        return ProductPage.removeProductFromCart();
    })
})

Then(/^The notice should be "([^"]*)"$/, function (expectedNotice) {
    return ProductPage.getCartNotice().then((notice) => {
        expect(expectedNotice).toEqual(notice);
    })
})