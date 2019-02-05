Feature('one', { });

BeforeSuite( async (I, authPage) => {
      await authPage.auth();
    });

Scenario('Change person data', async (I) => {
				
 
	 I.amOnPage('/private/data?int=lkmain');	
	 //I.click("//label[contains(text(), 'Как к вам обращаться')");
	 //let name = await I.grabTextFrom('#first_name');
	 I.appendField('#first_name', '1');
      
	 //let ran = I.random(1,28);
	 
	 
	 //I.clickL('Сохранить');
	await I.wait(3);
	
    
});