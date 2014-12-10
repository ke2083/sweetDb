describe('Table', function(){

	describe('#createTable()', function(){

		it('should create a database with the correct name', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.createTable('testTable');
			var t = db.openTable('testTable');
			t.add(1, {name: 'test'});
			var r = db.from('testTable').select();
			r.length.should.eql(1);
			r[0].id.should.eql(1);
			r[0].data.name.should.eql('test');
		});

	});

});

