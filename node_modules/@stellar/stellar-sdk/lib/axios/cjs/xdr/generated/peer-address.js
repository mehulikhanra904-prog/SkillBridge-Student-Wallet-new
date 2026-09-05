'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var peerAddressIp = require('./peer-address-ip.js');

class PeerAddress extends xdrValue.XdrValue {
  ip;
  port;
  numFailures;
  static schema = jsXdr.struct("PeerAddress", {
    ip: peerAddressIp.PeerAddressIp.schema,
    port: jsXdr.uint32(),
    numFailures: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.ip = input.ip;
    this.port = input.port;
    this.numFailures = input.numFailures;
  }
  toXdrObject() {
    return {
      ip: this.ip.toXdrObject(),
      port: this.port,
      numFailures: this.numFailures
    };
  }
  static fromXdrObject(wire) {
    return new PeerAddress({
      ip: peerAddressIp.PeerAddressIp.fromXdrObject(wire.ip),
      port: wire.port,
      numFailures: wire.numFailures
    });
  }
}

exports.PeerAddress = PeerAddress;
//# sourceMappingURL=peer-address.js.map
