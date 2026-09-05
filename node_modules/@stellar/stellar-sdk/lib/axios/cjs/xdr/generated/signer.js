'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var signerKey = require('./signer-key.js');

class Signer extends xdrValue.XdrValue {
  key;
  weight;
  static schema = jsXdr.struct("Signer", {
    key: signerKey.SignerKey.schema,
    weight: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.key = input.key;
    this.weight = input.weight;
  }
  toXdrObject() {
    return {
      key: this.key.toXdrObject(),
      weight: this.weight
    };
  }
  static fromXdrObject(wire) {
    return new Signer({
      key: signerKey.SignerKey.fromXdrObject(wire.key),
      weight: wire.weight
    });
  }
}

exports.Signer = Signer;
//# sourceMappingURL=signer.js.map
