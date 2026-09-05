import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionSet } from './transaction-set.js';
import { TransactionHistoryEntryExt } from './transaction-history-entry-ext.js';

class TransactionHistoryEntry extends XdrValue {
  ledgerSeq;
  txSet;
  ext;
  static schema = struct(
    "TransactionHistoryEntry",
    {
      ledgerSeq: uint32(),
      txSet: TransactionSet.schema,
      ext: TransactionHistoryEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.ledgerSeq = input.ledgerSeq;
    this.txSet = input.txSet;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      ledgerSeq: this.ledgerSeq,
      txSet: this.txSet.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionHistoryEntry({
      ledgerSeq: wire.ledgerSeq,
      txSet: TransactionSet.fromXdrObject(wire.txSet),
      ext: TransactionHistoryEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { TransactionHistoryEntry };
//# sourceMappingURL=transaction-history-entry.js.map
