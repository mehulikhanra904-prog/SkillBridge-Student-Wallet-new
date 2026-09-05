'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerKey = require('./ledger-key.js');

class LedgerFootprint extends xdrValue.XdrValue {
  readOnly;
  readWrite;
  static schema = jsXdr.struct(
    "LedgerFootprint",
    {
      readOnly: jsXdr.array(ledgerKey.LedgerKey.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      readWrite: jsXdr.array(ledgerKey.LedgerKey.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.readOnly = input.readOnly;
    this.readWrite = input.readWrite;
  }
  toXdrObject() {
    return {
      readOnly: this.readOnly.map((v) => v.toXdrObject()),
      readWrite: this.readWrite.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new LedgerFootprint({
      readOnly: wire.readOnly.map((w) => ledgerKey.LedgerKey.fromXdrObject(w)),
      readWrite: wire.readWrite.map((w) => ledgerKey.LedgerKey.fromXdrObject(w))
    });
  }
}

exports.LedgerFootprint = LedgerFootprint;
//# sourceMappingURL=ledger-footprint.js.map
