import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerHeaderHistoryEntry } from './ledger-header-history-entry.js';
import { TransactionSet } from './transaction-set.js';
import { TransactionResultMeta } from './transaction-result-meta.js';
import { UpgradeEntryMeta } from './upgrade-entry-meta.js';
import { ScpHistoryEntry } from './scp-history-entry.js';

class LedgerCloseMetaV0 extends XdrValue {
  ledgerHeader;
  txSet;
  txProcessing;
  upgradesProcessing;
  scpInfo;
  static schema = struct(
    "LedgerCloseMetaV0",
    {
      ledgerHeader: LedgerHeaderHistoryEntry.schema,
      txSet: TransactionSet.schema,
      txProcessing: array(TransactionResultMeta.schema, UNBOUNDED_MAX_LENGTH),
      upgradesProcessing: array(UpgradeEntryMeta.schema, UNBOUNDED_MAX_LENGTH),
      scpInfo: array(ScpHistoryEntry.schema, UNBOUNDED_MAX_LENGTH)
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
      ledgerHeader: LedgerHeaderHistoryEntry.fromXdrObject(wire.ledgerHeader),
      txSet: TransactionSet.fromXdrObject(wire.txSet),
      txProcessing: wire.txProcessing.map(
        (w) => TransactionResultMeta.fromXdrObject(w)
      ),
      upgradesProcessing: wire.upgradesProcessing.map(
        (w) => UpgradeEntryMeta.fromXdrObject(w)
      ),
      scpInfo: wire.scpInfo.map((w) => ScpHistoryEntry.fromXdrObject(w))
    });
  }
}

export { LedgerCloseMetaV0 };
//# sourceMappingURL=ledger-close-meta-v0.js.map
