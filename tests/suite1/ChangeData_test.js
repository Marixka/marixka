Feature('one', { });

BeforeSuite( async (I, authPage) => {
      await authPage.auth();
    });

Scenario('Change person data', async (I, Change_dataPage) => {

	 I.amOnPage(Change_dataPage.locators.URLone);
	 let name = await I.grabValueFrom(Change_dataPage.locators.fistNameold);
	 I.appendField(Change_dataPage.locators.firstName, '1');
//изменение данных
     I.clickL(Change_dataPage.locators.save);
//проверка внесенных изменений
	 await I.refreshPage();
	 if ( await I.grabValueFrom(Change_dataPage.locators.fistNameold) === name +'1') {
		 console.log('Данные изменены успешно!');
	 }
	 else {console.log('Данные!');}
});