describe('Table', function(){

	describe('#createTable()', function(){

		after(function(){
			window.sweetDb.init().drop('testDb')
		});

		it('should create a table with the correct name', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.createTable('testTable');
			var t = db.openTable('testTable');
			t.add(1, {name: 'test'});
			var r = db.from('testTable').select();
			r.length.should.eql(1);
			r[0].key.should.eql(1);
			r[0].document.name.should.eql('test');
		});

		it('should not create a table with a duplicate name', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.createTable('testTable');
			(function(){
				db.createTable('testTable');
			}).should.throw('Cannot insert duplicate table "testTable" into database "testDb".');
		});


	});

	describe('#add()', function(){

		after(function(){
			window.sweetDb.init().drop('testDb')
		});

		it('should not add a duplicate key', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.createTable('testTable');
			var t = db.openTable('testTable');
			t.add(1, {name: 'test'});
			(function(){
				t.add(1, {name: 'test2'});
			}).should.throw('Cannot insert duplicate key "1" into table "testTable".');

		});

	});

});

