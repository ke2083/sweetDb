define(function(){

	'use strict';

	return function(table){
		var self = this;
		self.data = table;

		self.select = function(query){
			if (query === null || query === undefined) return self.data.rows;

			var res  = [];
			for(var n = 0; n<self.data.rows.length; n++){
				if (query(self.data.rows[n].document) === true){
					res.push(self.data.rows[n]);
				}
			}

			return res;
		};	

		self.find = function(key){
			for(var n = 0; n < self.data.rows.length; n++){
				if (self.data.rows[n].key === key) return self.data.rows[n].document;
			}

			return null;
		};
	};

});