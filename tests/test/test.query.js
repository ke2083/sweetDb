describe('Query', function(){

	var db;

	before(function(){

		db = window.sweetDb.init().create('testDb');
		var t = db.createTable('myTestTable');
		t.add(1, {name: 'Bingo', age: 20});
		t.add(2, {name: 'Drooper', age: 21});
		t.add(3, {name: 'Snork', age:21});
		t.add(4, {name: 'Fleagle', age: 22});

	});

	describe('#find()', function(){
		it('should return the document with the specified ID', function(){
			var d = db.from('myTestTable').find(3);
			d.name.should.eql('Snork');
			d.age.should.eql(21);
		});

	});

	describe('#select()', function(){

		it('should return all the rows in the table', function(){
			var results = db.from('myTestTable').select();
			results.length.should.eql(4);
		});

		it('should return all the rows that match the query', function(){

			var results = db.from('myTestTable').select(function(i){
				return i.age === 21 || i.name === 'Bingo';
			});

			results.length.should.eql(3);

		});

	});

});

