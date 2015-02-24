/* jshint node:true */
/* global require */
/* global exports */
/* global module */
'use strict';

var info         = require('../package.json');
var time         = require('./tools/time');
var validation   = require('./tools/validation');

exports.format   = info.name;

exports.validate = function validate (packet) {
  packet = packet || this;

  return validation.validate(packet);
};

exports.init = function init (data) {
  this.data                     = data;

  this.header                   = {};
  this.header.created           = time.now();

  return this;
};

exports.toString = function toString () {
  return JSON.stringify(this);
};

exports.requestReady = function requestReady () {

  if (this.header && this.header.created) {
    var timestamp  = time.now(this.header.created);

    this.header.requestReady = timestamp;
  }

  return this;
};

exports.requestReceived = function requestReceived () {

  if (this.header && this.header.requestReady) {
    var timestamp  = time.now(this.header.requestReady);

    this.header.requestReceived  = timestamp;
    this.header.requestLatency   = timestamp - this.header.requestReady;
  }

  return this;
};

exports.responseReady = function responseReady () {

  if (this.header && this.header.requestReceived) {
    var timestamp  = time.now(this.header.requestReceived);

    this.header.responseReady   = timestamp;
    this.header.responseTime    = timestamp - this.header.requestReceived;
  }

  return this;
};

exports.responseReceived = function responseReceived () {

  if (this.header && this.header.responseReady) {
    var timestamp               = time.now(this.header.responseReady);

    this.header.queueLatency    = this.header.requestReady   - this.header.created;
    this.header.responseLatency = timestamp                  - this.header.responseReady;

    this.header.networkLatency  = this.header.requestLatency + this.header.responseLatency;
    this.header.processTime     = this.header.networkLatency + this.header.responseTime;
  }

  return this;
};
