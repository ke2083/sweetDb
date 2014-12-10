define(function(){
	'use strict';

	return function(tableName){
		var self = this;
		self.rows = [];
		self.name = tableName;
		
	 	self.add = function(key, value){
			self.rows.push({key: key, document: value});
	 	};

	 	self.toString = function(){
			return JSON.stringify(self.rows);
	 	};

	 	self.fromJson = function(d){
			self.rows = JSON.parse(d);
	 	};
	};

});