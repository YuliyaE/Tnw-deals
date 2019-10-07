const TIME_OUT = 60000;

class Helper {

    waitAndClick(element) {
        return this.waitUntilClickable(element).then(() => {
            return element.click();
        }).catch(error => {
            Promise.reject(error.message);
        })
    }
    
    waitUntilClickable(element) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), TIME_OUT);
    }

    getRandomNumber(elements){
        return (Math.floor((Math.random() * elements)/2));
    }

}
module.exports = new Helper();