define(function(){

	'use strict';

	return function(table){
		var self = this;
		self.data = table;

		self.select = function(query){
			var count = 0;
			var res  = {};
			if (query === null || query === undefined) {
				query = function(obj){ return true; };
			}

			for(var key in self.data.rows){
				if (self.data.rows.hasOwnProperty(key) && query(self.data.rows[key])){
					res[key] = self.data.rows[key];
					count++;
				}
			}

			res.length = count;
			return res;
		};	

		self.find = function(key){
			return self.data.rows[key];
		};
	};

});