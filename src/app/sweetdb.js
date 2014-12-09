define('sweetdb', ['./modules/modules'], function(modules){
  'use strict';
  return {

    init: function(){

      console.log('Starting SweetDb...');

      _.each(modules, function(module){
        module.init();
      });

    }

  };

});