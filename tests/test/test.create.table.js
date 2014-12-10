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

	});

	describe('#add()', function(){


	});

});

