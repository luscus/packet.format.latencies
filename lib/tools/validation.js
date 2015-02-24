/* jshint node:true */
/* global require */
/* global exports */
/* global module */
'use strict';

var info         = require('../../package.json');

exports.validate = function validate (packet) {
  return (packet.data && packet.format === info.name);
};
