define(['../table/main', '../query/main'], function(Table, Query){

  'use strict';
  
	return function(dbName, storage){

				if (dbName === null || dbName === '' || typeof(dbName) !== 'string'){
					throw new Error("A database cannot be created with an empty name.");
				}

				var self = this;
				self.tables = [];
				self.name = dbName;
				self.store = storage||sessionStorage;

				self.createTable = function(tName){
					for(var n = 0;n<self.tables.length;n++){
						if (self.tables[n].name === tName) throw new Error('Cannot insert duplicate table "' + tName + '" into database "' + self.name + '".');
					}

					var t = new Table(tName);
					self.tables.push(t);
					return t;
				};

				self.openTable = function(tName){
					for(var n = 0; n < self.tables.length; n++){
						if (self.tables[n].name === tName) return self.tables[n];
					}

					throw new Error('Table not found.');
				};

				self.from = function(tName){
					var t = self.openTable(tName);
					var q = new Query(t);
					return q;
				};

				self.saveChanges = function(){
					save();	
				};

				function save(){
					var saveable = [];
					for(var n =0; n< self.tables.length; n++){
						saveable.push({name: self.tables[n].name, data: self.tables[n].toString()});
					}

					self.store.setItem('sweetDb.' + self.name, JSON.stringify(saveable));
					saveable = null;
				}

				function load(){
					var d = self.store.getItem('sweetDb.' + self.name);
					if (!d) return false;

					var pd = JSON.parse(d);
					if (pd === null || pd.length === 0) return false;

					var nd = [];
					for(var n=0; n<pd.length;n++){
						var t = new Table(pd[n].name);
						t.fromJson(pd[n].data);
						nd.push(t);
					}

					self.tables = nd;
					return true;
				}

				if (!load()) save();
		};
});