describe('Database', function(){

	describe('#create()', function(){

		it('should create a database with the correct name', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.name.should.equal('testDb');
		});

		it('should not create a database with a blank name', function(){		
			var dbms = window.sweetDb.init();
			(function(){
				var db = dbms.create('');
			}).should.throw('A database cannot be created with an empty name.');
		});

		it('should not create a database with a null name', function(){		
			var dbms = window.sweetDb.init();
			(function(){
				var db = dbms.create(null);
			}).should.throw('A database cannot be created with an empty name.');
		});

		it('should not create a database with a non-string name', function(){		
			var dbms = window.sweetDb.init();
			(function(){
				var db = dbms.create({test: true});
			}).should.throw('A database cannot be created with an empty name.');
		});

		it('should store the database in session storage', function(){		
			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			var i = sessionStorage.getItem('sweetDb.testDb');
			i.should.be.ok;
		});

	});

});

