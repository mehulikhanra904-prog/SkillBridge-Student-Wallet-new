'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class Signature extends bytesValue.BytesValue {
  static encoding = "hex";
  static schema = jsXdr.varOpaque(64, "Signature");
  static fromXdrObject(wire) {
    return new Signature(wire);
  }
}

exports.Signature = Signature;
//# sourceMappingURL=signature.js.map
