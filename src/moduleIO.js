'use strict';
/**
 * Module pattern with imports/exports
 */

var jQuery = require('jquery'),
    underscore = require('underscore');

jQuery.ajax = function(data) {
  console.log('Sending all ajax data = %j', data);
};

var request = (function($, _) {
  var ajaxData = {
    url: '/',
    dataType: 'json',
    data: {}
  };

  var mixin = function(data) {
    _.extend(ajaxData.data, data);
  };
  
  var module = {};
  
  module.version = '1.0.0';
  
  module.send = function(data) {
    mixin(data);
    $.ajax(ajaxData);
  };

  return module;
})(jQuery, underscore);

request.send({id: 9, name: 'Rashad'});