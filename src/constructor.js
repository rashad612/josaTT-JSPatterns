/**
 * Prototype-based JS + Constructor
 */
'use strict';

function ApiRoute(method, uri) {
  this.method = method || 'get';
  this.uri = uri || '/';
}

ApiRoute.prototype.print = function() {
  return this.method.toUpperCase() + ' ' + this.uri;
};

var route = new ApiRoute();
var route2 = new ApiRoute('post', '/user-info');

console.log('route1 = %s', route.print());
console.log('route2 = %s', route2.print());

// Manipulate at run time!
ApiRoute.prototype.baseUrl = 'http://example.com:1337';
ApiRoute.prototype.printUrl = function() {
  return this.baseUrl + this.uri;
};

var rout3 = new ApiRoute('get', '/index');
console.log('rout3 = %s', rout3.printUrl());

// Every thing is an object:
var arr = new Array();
arr.push(1);
console.log('arr = %j', arr);

var fake = {};
Array.prototype.push.call(fake, 1);
console.log('fake = %j', fake);