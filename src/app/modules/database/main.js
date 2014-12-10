define(['../table/main', '../query/main'], function(Table, Query){

  'use strict';
  
	return function(dbName, storage){

			if (dbName === null || dbName === '' || typeof(dbName) !== 'string'){
				throw new Error("A database cannot be created with an empty name.");
			}

			var Db = function(){
				var self = this;
				var data = [];
				self.name = dbName;
				var store = storage||sessionStorage;
				self.createTable = function(tName){
					var t = new Table(tName);
					data.push(t);
					return t;
				};

				self.openTable = function(tName){
					var match = _.find(data, function(d){
						return d.name === tName;
					});

					return match;
				};

				self.from = function(tName){
					var t = self.openTable(tName);
					var q = new Query(t);
					return q;
				};

				function save(){
					store.setItem('sweetDb.' + self.name, JSON.stringify(data));
				}

				// Save this database on creation.
				save();
			};

			return new Db();
	};
});