describe('Query', function(){

	var db;
	var h = 0;

	before(function(){

		db = window.sweetDb.init().create('testDb');
		var t = db.createTable('myTestTable');
		t.add({name: 'Bingo', age: 20});
		t.add({name: 'Drooper', age: 21});
		h = t.add({name: 'Snork', age:21});
		t.add({name: 'Fleagle', age: 22});

	});

	after(function(){
		localStorage.removeItem('sweetDb.testDb');
	});

	describe('#find()', function(){
		it('should return the document with the specified ID', function(){
			var d = db.from('myTestTable').find(h);
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

		it('should return all the rows that match the query and order them ascending', function(){

			var results = db.from('myTestTable').select().orderBy('age', function(a, b){
				return a < b;
			});

			results.length.should.eql(4);
			results[0].name.should.eql('Bingo');
			results[1].name.should.eql('Snork');
			results[2].name.should.eql('Drooper');
			results[3].name.should.eql('Fleagle');

		});

		it('should do ordering in a timely manner', function(){
			this.timeout(0);
			var t = db.openTable('myTestTable');
			t.removeWhere(function(d){ return true; });
			for (var i = 0; i < 10000; i++){
				t.add({name: 'Dinosaur' + i, age: Math.floor((Math.random() * 95000000) + 65000000)});
			}

			var start = new Date();
			var results = db.from('myTestTable').select().orderBy('age', function(a, b){
				return a < b;
			});


			var time = (new Date()).getTime() - start.getTime();
			time.should.not.be.greaterThan(1000);

		});


		it('should be able to sort a sort', function(){
			var t = db.openTable('myTestTable');
			t.removeWhere(function(d){ return true; });
			for (var i = 0; i < 100; i++){
				t.add({name: 'Dinosaur' + i, age: Math.floor((Math.random() * 95000000) + 65000000)});
			}

			var start = new Date();
			var results = db.from('myTestTable').select().orderBy('age', function(a, b){
				return a < b;
			}).orderBy('name', function(a, b){ return a > b; });

		});


	});

});

