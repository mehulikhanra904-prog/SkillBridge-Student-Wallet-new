'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class Value extends bytesValue.BytesValue {
  static encoding = "hex";
  static schema = jsXdr.varOpaque(jsXdr.UNBOUNDED_MAX_LENGTH, "Value");
  static fromXdrObject(wire) {
    return new Value(wire);
  }
}

exports.Value = Value;
//# sourceMappingURL=value.js.map
