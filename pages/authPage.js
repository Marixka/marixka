let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },
	
    url: 'https://www.stoloto.ru',
    login: 'marixka@mail.ru',
    pass: '1265344',
    
    locators: {
        loginF: '#auth_login',
		passF: '#auth_password',
		dow: '#layout',
		Inp1: "//span[contains(text(), 'Войти')]",
		Inp2: "//button[contains(text(), 'Войти')]"	
    },
	
    async auth() {      
	
		I.amOnPage(this.url); 
		I.waitForVisible(this.locators.Inp1); 
		I.click(this.locators.Inp1);
		I.waitForVisible(this.locators.loginF);
		I.appendField(this.locators.loginF, this.login );
		I.appendField(this.locators.passF, this.pass);
		I.click(this.locators.Inp2);
        
    }
};