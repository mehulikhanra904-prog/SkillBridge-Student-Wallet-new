'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerHeaderHistoryEntry = require('./ledger-header-history-entry.js');
var transactionSet = require('./transaction-set.js');
var transactionResultMeta = require('./transaction-result-meta.js');
var upgradeEntryMeta = require('./upgrade-entry-meta.js');
var scpHistoryEntry = require('./scp-history-entry.js');

class LedgerCloseMetaV0 extends xdrValue.XdrValue {
  ledgerHeader;
  txSet;
  txProcessing;
  upgradesProcessing;
  scpInfo;
  static schema = jsXdr.struct(
    "LedgerCloseMetaV0",
    {
      ledgerHeader: ledgerHeaderHistoryEntry.LedgerHeaderHistoryEntry.schema,
      txSet: transactionSet.TransactionSet.schema,
      txProcessing: jsXdr.array(transactionResultMeta.TransactionResultMeta.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      upgradesProcessing: jsXdr.array(upgradeEntryMeta.UpgradeEntryMeta.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      scpInfo: jsXdr.array(scpHistoryEntry.ScpHistoryEntry.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ledgerHeader = input.ledgerHeader;
    this.txSet = input.txSet;
    this.txProcessing = input.txProcessing;
    this.upgradesProcessing = input.upgradesProcessing;
    this.scpInfo = input.scpInfo;
  }
  toXdrObject() {
    return {
      ledgerHeader: this.ledgerHeader.toXdrObject(),
      txSet: this.txSet.toXdrObject(),
      txProcessing: this.txProcessing.map((v) => v.toXdrObject()),
      upgradesProcessing: this.upgradesProcessing.map((v) => v.toXdrObject()),
      scpInfo: this.scpInfo.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new LedgerCloseMetaV0({
      ledgerHeader: ledgerHeaderHistoryEntry.LedgerHeaderHistoryEntry.fromXdrObject(wire.ledgerHeader),
      txSet: transactionSet.TransactionSet.fromXdrObject(wire.txSet),
      txProcessing: wire.txProcessing.map(
        (w) => transactionResultMeta.TransactionResultMeta.fromXdrObject(w)
      ),
      upgradesProcessing: wire.upgradesProcessing.map(
        (w) => upgradeEntryMeta.UpgradeEntryMeta.fromXdrObject(w)
      ),
      scpInfo: wire.scpInfo.map((w) => scpHistoryEntry.ScpHistoryEntry.fromXdrObject(w))
    });
  }
}

exports.LedgerCloseMetaV0 = LedgerCloseMetaV0;
//# sourceMappingURL=ledger-close-meta-v0.js.map
