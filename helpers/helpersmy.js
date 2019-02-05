class helpersmy extends codecept_helper {

    _failed(test) {
    }
   
    somefunc() {
    }
	
    random(min, max) {
		return Math.random() * (max - min) + min;
    }
}

module.exports = helpersmy;