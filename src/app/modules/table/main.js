define(['sweetHash'], function(hasher){
	'use strict';

	return function(tableName){
		var self = this;
		self.rows = {};
		self.name = tableName;

	 	self.add = function(value){
	 		var key = hasher.hash(JSON.stringify(value));
			if (self.rows[key] !== undefined) throw new Error('Cannot insert duplicate document into table "' + self.name + '".');
	 		
			self.rows[key] = value;
			return key;
	 	};

	 	self.remove = function(key){
	 		delete self.rows[key];
	 	};

	 	self.removeWhere = function(query){
	 		var matches = [];
	 		for(var key in self.rows){
	 			if (self.rows.hasOwnProperty(key) && query(self.rows[key])){
					matches.push(key);
				}
	 		}

	 		for(var i = 0; i < matches.length; i++){
	 			delete self.rows[matches[i]];
	 		}
	 	};

	 	self.removeDocument = function(document){
	 		var key = hasher.hash(JSON.stringify(document));
	 		delete self.rows[key];
	 	};

	 	self.toString = function(){
			return JSON.stringify(self.rows);
	 	};

	 	self.fromJson = function(d){
			self.rows = JSON.parse(d);
	 	};
	};

});