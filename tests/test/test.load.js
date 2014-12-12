describe('Load', function(){

	after(function(){
		sessionStorage.removeItem('sweetDb.testDb');
	});

	it('should load 10,000 entries in less than 1 second', function(){

		var db = window.sweetDb.init().create('testDb');
		var start = new Date();
		var t = db.createTable('myTestTable');
		for(var n = 0; n < 10000;n++){
			t.add({name: 'Test' + n, val: Math.floor((Math.random() * 100) + 1)});
		}

		var timeTaken = (new Date()).getTime() - start.getTime();
		timeTaken.should.be.lessThan(1000);

	});

	it('should query 10,000 entries by key in less than 1 second', function(){

		var db = window.sweetDb.init().create('testDb');
		var start = new Date();
		var t = db.createTable('myTestTable');
		var h = 0;
		for(var n = 0; n< 10000;n++){
			h = t.add({name: 'Test' + n, val: Math.floor((Math.random() * 100) + 1)});
		}

		var result = db.from('myTestTable').find(h);
		var timeTaken = (new Date()).getTime() - start.getTime();
		timeTaken.should.be.lessThan(1000);
		result.should.be.ok;

	});

	it('should query 10,000 entries in less than 1 second', function(){

		var db = window.sweetDb.init().create('testDb');
		var start = new Date();
		var t = db.createTable('myTestTable');
		for(var n = 0; n< 10000;n++){
			t.add({name: 'Test' + n, val: Math.floor((Math.random() * 100) + 1)});
		}

		db.saveChanges();
		var db2 = window.sweetDb.init().create('testDb');
		var result = db.from('myTestTable').select(function(i){
			return i.val > 90 || name.search(/999/) > -1;
		});

		var timeTaken = (new Date()).getTime() - start.getTime();
		timeTaken.should.be.lessThan(1000);
		result.should.be.ok;
		result.length.should.be.greaterThan(0);

	});

});