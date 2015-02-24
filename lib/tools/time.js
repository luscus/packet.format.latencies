/* jshint node:true */
/* global require */
/* global exports */
/* global module */
'use strict';

/**
 * Returns the current Unix timestamp.
 * Date.now() being imprecise around 0,
 * the method will handle timestamps in the past.
 *
 * @param {Number} limitInThePast Unix timestamp
 * @returns {number} milliseconds since 01.01.1970
 */
exports.now = function now (limitInThePast) {

  var timestamp = Date.now();

  if (timestamp < limitInThePast) {
    timestamp = limitInThePast + 1;
  }

  return timestamp;
};
