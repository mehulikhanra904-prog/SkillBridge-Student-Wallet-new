'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class ScBytes extends bytesValue.BytesValue {
  static encoding = "hex";
  static schema = jsXdr.varOpaque(jsXdr.UNBOUNDED_MAX_LENGTH, "ScBytes");
  static fromXdrObject(wire) {
    return new ScBytes(wire);
  }
}

exports.ScBytes = ScBytes;
//# sourceMappingURL=sc-bytes.js.map
