'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerCloseMetaExt = require('./ledger-close-meta-ext.js');
var ledgerHeaderHistoryEntry = require('./ledger-header-history-entry.js');
var generalizedTransactionSet = require('./generalized-transaction-set.js');
var transactionResultMetaV1 = require('./transaction-result-meta-v1.js');
var upgradeEntryMeta = require('./upgrade-entry-meta.js');
var scpHistoryEntry = require('./scp-history-entry.js');
var ledgerKey = require('./ledger-key.js');

class LedgerCloseMetaV2 extends xdrValue.XdrValue {
  ext;
  ledgerHeader;
  txSet;
  txProcessing;
  upgradesProcessing;
  scpInfo;
  totalByteSizeOfLiveSorobanState;
  evictedKeys;
  static schema = jsXdr.struct(
    "LedgerCloseMetaV2",
    {
      ext: ledgerCloseMetaExt.LedgerCloseMetaExt.schema,
      ledgerHeader: ledgerHeaderHistoryEntry.LedgerHeaderHistoryEntry.schema,
      txSet: generalizedTransactionSet.GeneralizedTransactionSet.schema,
      txProcessing: jsXdr.array(transactionResultMetaV1.TransactionResultMetaV1.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      upgradesProcessing: jsXdr.array(upgradeEntryMeta.UpgradeEntryMeta.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      scpInfo: jsXdr.array(scpHistoryEntry.ScpHistoryEntry.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      totalByteSizeOfLiveSorobanState: jsXdr.uint64(),
      evictedKeys: jsXdr.array(ledgerKey.LedgerKey.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.ledgerHeader = input.ledgerHeader;
    this.txSet = input.txSet;
    this.txProcessing = input.txProcessing;
    this.upgradesProcessing = input.upgradesProcessing;
    this.scpInfo = input.scpInfo;
    this.totalByteSizeOfLiveSorobanState = input.totalByteSizeOfLiveSorobanState;
    this.evictedKeys = input.evictedKeys;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      ledgerHeader: this.ledgerHeader.toXdrObject(),
      txSet: this.txSet.toXdrObject(),
      txProcessing: this.txProcessing.map((v) => v.toXdrObject()),
      upgradesProcessing: this.upgradesProcessing.map((v) => v.toXdrObject()),
      scpInfo: this.scpInfo.map((v) => v.toXdrObject()),
      totalByteSizeOfLiveSorobanState: this.totalByteSizeOfLiveSorobanState,
      evictedKeys: this.evictedKeys.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new LedgerCloseMetaV2({
      ext: ledgerCloseMetaExt.LedgerCloseMetaExt.fromXdrObject(wire.ext),
      ledgerHeader: ledgerHeaderHistoryEntry.LedgerHeaderHistoryEntry.fromXdrObject(wire.ledgerHeader),
      txSet: generalizedTransactionSet.GeneralizedTransactionSet.fromXdrObject(wire.txSet),
      txProcessing: wire.txProcessing.map(
        (w) => transactionResultMetaV1.TransactionResultMetaV1.fromXdrObject(w)
      ),
      upgradesProcessing: wire.upgradesProcessing.map(
        (w) => upgradeEntryMeta.UpgradeEntryMeta.fromXdrObject(w)
      ),
      scpInfo: wire.scpInfo.map((w) => scpHistoryEntry.ScpHistoryEntry.fromXdrObject(w)),
      totalByteSizeOfLiveSorobanState: wire.totalByteSizeOfLiveSorobanState,
      evictedKeys: wire.evictedKeys.map((w) => ledgerKey.LedgerKey.fromXdrObject(w))
    });
  }
}

exports.LedgerCloseMetaV2 = LedgerCloseMetaV2;
//# sourceMappingURL=ledger-close-meta-v2.js.map
