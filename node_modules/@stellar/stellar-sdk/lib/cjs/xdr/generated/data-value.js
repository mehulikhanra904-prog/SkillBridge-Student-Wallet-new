'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class DataValue extends bytesValue.BytesValue {
  static encoding = "hex";
  static schema = jsXdr.varOpaque(64, "DataValue");
  static fromXdrObject(wire) {
    return new DataValue(wire);
  }
}

exports.DataValue = DataValue;
//# sourceMappingURL=data-value.js.map
