'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class HmacSha256Mac extends xdrValue.XdrValue {
  mac;
  static schema = jsXdr.struct("HmacSha256Mac", {
    mac: jsXdr.opaque(32)
  });
  constructor(input) {
    super();
    this.mac = input.mac;
  }
  toXdrObject() {
    return {
      mac: this.mac
    };
  }
  static fromXdrObject(wire) {
    return new HmacSha256Mac({
      mac: wire.mac
    });
  }
}

exports.HmacSha256Mac = HmacSha256Mac;
//# sourceMappingURL=hmac-sha256-mac.js.map
