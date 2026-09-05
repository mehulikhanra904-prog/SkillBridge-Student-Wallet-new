'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ScNonceKey extends xdrValue.XdrValue {
  nonce;
  static schema = jsXdr.struct("ScNonceKey", {
    nonce: jsXdr.int64()
  });
  constructor(input) {
    super();
    this.nonce = input.nonce;
  }
  toXdrObject() {
    return {
      nonce: this.nonce
    };
  }
  static fromXdrObject(wire) {
    return new ScNonceKey({
      nonce: wire.nonce
    });
  }
}

exports.ScNonceKey = ScNonceKey;
//# sourceMappingURL=sc-nonce-key.js.map
