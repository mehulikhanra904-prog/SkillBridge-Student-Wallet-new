'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Curve25519Secret extends xdrValue.XdrValue {
  key;
  static schema = jsXdr.struct(
    "Curve25519Secret",
    {
      key: jsXdr.opaque(32)
    }
  );
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
    return new Curve25519Secret({
      key: wire.key
    });
  }
}

exports.Curve25519Secret = Curve25519Secret;
//# sourceMappingURL=curve25519-secret.js.map
