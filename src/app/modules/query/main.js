define(function(){

	return function(table){
		var self = this;
		self.select = function(){
			return table.store;
		};	
	};

});