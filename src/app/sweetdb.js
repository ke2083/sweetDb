'use strict';

define('sweetdb', ['./modules/modules'], function(modules){

  return {

    init: function(){

      console.log('Starting SweetDb...');

      _.each(modules, function(module){
        module.init();
      });

    }

  };

});