/* jshint node:true */
/* global require */
/* jshint expr:true*/
/* global describe */
/* global it */
'use strict';

require('chai').should();

var packets    = require('socket.packet.base');

/*
packets.setDefaultFormat('packet.format.latencies');

//var packet = new packets.instantiate({format: 'packet.format.raw', data:{test:true}}, {uri:'test'});
//var packet = new packets.instantiate({test:true}, 'packet.format.latencies', {uri:'test'});
var packet = packets.instantiate({test:true}, {uri:'test'});
packet.requestReady();
packet.requestReceived();
packet.responseReady();
packet.responseReceived();

console.log('-------------------');
console.log(packets.instantiate({test:true}, {uri:'test'}).id);
console.log(packets.instantiate({test:true}, {uri:'test'}).id);
console.log(packets.instantiate({test:true}, {uri:'test'}).id);
console.log(packets.instantiate({test:true}, {uri:'test'}).id);
console.log('-------------------');
console.log(packet);
console.log('-------------------');
console.log(packet.toString());
*/
