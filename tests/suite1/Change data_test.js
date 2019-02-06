Feature('one', { });

BeforeSuite( async (I, authPage) => {
      await authPage.auth();
    });

Scenario('Change person data', async (I) => {

	 I.amOnPage('/private/data?int=lkmain');	
	 I.appendField('#first_name', '1');
	 let number = await I.random(1,28);
	 let month = await I.random(0,11);
	 //изменение данных
	 I.selectOption('#birth_date_day', String(number));
	 I.selectOption('#birth_date_month', String(month));
     I.clickL('Сохранить');

});