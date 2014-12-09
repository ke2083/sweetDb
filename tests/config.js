requirejs.config({

	baseUrl: '.',
	paths: {
		'domReady': './bower_components/domReady/domReady',
		'sweetdb': 'sweetdb',
		'underscore': './bootstrapper'
	},
	shim: {
		'underscore': {
			exports: '_'
		}
	}


});

require(['domReady!', 'sweetdb'], function(dr, sweetdb){

  window.sweetDb = sweetdb;
  mocha.run();

});