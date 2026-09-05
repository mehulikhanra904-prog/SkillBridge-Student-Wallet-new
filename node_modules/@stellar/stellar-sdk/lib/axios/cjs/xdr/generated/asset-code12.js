'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class AssetCode12 extends bytesValue.BytesValue {
  static byteLength = 12;
  static padTo = 12;
  static encoding = "ascii";
  static schema = jsXdr.opaque(12, "AssetCode12");
  static fromXdrObject(wire) {
    return new AssetCode12(wire);
  }
}

exports.AssetCode12 = AssetCode12;
//# sourceMappingURL=asset-code12.js.map
