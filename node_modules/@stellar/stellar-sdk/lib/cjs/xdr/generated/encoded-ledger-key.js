'use strict';

var jsXdr = require('@stellar/js-xdr');
var bytesValue = require('../values/bytes-value.js');

class EncodedLedgerKey extends bytesValue.BytesValue {
  static encoding = "hex";
  static schema = jsXdr.varOpaque(jsXdr.UNBOUNDED_MAX_LENGTH, "EncodedLedgerKey");
  static fromXdrObject(wire) {
    return new EncodedLedgerKey(wire);
  }
}

exports.EncodedLedgerKey = EncodedLedgerKey;
//# sourceMappingURL=encoded-ledger-key.js.map
