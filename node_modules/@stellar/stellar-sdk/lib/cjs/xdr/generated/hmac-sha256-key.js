'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class HmacSha256Key extends xdrValue.XdrValue {
  key;
  static schema = jsXdr.struct("HmacSha256Key", {
    key: jsXdr.opaque(32)
  });
  constructor(input) {
    super();
    this.key = input.key;
  }
  toXdrObject() {
    return {
      key: this.key
    };
  }
  static fromXdrObject(wire) {
    return new HmacSha256Key({
      key: wire.key
    });
  }
}

exports.HmacSha256Key = HmacSha256Key;
//# sourceMappingURL=hmac-sha256-key.js.map
