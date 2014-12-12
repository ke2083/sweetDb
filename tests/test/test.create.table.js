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
			var k = t.add({name: 'test'});
			var r = db.from('testTable').select();
			r.length.should.eql(1);
			r[k].should.be.ok;
			r[k].name.should.eql('test');
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
			t.add({name: 'test'});
			(function(){
				t.add({name: 'test'});
			}).should.throw('Cannot insert duplicate document into table "testTable".');

		});

	});

	describe('#remove()', function(){

		after(function(){
			window.sweetDb.init().drop('testDb')
		});

		it('should remove an item by key', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.createTable('testTable');
			var t = db.openTable('testTable');
			var id = t.add({name: 'test'});
			t.remove(id)
			var r = db.from('testTable').select();
			r.length.should.eql(0);

		});

		it('should remove an item by document', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.createTable('testTable');
			var t = db.openTable('testTable');
			var id = t.add({name: 'test'});
			t.removeDocument({name: 'test'})
			var r = db.from('testTable').select();
			r.length.should.eql(0);

		});

		it('should remove an item by query', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.createTable('testTable');
			var t = db.openTable('testTable');
			var id = t.add({name: 'test'});
			t.removeWhere(function(d){
				return d.name === 'test';
			});
			
			var r = db.from('testTable').select();
			r.length.should.eql(0);

		});

	});



});

