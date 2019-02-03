
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
	  
	fields: {
		
  },

    //ожидание и клик на кнопку
  clickL: function (locator) {
	 I.waitForVisible(locator); 
     I.click(locator);
	
  }

  });
}


