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

// Each document is a normal JSON object.  When added, the key will be returned.
// The key is unique to each document, as it is a hash based on the document contents.
// Two documents with identical contents cannot be stored.
var k = t.add({var1: 'string', var2: 'string2'});

```

### Save changes to a database
This will save the table changes made from the last save to now.

```javascript
db.saveChanges();
```

### Find a document by ID

```javascript
var result = db.from('My new table').find('ad4914fe');
```

### Find documents by query

```javascript

// This will return a JSON object with the primary key as the object key.
var results = db.from('My new table').select(function(i){
	return i.var1 === 'string'
});
```

### Remove by key

```javascript
t.remove(id)
```

### Remove by query

```javascript
t.removeWhere(function(d){
    return d.name === 'test';
});
```

### Remove by document

```javascript
t.removeDocument({name: 'test'})
```

### Sorting a result set

Sorting can be done on the results of a select.  The sort result will be an array, sorted based on the property specified and using the sort function given (since different properties might need different comparison methods).

```javascript
var result = db.from('My new table').select().orderBy('Firstname', function(a, b){
  
  return a < b;

});
```

## Storage

When creating a new database, you can supply any object that offers a setItem, getItem and removeItem interface.

This means that localStorage and sessionStorage are supported out-of-the-box, but you can provide your own too!

## Performance

I've only benchmarked on Chrome 39, Firefox 33 and IE 11 but (for 100,000 rows) the results were:

### Insert

Chrome   | Firefox  |  IE
---------|:---------|:-----
78ms    | 52ms    | 85ms

### Find by key

Chrome   | Firefox  |  IE
---------|:---------|:-----
67ms    | 51ms    | 86ms

### Find by query

Chrome   | Firefox  |  IE
---------|:---------|:-----
111ms    | 84ms    | 142ms

### Sorting

Chrome   | Firefox  | IE
---------|:---------|:---
887ms    | *44s*(!) | *2.2s*


## Compatibility

So far tested on Chrome 39, Firefox 33 and IE 11.  More testing to come, but there is nothing specialist happening apart from the default use of sessionStorage.

Theoretically compatible (but not tested!)

* IE 8 - 10
* Safari
* Opera
* Mobile Chrome
* Mobile Safari
* IE Mobile