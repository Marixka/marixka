Feature('one', { });

Scenario('Authorization', async (I) => {
	BeforeSuite(async (I, authPage) => {
    await authPage.auth();
});
});