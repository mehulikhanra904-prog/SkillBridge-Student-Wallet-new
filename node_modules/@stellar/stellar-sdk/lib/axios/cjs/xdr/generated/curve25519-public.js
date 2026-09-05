'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Curve25519Public extends xdrValue.XdrValue {
  key;
  static schema = jsXdr.struct(
    "Curve25519Public",
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
    return new Curve25519Public({
      key: wire.key
    });
  }
}

exports.Curve25519Public = Curve25519Public;
//# sourceMappingURL=curve25519-public.js.map
