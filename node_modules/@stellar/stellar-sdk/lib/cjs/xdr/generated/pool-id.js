'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class PoolId extends bytesValue.BytesValue {
  static byteLength = 32;
  static encoding = "hex";
  static schema = jsXdr.opaque(32, "PoolId");
  static fromXdrObject(wire) {
    return new PoolId(wire);
  }
}

exports.PoolId = PoolId;
//# sourceMappingURL=pool-id.js.map
