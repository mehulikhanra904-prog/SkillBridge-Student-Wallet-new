'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class EncryptedBody extends bytesValue.BytesValue {
  static encoding = "hex";
  static schema = jsXdr.varOpaque(64e3, "EncryptedBody");
  static fromXdrObject(wire) {
    return new EncryptedBody(wire);
  }
}

exports.EncryptedBody = EncryptedBody;
//# sourceMappingURL=encrypted-body.js.map
