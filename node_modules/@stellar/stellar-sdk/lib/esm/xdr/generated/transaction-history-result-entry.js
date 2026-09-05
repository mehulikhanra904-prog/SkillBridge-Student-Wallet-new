import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionResultSet } from './transaction-result-set.js';
import { TransactionHistoryResultEntryExt } from './transaction-history-result-entry-ext.js';

class TransactionHistoryResultEntry extends XdrValue {
  ledgerSeq;
  txResultSet;
  ext;
  static schema = struct(
    "TransactionHistoryResultEntry",
    {
      ledgerSeq: uint32(),
      txResultSet: TransactionResultSet.schema,
      ext: TransactionHistoryResultEntryExt.schema
    }
  );
  constructor(input) {
    super();
    this.ledgerSeq = input.ledgerSeq;
    this.txResultSet = input.txResultSet;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      ledgerSeq: this.ledgerSeq,
      txResultSet: this.txResultSet.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionHistoryResultEntry({
      ledgerSeq: wire.ledgerSeq,
      txResultSet: TransactionResultSet.fromXdrObject(wire.txResultSet),
      ext: TransactionHistoryResultEntryExt.fromXdrObject(wire.ext)
    });
  }
}

export { TransactionHistoryResultEntry };
//# sourceMappingURL=transaction-history-result-entry.js.map
