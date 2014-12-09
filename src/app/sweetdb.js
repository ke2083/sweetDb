define('sweetdb', ['./modules/database/main'], function(Db){
  'use strict';
 
  return {
    init: function(){

      console.log('Starting SweetDb...');

      return {
         create: function(dbName){
           var dataBase = new Db(dbName);
           return dataBase;
         }

      };

    }

  };

});