'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class AssetCode4 extends bytesValue.BytesValue {
  static byteLength = 4;
  static padTo = 4;
  static encoding = "ascii";
  static schema = jsXdr.opaque(4, "AssetCode4");
  static fromXdrObject(wire) {
    return new AssetCode4(wire);
  }
}

exports.AssetCode4 = AssetCode4;
//# sourceMappingURL=asset-code4.js.map
