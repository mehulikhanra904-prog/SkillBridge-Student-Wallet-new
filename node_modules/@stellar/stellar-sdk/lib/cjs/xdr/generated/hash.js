'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class Hash extends bytesValue.BytesValue {
  static byteLength = 32;
  static encoding = "hex";
  static schema = jsXdr.opaque(32, "Hash");
  static fromXdrObject(wire) {
    return new Hash(wire);
  }
}

exports.Hash = Hash;
//# sourceMappingURL=hash.js.map
