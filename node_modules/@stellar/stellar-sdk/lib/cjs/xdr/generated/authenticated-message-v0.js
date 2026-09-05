'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var stellarMessage = require('./stellar-message.js');
var hmacSha256Mac = require('./hmac-sha256-mac.js');

class AuthenticatedMessageV0 extends xdrValue.XdrValue {
  sequence;
  message;
  mac;
  static schema = jsXdr.struct(
    "AuthenticatedMessageV0",
    {
      sequence: jsXdr.uint64(),
      message: stellarMessage.StellarMessage.schema,
      mac: hmacSha256Mac.HmacSha256Mac.schema
    }
  );
  constructor(input) {
    super();
    this.sequence = input.sequence;
    this.message = input.message;
    this.mac = input.mac;
  }
  toXdrObject() {
    return {
      sequence: this.sequence,
      message: this.message.toXdrObject(),
      mac: this.mac.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AuthenticatedMessageV0({
      sequence: wire.sequence,
      message: stellarMessage.StellarMessage.fromXdrObject(wire.message),
      mac: hmacSha256Mac.HmacSha256Mac.fromXdrObject(wire.mac)
    });
  }
}

exports.AuthenticatedMessageV0 = AuthenticatedMessageV0;
//# sourceMappingURL=authenticated-message-v0.js.map
