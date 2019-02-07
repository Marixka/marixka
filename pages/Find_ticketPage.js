let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    locators: {
        URLo: '/5x36plus/game',
        open_menu:'.switcher .pseudo ins:nth-child(1)',
        basket_selection:'.buttons_switcher_popup .regular',
        basket_save:'.regular .pretty_button',


    },
};