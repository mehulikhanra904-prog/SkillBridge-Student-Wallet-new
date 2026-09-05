'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class ContractId extends bytesValue.BytesValue {
  static byteLength = 32;
  static encoding = "hex";
  static schema = jsXdr.opaque(32, "ContractId");
  static fromXdrObject(wire) {
    return new ContractId(wire);
  }
}

exports.ContractId = ContractId;
//# sourceMappingURL=contract-id.js.map
