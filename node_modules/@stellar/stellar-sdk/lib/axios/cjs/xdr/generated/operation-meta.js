'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerEntryChange = require('./ledger-entry-change.js');

class OperationMeta extends xdrValue.XdrValue {
  changes;
  static schema = jsXdr.struct("OperationMeta", {
    changes: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.changes = input.changes;
  }
  toXdrObject() {
    return {
      changes: this.changes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new OperationMeta({
      changes: wire.changes.map((w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w))
    });
  }
}

exports.OperationMeta = OperationMeta;
//# sourceMappingURL=operation-meta.js.map
