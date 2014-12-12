requirejs.config({

	baseUrl: '.',
	paths: {
		'domReady': './bower_components/domReady/domReady',
		'sweetdb': 'sweetdb',
		'sweetHash': 'sweetdb'
	}

});

require(['domReady!', 'sweetdb', 'sweetHash'], function(dr, sweetdb, sweetHash){

  window.sweetDb = sweetdb;
  window.hash = sweetHash;
  mocha.run();

});