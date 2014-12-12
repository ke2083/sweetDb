describe('Database', function(){

	describe('#create()', function(){

		it('should create a database with the correct name', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.name.should.equal('testDb');
		});

		it('should create a database in the local storage', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb', localStorage);
			var i = localStorage.getItem('sweetDb.testDb');
			i.should.be.ok;
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

		it('should store the database in session storage by default', function(){		
			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			var i = sessionStorage.getItem('sweetDb.testDb');
			i.should.be.ok;
		});

		it('should store the database in session storage when requested', function(){		
			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb', sessionStorage);
			var i = sessionStorage.getItem('sweetDb.testDb');
			i.should.be.ok;
		});

		it('should drop the database when requested', function(){		
			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb', sessionStorage);
			var i = sessionStorage.getItem('sweetDb.testDb');
			i.should.be.ok;
			dbms.drop('testDb', sessionStorage);
			i = sessionStorage.getItem('sweetDb.testDb');
			(i === null).should.be.true;
		});

		it('should drop the database from default store', function(){		
			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			var i = sessionStorage.getItem('sweetDb.testDb');
			i.should.be.ok;
			dbms.drop('testDb');
			i = sessionStorage.getItem('sweetDb.testDb');
			(i === null).should.be.true;
		});

		it('should open the existing database if available', function(){		
			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			var t = db.createTable('testTable');
			t.add({name: 'New'});
			db.saveChanges();

			var dbms2 = window.sweetDb.init();
			db2 = dbms.create('testDb');
			var r = db2.from('testTable').select();
			r.length.should.eql(1);
		});

		after(function(){
			sessionStorage.removeItem('sweetDb.testDb');
			localStorage.removeItem('sweetDb.testDb');
		});

	});

});

