import { struct, array, UNBOUNDED_MAX_LENGTH, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerCloseMetaExt } from './ledger-close-meta-ext.js';
import { LedgerHeaderHistoryEntry } from './ledger-header-history-entry.js';
import { GeneralizedTransactionSet } from './generalized-transaction-set.js';
import { TransactionResultMeta } from './transaction-result-meta.js';
import { UpgradeEntryMeta } from './upgrade-entry-meta.js';
import { ScpHistoryEntry } from './scp-history-entry.js';
import { LedgerKey } from './ledger-key.js';
import { LedgerEntry } from './ledger-entry.js';

class LedgerCloseMetaV1 extends XdrValue {
  ext;
  ledgerHeader;
  txSet;
  txProcessing;
  upgradesProcessing;
  scpInfo;
  totalByteSizeOfLiveSorobanState;
  evictedKeys;
  unused;
  static schema = struct(
    "LedgerCloseMetaV1",
    {
      ext: LedgerCloseMetaExt.schema,
      ledgerHeader: LedgerHeaderHistoryEntry.schema,
      txSet: GeneralizedTransactionSet.schema,
      txProcessing: array(TransactionResultMeta.schema, UNBOUNDED_MAX_LENGTH),
      upgradesProcessing: array(UpgradeEntryMeta.schema, UNBOUNDED_MAX_LENGTH),
      scpInfo: array(ScpHistoryEntry.schema, UNBOUNDED_MAX_LENGTH),
      totalByteSizeOfLiveSorobanState: uint64(),
      evictedKeys: array(LedgerKey.schema, UNBOUNDED_MAX_LENGTH),
      unused: array(LedgerEntry.schema, UNBOUNDED_MAX_LENGTH)
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
    this.unused = input.unused;
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
      evictedKeys: this.evictedKeys.map((v) => v.toXdrObject()),
      unused: this.unused.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new LedgerCloseMetaV1({
      ext: LedgerCloseMetaExt.fromXdrObject(wire.ext),
      ledgerHeader: LedgerHeaderHistoryEntry.fromXdrObject(wire.ledgerHeader),
      txSet: GeneralizedTransactionSet.fromXdrObject(wire.txSet),
      txProcessing: wire.txProcessing.map(
        (w) => TransactionResultMeta.fromXdrObject(w)
      ),
      upgradesProcessing: wire.upgradesProcessing.map(
        (w) => UpgradeEntryMeta.fromXdrObject(w)
      ),
      scpInfo: wire.scpInfo.map((w) => ScpHistoryEntry.fromXdrObject(w)),
      totalByteSizeOfLiveSorobanState: wire.totalByteSizeOfLiveSorobanState,
      evictedKeys: wire.evictedKeys.map((w) => LedgerKey.fromXdrObject(w)),
      unused: wire.unused.map((w) => LedgerEntry.fromXdrObject(w))
    });
  }
}

export { LedgerCloseMetaV1 };
//# sourceMappingURL=ledger-close-meta-v1.js.map
