class helpersmy extends codecept_helper {

    _failed(test) {
    }
   
	async random(min, max) {
        return Math.round(Math.random() * (max-min) + min);

    }

}
module.exports = helpersmy;