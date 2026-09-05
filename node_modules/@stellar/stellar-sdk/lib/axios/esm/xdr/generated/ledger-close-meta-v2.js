import { struct, array, UNBOUNDED_MAX_LENGTH, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerCloseMetaExt } from './ledger-close-meta-ext.js';
import { LedgerHeaderHistoryEntry } from './ledger-header-history-entry.js';
import { GeneralizedTransactionSet } from './generalized-transaction-set.js';
import { TransactionResultMetaV1 } from './transaction-result-meta-v1.js';
import { UpgradeEntryMeta } from './upgrade-entry-meta.js';
import { ScpHistoryEntry } from './scp-history-entry.js';
import { LedgerKey } from './ledger-key.js';

class LedgerCloseMetaV2 extends XdrValue {
  ext;
  ledgerHeader;
  txSet;
  txProcessing;
  upgradesProcessing;
  scpInfo;
  totalByteSizeOfLiveSorobanState;
  evictedKeys;
  static schema = struct(
    "LedgerCloseMetaV2",
    {
      ext: LedgerCloseMetaExt.schema,
      ledgerHeader: LedgerHeaderHistoryEntry.schema,
      txSet: GeneralizedTransactionSet.schema,
      txProcessing: array(TransactionResultMetaV1.schema, UNBOUNDED_MAX_LENGTH),
      upgradesProcessing: array(UpgradeEntryMeta.schema, UNBOUNDED_MAX_LENGTH),
      scpInfo: array(ScpHistoryEntry.schema, UNBOUNDED_MAX_LENGTH),
      totalByteSizeOfLiveSorobanState: uint64(),
      evictedKeys: array(LedgerKey.schema, UNBOUNDED_MAX_LENGTH)
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
      ext: LedgerCloseMetaExt.fromXdrObject(wire.ext),
      ledgerHeader: LedgerHeaderHistoryEntry.fromXdrObject(wire.ledgerHeader),
      txSet: GeneralizedTransactionSet.fromXdrObject(wire.txSet),
      txProcessing: wire.txProcessing.map(
        (w) => TransactionResultMetaV1.fromXdrObject(w)
      ),
      upgradesProcessing: wire.upgradesProcessing.map(
        (w) => UpgradeEntryMeta.fromXdrObject(w)
      ),
      scpInfo: wire.scpInfo.map((w) => ScpHistoryEntry.fromXdrObject(w)),
      totalByteSizeOfLiveSorobanState: wire.totalByteSizeOfLiveSorobanState,
      evictedKeys: wire.evictedKeys.map((w) => LedgerKey.fromXdrObject(w))
    });
  }
}

export { LedgerCloseMetaV2 };
//# sourceMappingURL=ledger-close-meta-v2.js.map
