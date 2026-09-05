'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerUpgrade = require('./ledger-upgrade.js');
var ledgerEntryChange = require('./ledger-entry-change.js');

class UpgradeEntryMeta extends xdrValue.XdrValue {
  upgrade;
  changes;
  static schema = jsXdr.struct(
    "UpgradeEntryMeta",
    {
      upgrade: ledgerUpgrade.LedgerUpgrade.schema,
      changes: jsXdr.array(ledgerEntryChange.LedgerEntryChange.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.upgrade = input.upgrade;
    this.changes = input.changes;
  }
  toXdrObject() {
    return {
      upgrade: this.upgrade.toXdrObject(),
      changes: this.changes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new UpgradeEntryMeta({
      upgrade: ledgerUpgrade.LedgerUpgrade.fromXdrObject(wire.upgrade),
      changes: wire.changes.map((w) => ledgerEntryChange.LedgerEntryChange.fromXdrObject(w))
    });
  }
}

exports.UpgradeEntryMeta = UpgradeEntryMeta;
//# sourceMappingURL=upgrade-entry-meta.js.map
