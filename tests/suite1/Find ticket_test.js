Feature('two', { });

BeforeSuite( async (I, authPage) => {
    await authPage.auth();
});

Scenario('Find ticket', async (I) => {
    let arr_num = [];
    let quantity;
    let number;
    I.amOnPage('/5x36plus/game');
    quantity = await I.random(5,11);

//заполняем первый билет
    await I.find_num(quantity,arr_num);//заполняем уникальными числами массив от 1 до 20
    for (let i=0; i<quantity; i++) {
        I.clickL(`.coupon:nth-child(1) .zone .game_number:nth-child(${arr_num[i]})`);
    }
    number = await I.random(1,4);
    I.clickL(`.coupon:nth-child(1) .extra_zone .game_number:nth-child(${number})`);

//заполняем второй билет
    quantity = await I.random(5,11);
    await I.find_num(quantity,arr_num);//заполняем уникальными числами массив от 1 до 20
    for (let i=0; i<quantity; i++) {
        I.clickL(`.coupon:nth-child(2) .zone .game_number:nth-child(${arr_num[i]})`);
    }
    number = await I.random(1,4);
    I.clickL(`.coupon:nth-child(2) .extra_zone .game_number:nth-child(${number})`);

//сохраняем в корзину
    I.clickL('.switcher .pseudo ins:nth-child(1)');
    I.clickL('.buttons_switcher_popup .regular');
    I.clickL('.regular .pretty_button');
});
