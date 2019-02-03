

Feature('one', { });

BeforeSuite( async (I, authPage) => {
      await authPage.auth();
    });

Scenario('Change person data', async (I) => {
				
 
  //  I.clickL("//span[contains(@href, 'iconic iconic-user')");
	//I.clickL("//a[contains(text(), 'Редактировать данные')");
	

	I.amOnPage('https://www.stoloto.ru/private/data?int=lkmain');	
	// I.waitForElement("//label[contains(text(), 'Как к вам обращаться')",5); 
     //I.click("//label[contains(text(), 'Как к вам обращаться')");
	 //let name = I.grabTextFrom('#first_name');
	 I.fillField('#first_name', 'Екатерина');
	 I.click('Сохранить');
	I.wait(3);
	
    
});