# SweetDB

SweetDB is a Javascript-based database.  It's designed to be cross-browser compatible, ie it does not use WebDB or IndexDB.  By default it will use sessionStorage, but you can provide it with any backing store you like :)

It's built as an AMD module, so you'll need to load it with [requirejs](http://requirejs.org).

## How to use it

### Create a new database

```javascript
require(['sweetdb'], function(sweetdb){

  var dbms = sweetdb.init();
  // This will be created in session storage
  var db = dbms.create('My New Database');
  // This will be created in local storage
  var db = dbms.create('My New Database', localStorage);


});
```

### Drop a database

```javascript
require(['sweetdb'], function(sweetdb){

  var dbms = sweetdb.init();
  var db = dbms.create('My New Database');
  // Drop this database from session storage.  You can pass an optional parameter if your DB is not in session storage.
  dbms.drop('My New Database');

});

```

### Create a new table

```javascript

// Returns an instance of the new table.
var t = db.createTable('My new table');

```

### Open a table

```javascript

var t = db.openTable('My new table');
```

### Add a document to the table

```javascript

// Each document is a normal JSON object, and must be added against a unique key.
t.add(1, {var1: 'string', var2: 'string2'});

```

### Storage

When creating a new database, you can supply any object that offers a setItem, getItem and removeItem interface.

This means that localStorage and sessionStorage are supported out-of-the-box, but you can provide your own too!