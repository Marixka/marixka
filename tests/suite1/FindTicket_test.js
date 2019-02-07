Feature('two', { });

BeforeSuite( async (I, authPage) => {
    await authPage.auth();
});

Scenario('Find ticket', async (I, Find_ticketPage) => {

    I.amOnPage(Find_ticketPage.locators.URLo);

    await Find_ticketPage.Fill(1); //заполняем 1-ый билет
    await Find_ticketPage.Fill(2); //заполняем 2-ойой билет

//сохраняем в корзину
    I.clickL(Find_ticketPage.locators.openMenu);
    I.clickL(Find_ticketPage.locators.basketSelection);
    I.clickL(Find_ticketPage.locators.basketSave);
});
