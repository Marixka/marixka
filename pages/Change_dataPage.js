let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    locators: {
        URLone: '/private/data?int=lkmain',
        first_name:'#first_name',
        birth_date_day:'#birth_date_day',
        birth_date_month:'#birth_date_month',
        save: 'Сохранить',


    },
};