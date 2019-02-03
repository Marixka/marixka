Feature('one', { });

Scenario('Authorization', async (I) => {
	
	//объявление const
	const url = 'https://www.stoloto.ru/';
	const login = 'marixka@mail.ru';
	const pass= '1265344';
	
    I.amOnPage(url); 
	//ожидаем загрузки страницы
	I.waitForEnabled('#layout', 10); 
	I.click("//span[contains(text(), 'Войти')]");
	
	//ожидаем визуализации формы авторизации
	I.waitForEnabled('#auth_login', 5);
	
	//ввод логина и пароля
	I.appendField('#auth_login', login );
	I.appendField('#auth_password', pass);
	I.click("//button[contains(text(), 'Войти')]");
	
	I.wait(5);
	
});