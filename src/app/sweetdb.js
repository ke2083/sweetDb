define('sweetdb', ['./modules/database/main'], function(Db){
  'use strict';
 
  return {
    init: function(){

      return {
         create: function(dbName, store){
           var dataBase = new Db(dbName, store);
           return dataBase;
         },
         drop: function(dbName, store){
            var s = store||sessionStorage;
            s.removeItem('sweetDb.' + dbName);
         }

      };

    }

  };

});