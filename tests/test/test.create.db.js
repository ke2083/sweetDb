describe('Database', function(){

	describe('#createDatabase()', function(){

		it('should create a database with the correct name', function(){

			var dbms = window.sweetDb.init();
			var db = dbms.create('testDb');
			db.name.should.equal('testDb');
		});

	});

});

