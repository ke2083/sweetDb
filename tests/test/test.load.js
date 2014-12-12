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

	it('should bulk load multiple items from text', function(){

		var db = window.sweetDb.init().create('testDb');
		var t = db.createTable('tt2');
		t.bulkAdd('[{"name":"MyName0"},{"name":"MyName1"},{"name":"MyName2"},{"name":"MyName3"},{"name":"MyName4"},{"name":"MyName5"},{"name":"MyName6"},{"name":"MyName7"},{"name":"MyName8"},{"name":"MyName9"},{"name":"MyName10"},{"name":"MyName11"},{"name":"MyName12"},{"name":"MyName13"},{"name":"MyName14"},{"name":"MyName15"},{"name":"MyName16"},{"name":"MyName17"},{"name":"MyName18"},{"name":"MyName19"},{"name":"MyName20"},{"name":"MyName21"},{"name":"MyName22"},{"name":"MyName23"},{"name":"MyName24"},{"name":"MyName25"},{"name":"MyName26"},{"name":"MyName27"},{"name":"MyName28"},{"name":"MyName29"},{"name":"MyName30"},{"name":"MyName31"},{"name":"MyName32"},{"name":"MyName33"},{"name":"MyName34"},{"name":"MyName35"},{"name":"MyName36"},{"name":"MyName37"},{"name":"MyName38"},{"name":"MyName39"},{"name":"MyName40"},{"name":"MyName41"},{"name":"MyName42"},{"name":"MyName43"},{"name":"MyName44"},{"name":"MyName45"},{"name":"MyName46"},{"name":"MyName47"},{"name":"MyName48"},{"name":"MyName49"},{"name":"MyName50"},{"name":"MyName51"},{"name":"MyName52"},{"name":"MyName53"},{"name":"MyName54"},{"name":"MyName55"},{"name":"MyName56"},{"name":"MyName57"},{"name":"MyName58"},{"name":"MyName59"},{"name":"MyName60"},{"name":"MyName61"},{"name":"MyName62"},{"name":"MyName63"},{"name":"MyName64"},{"name":"MyName65"},{"name":"MyName66"},{"name":"MyName67"},{"name":"MyName68"},{"name":"MyName69"},{"name":"MyName70"},{"name":"MyName71"},{"name":"MyName72"},{"name":"MyName73"},{"name":"MyName74"},{"name":"MyName75"},{"name":"MyName76"},{"name":"MyName77"},{"name":"MyName78"},{"name":"MyName79"},{"name":"MyName80"},{"name":"MyName81"},{"name":"MyName82"},{"name":"MyName83"},{"name":"MyName84"},{"name":"MyName85"},{"name":"MyName86"},{"name":"MyName87"},{"name":"MyName88"},{"name":"MyName89"},{"name":"MyName90"},{"name":"MyName91"},{"name":"MyName92"},{"name":"MyName93"},{"name":"MyName94"},{"name":"MyName95"},{"name":"MyName96"},{"name":"MyName97"},{"name":"MyName98"},{"name":"MyName99"}]');
		var r = db.from('tt2').select().orderBy('name', function(a,b){ return a < b; });
		r.length.should.eql(100);
		r[0].name.should.be.ok;
		r[99].name.should.be.ok;

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