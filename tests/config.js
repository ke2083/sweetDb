requirejs.config({

	baseUrl: '.',
	paths: {
		'domReady': './bower_components/domReady/domReady',
		'sweetdb': './sweetdb'
	}


});

require(['domReady!', 'sweetdb'], function(dr, sweetdb){

  sweetdb.init();

});