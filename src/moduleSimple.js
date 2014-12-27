'use strict';

// Simple module
var testModule = (function() {
  var version = '0.0.0';

  return {
    set: function(newVersion) {
      version = newVersion;
    },
    reset: function() {
      console.log('Resetting %s', version);
      version = '0.0.0';
    }
  };
})();

testModule.set('1.0.0');
testModule.reset();

// Disadvantages
// testModule.pub = function() {
//   console.log(version);
// };
// testModule.pub();