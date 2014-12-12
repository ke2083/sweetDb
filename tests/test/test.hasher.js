describe('Hash', function(){

	describe('#hash()', function(){

		it('should create a sensible hash in a short time', function(){
			var start = new Date();
			var document = {name: 'Test Test', age: 18};
			var h = window.hash.hash(JSON.stringify(document));
			var timeTaken = (new Date()).getTime() - start.getTime();
			timeTaken.should.not.be.greaterThan(10);
			h.should.be.ok;
			h.length.should.be.greaterThan(0);

		});

		it('should be unique over 10,000 entries', function(){
			this.timeout(0);
			var hashes = {};

			for(var i = 0; i < 10000; i++){
				var wordLength = Math.floor((Math.random() * 20) + 1)
				var word = [];
				for(var l  = 0; l < wordLength; l++){
					word.push(String.fromCharCode(Math.floor((Math.random() * 88) + 65)))
				}
				
				var document = {name: word.join('') + i, age: Math.floor((Math.random() * 90) + 1)};
				var h = window.hash.hash(JSON.stringify(document));
				var existant = hashes[h];
				(existant === undefined).should.eql(true, 'Value ' + h + ' (' + JSON.stringify(document) + ') was repeated.');
				hashes[h] = true;
			}
		});

	});

});
