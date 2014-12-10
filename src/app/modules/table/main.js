define(function(){
	'use strict';

	return function(tableName){
		var self = this;
		self.rows = [];
		self.name = tableName;

	 	self.add = function(key, value){
	 		for(var n = 0; n<self.rows.length;n++){
	 			if (self.rows[n].key === key) throw new Error('Cannot insert duplicate key "' + key + '" into table "' + self.name + '".');
	 		}
	 		
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