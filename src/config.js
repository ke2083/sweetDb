requirejs.config({

	baseUrl: '/app'


});

require(['sweetdb'], function(sweetdb){

  sweetdb.init();

});