let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    locators: {
        URLo: '/5x36plus/game',
        openMenu:'.switcher .pseudo ins:nth-child(1)',
        basketSelection:'.buttons_switcher_popup .regular',
        basketSave:'.regular .pretty_button',
        numberBig:`.coupon:nth-child(%h) .zone .game_number:nth-child(%s)`,
        numberSmall:`.coupon:nth-child(%h) .extra_zone .game_number:nth-child(%s)`,
    },

    async Fill(numTicket) {
        let arrNum = [];
        let max = 35;
        let min = 1;
        let quantity = await I.random(5,11);
        let number = await I.random(1,4);  //заполняем уникальными числами массив от 1 до 20
        await I.find_num(quantity,arrNum, max, min);
        I.clickL(this.locators.numberSmall.replace(`%s`,`${number}`).replace(`%h`,`${numTicket}`));
        for (let i=0; i<quantity; i++) {
            I.clickL(this.locators.numberBig.replace(`%s`, `${arrNum[i]}`).replace(`%h`,`${numTicket}`));
        }


    }
};