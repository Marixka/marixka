Feature('one', { });

BeforeSuite( async (I, authPage) => {
      await authPage.auth();
    });

Scenario('Change person data', async (I, Change_dataPage) => {

	 I.amOnPage(Change_dataPage.locators.URLone);
	 I.appendField(Change_dataPage.locators.first_name, '1');
	 let number = await I.random(1,28);
	 let month = await I.random(0,11);
	 //изменение данных
	 I.selectOption(Change_dataPage.locators.birth_date_day, String(number));
	 I.selectOption(Change_dataPage.locators.birth_date_month, String(month));
     I.clickL(Change_dataPage.locators.save);

});