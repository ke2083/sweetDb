requirejs.config({

	baseUrl: '.',
	paths: {
		'domReady': './bower_components/domReady/domReady',
		'sweetdb': 'sweetdb',
		'underscore': './bootstrapper',
		'sweetHash': 'sweetdb'
	},
	shim: {
		'underscore': {
			exports: '_'
		}
	}


});

require(['domReady!', 'sweetdb', 'sweetHash'], function(dr, sweetdb, sweetHash){

  window.sweetDb = sweetdb;
  window.hash = sweetHash;
  mocha.run();

});