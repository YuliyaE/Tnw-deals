const Helper = require('../utils/Helper.js');

class LoginPage{
    constructor(){
        this.email = element(by.xpath("//input[@class='form-control js-email-field' and @id='user_email']"));
        this.password = element(by.id("user_password"));
        this.loginButton = element(by.xpath("//input[@value='Login']"));
    }

    enterEmail(){
        return this.email.sendKeys("Strekozka1234@gmail.com");
    }

    enterPassword(){
        return this.password.sendKeys("Hello12345");
    }

    clickLogin(){
        return Helper.waitAndClick(this.loginButton);
    }

}

module.exports = new LoginPage();