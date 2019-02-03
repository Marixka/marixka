
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
	  
	fields: {
		
  },

    async clickL(locator) {      
	
	 I.waitForElement(locator,5); 
     I.click(locator);
        
    } 
 

  });
}


