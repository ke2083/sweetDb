define('sweetdb', ['./modules/database/main'], function(Db){
  'use strict';
 
  return {
    init: function(){

      return {
         create: function(dbName, store){
           var dataBase = new Db(dbName);
           return dataBase;
         }

      };

    }

  };

});