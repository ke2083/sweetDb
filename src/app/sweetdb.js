define('sweetdb', ['./modules/database/main'], function(Db){
  'use strict';
 
  return {
    init: function(){

      var databases = [];

      return {
         create: function(dbName, store){
           var dataBase = new Db(dbName, store);
           databases.push(dataBase);
           return dataBase;
         },
         drop: function(dbName, store){
            var s = store||sessionStorage;
            s.removeItem('sweetDb.' + dbName);
            var i = -1;
            for(var n=0;n<databases.length;n++){
              if(databases[n].name === dbName){
                i = n;
                break;
              }
            }

            if (i > -1){
              databases.splice(i,1);
            }   
         }
      };
    }
  };
});