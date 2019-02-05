
// in this file you can append custom step methods to 'I' object

module.exports = function() {
    return actor({
	  
	fields: {
		
  },

    clickL(locator) {      
	
		this.waitForElement(locator,5); 
		this.click(locator);
        
    } 
 

  });
}


