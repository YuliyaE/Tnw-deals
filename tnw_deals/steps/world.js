const { setWorldConstructor, defineSupportCode } = require("cucumber");

class CustomWorld {
    constructor() {
        defineSupportCode(({ setDefaultTimeout }) => {
            setDefaultTimeout(50 * 1000);
        });
    }
}

setWorldConstructor(CustomWorld);