'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class Thresholds extends bytesValue.BytesValue {
  static byteLength = 4;
  static encoding = "hex";
  static schema = jsXdr.opaque(4, "Thresholds");
  static fromXdrObject(wire) {
    return new Thresholds(wire);
  }
}

exports.Thresholds = Thresholds;
//# sourceMappingURL=thresholds.js.map
