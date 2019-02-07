let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    locators: {
        URLon: '/ruslotto/archive', //страница архивных тиражей
        quantity_circulation:'.elem', //количество тиражей на странице
        allNumbers:`.data .numbers_wrapper`, //все невыпавшие числа тиражей
        more:'.more', // кнопка "показать больше тиражей"

    },
};