

Feature('one', { });

BeforeSuite( async (I, authPage) => {
      await authPage.auth();
    });

Scenario('Authorization', async (I) => {
				
    I.await(5);
   // I.clickL("//span[contains(@class, 'iconic iconic-user')");
    
});