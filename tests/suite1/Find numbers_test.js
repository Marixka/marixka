Feature('three', { });

Scenario('Find numbers', async (I, Find_numberPage) => {
    let arr_num = []; //массив чисел от 1 до 90
    let quantity = 2; // количество проверяемых тиражей
    let num; // количество тиражей на странице
    let v_num; // число от 1 до 90
    let number = '';
    I.amOnPage(Find_numberPage.locators.URLon);

// обнуление массива
    for (let i=1; i< 91; i++) {
        arr_num[i]='';
    }
//вывод на страницу необходимое количество тиражей
    num = await I.grabNumberOfVisibleElements(Find_numberPage.locators.quantity_circulation);
    while (num<quantity-1) {
        I.clickL(Find_numberPage.locators.more);
        num = await I.grabNumberOfVisibleElements(F_nPage.locators.quantity_circulation);
    }
    v_num = await I.grabTextFrom(F_nPage.locators.all_numbers);
    for (let i=0; i< quantity; i++) {
        let st = v_num[i];//берем i-ую строку
        for (let j=0; j<=st.length; j++) {
            if (st[j]!==' ' &&  st[j]!==''){
                    number += st[j];
            }
            if (st[j] ===' '|| j===st.length-1) {
                arr_num[Number(number)] ++;
                number = '';
            }
        }
    }
//вывод результата
     console.log(`Число - количество невыпадений в ${quantity} тиражах`);
     for (let i=1;  i<=45; i++) {
         if (arr_num[i] ==='') {
             console.log(`${i} - 0`)
         }
         else {
             console.log(`${i} - ${arr_num[i]}`);
         }
     }
});
