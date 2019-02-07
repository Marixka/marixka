
// in this file you can append custom step methods to 'I' object


module.exports = function() {
    return actor({
	    fields: {
        },

        clickL(locator) { //клик на кнопку с ожиданием эллемента
		    this.waitForElement(locator,5);
		    this.click(locator);
        },

        async find_num(quantity,arr_num, max, min) { //заполнение массива уникальными числами
            let j=0;
            let k;
            let number;

            for (let i = 0; i < quantity; i++) {
            //поиск уникального числа
                while (j==0) {
                    number = await Math.round(Math.random() * max + min);
                    k = -1;
                    while (k !== quantity) {
                        k++;
                        if (k == quantity) { j = 1 };
                        if (arr_num[k] == number) { k = quantity };
                    }
                    arr_num[i] = number;
                }
                j=0;
            }
            return arr_num;
    },
    });
}


