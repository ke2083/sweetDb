define(function(){
	'use strict';

	return function(tableName){
		var self = this;
		self.rows = [];
		self.name = tableName;
	 	self.add = function(key, value){
			self.rows.push({id: key, data: value});
	 	};
	};

});