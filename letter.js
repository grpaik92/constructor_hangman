var letter = function(ltr) {
	//check to see if boolean switches correctly 
	this.character = ltr;
	this.appear = false;
	this.letterRender = function() {
		if(this.appear === false) {
			return '_';
		} else {
			return this.character;
		}
	};
};

module.exports = letter;