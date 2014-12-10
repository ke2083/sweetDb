define(function(){

	'use strict';

	return function(table){
		var self = this;
		self.select = function(query){

			if (query === null) return table.rows;

			var matches = _.filter(table.rows, query);
			return matches;
		};	
	};

});