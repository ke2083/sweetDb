define(['../sorter/main'], function(sorter){

	'use strict';

	return function(table){
		var self = this;
		self.data = table;
		self.sorter = sorter;

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

			var sort = function(property, comparison){
				return self.sorter.orderBy(res, property, comparison);
			};

			res.length = count;
			res.orderBy = sort;
			return res;
		};	

		self.find = function(key){
			return self.data.rows[key];
		};
	};

});