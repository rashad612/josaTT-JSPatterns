/**
 * Prototype
 */

/**
 * Pattern 1
 */
function Server(id) {
  this.id = id || '';
}

Server.prototype = {
  start: function() {
    console.log('Starting server #', this.id);
  },
  stop: function() {
    console.log('Stopping server #', this.id);
  }
};

var sp = new Server(1);
sp.start();
sp.stop();

function Apache() {
  Server.call(this);
  this.log = '';
}

Apache.prototype = Object.create(Server.prototype);

// An override!
// Apache.prototype.stop = function() {
//   console.log('Stopping Apache!');
// };

Apache.prototype.logMe = function() {
  var d = new Date();
  this.log = this.log + '\n' + d.getTime() + '> ' + 'Logging server (Apache) #' + this.id;
  console.log(this.log);
};


var apache = new Apache();
apache.id = 'Apache1';

apache.start();

apache.logMe();
