'use strict';

/**
 * Literal module
 * @type {Object}
 */
var request = {
  data: {},
  setData: function(data) {
    if (typeof data === 'object') {
      this.data = data;
    }
  },
  send: function() {
    console.log('Sending data %j', this.data);
  }
};

request.setData({id: 9, name: 'Rashad'});
request.send();
