'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class Uint256Bytes extends bytesValue.BytesValue {
  static byteLength = 32;
  static encoding = "hex";
  static schema = jsXdr.opaque(32, "Uint256Bytes");
  static fromXdrObject(wire) {
    return new Uint256Bytes(wire);
  }
}

exports.Uint256Bytes = Uint256Bytes;
//# sourceMappingURL=uint256-bytes.js.map
