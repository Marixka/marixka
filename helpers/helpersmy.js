class helpersmy extends codecept_helper {

    _failed(test) {
    }
   
    somefunc() {
    }
	async random(min, max) {
        return Math.round(Math.random() * (max-min) + min);

    }

}
module.exports = helpersmy;