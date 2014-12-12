define(function(){

	'use strict';

	return {

		hash: function(value){
			// Make sure that our value is symmetrical.
			var l = value.length;
			if (l % 2 !== 0) {
				value += ' ';
				l++;
			}

			var hs = [];
			for(var i = 0; i < l; i++){
				 hs.push((value.charCodeAt(i)).toString(16));
			}

			return hs.join('');
		}

	};



	});