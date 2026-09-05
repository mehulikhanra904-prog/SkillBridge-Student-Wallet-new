'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');
var ledgerEntryChange = require('./ledger-entry-change.js');
var contractEvent = require('./contract-event.js');

class OperationMetaV2 extends xdrValue.XdrValue {
  ext;
  changes;
  events;
  static schema = jsXdr.struct(
    "OperationMetaV2",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      changes: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      events: jsXdr.array(contractEvent.ContractEvent.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.changes = input.changes;
    this.events = input.events;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      changes: this.changes.map((v) => v.toXdrObject()),
      events: this.events.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new OperationMetaV2({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      changes: wire.changes.map((w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w)),
      events: wire.events.map((w) => contractEvent.ContractEvent.fromXdrObject(w))
    });
  }
}

exports.OperationMetaV2 = OperationMetaV2;
//# sourceMappingURL=operation-meta-v2.js.map
