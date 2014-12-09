define(function(){
	'use strict';

	return function(tableName){
		var self = this;
		self.store = [];
		self.name = tableName;
	 	self.add = function(key, value){
			self.store.push({id: key, data: value});
	 	};
	};

});