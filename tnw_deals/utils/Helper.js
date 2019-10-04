const TIME_OUT = 60000;

class Helper {

    waitAndClick(element) {
        return this.waitUntilClickable(element).then(() => {
            console.log(`wait and click ${element.locator()} `)
            return element.click();
        }).catch(message => {
            Promise.reject(message.message);
        })
    }
    
    waitUntilClickable(element) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), TIME_OUT);
    }

}

module.exports = new Helper();