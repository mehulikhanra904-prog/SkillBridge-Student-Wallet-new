import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionResultPair } from './transaction-result-pair.js';
import { LedgerEntryChange } from './ledger-entry-change.js';
import { TransactionMeta } from './transaction-meta.js';

class TransactionResultMeta extends XdrValue {
  result;
  feeProcessing;
  txApplyProcessing;
  static schema = struct(
    "TransactionResultMeta",
    {
      result: TransactionResultPair.schema,
      feeProcessing: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      txApplyProcessing: TransactionMeta.schema
    }
  );
  constructor(input) {
    super();
    this.result = input.result;
    this.feeProcessing = input.feeProcessing;
    this.txApplyProcessing = input.txApplyProcessing;
  }
  toXdrObject() {
    return {
      result: this.result.toXdrObject(),
      feeProcessing: this.feeProcessing.map((v) => v.toXdrObject()),
      txApplyProcessing: this.txApplyProcessing.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResultMeta({
      result: TransactionResultPair.fromXdrObject(wire.result),
      feeProcessing: wire.feeProcessing.map(
        (w) => LedgerEntryChange.fromXdrObject(w)
      ),
      txApplyProcessing: TransactionMeta.fromXdrObject(wire.txApplyProcessing)
    });
  }
}

export { TransactionResultMeta };
//# sourceMappingURL=transaction-result-meta.js.map
