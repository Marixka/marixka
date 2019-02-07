let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    locators: {
        URLone: '/private/data?int=lkmain',
        firstName:'#first_name',
        save: '.type_submit .pretty_button',
        fistNameold:'#first_name[value]',


    },
};