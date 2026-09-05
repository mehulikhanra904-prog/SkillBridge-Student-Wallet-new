'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class SignatureHint extends bytesValue.BytesValue {
  static byteLength = 4;
  static encoding = "hex";
  static schema = jsXdr.opaque(4, "SignatureHint");
  static fromXdrObject(wire) {
    return new SignatureHint(wire);
  }
}

exports.SignatureHint = SignatureHint;
//# sourceMappingURL=signature-hint.js.map
