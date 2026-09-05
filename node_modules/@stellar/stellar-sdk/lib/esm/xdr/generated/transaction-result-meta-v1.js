import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';
import { TransactionResultPair } from './transaction-result-pair.js';
import { LedgerEntryChange } from './ledger-entry-change.js';
import { TransactionMeta } from './transaction-meta.js';

class TransactionResultMetaV1 extends XdrValue {
  ext;
  result;
  feeProcessing;
  txApplyProcessing;
  postTxApplyFeeProcessing;
  static schema = struct(
    "TransactionResultMetaV1",
    {
      ext: ExtensionPoint.schema,
      result: TransactionResultPair.schema,
      feeProcessing: array(LedgerEntryChange.schema, UNBOUNDED_MAX_LENGTH),
      txApplyProcessing: TransactionMeta.schema,
      postTxApplyFeeProcessing: array(
        LedgerEntryChange.schema,
        UNBOUNDED_MAX_LENGTH
      )
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.result = input.result;
    this.feeProcessing = input.feeProcessing;
    this.txApplyProcessing = input.txApplyProcessing;
    this.postTxApplyFeeProcessing = input.postTxApplyFeeProcessing;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      result: this.result.toXdrObject(),
      feeProcessing: this.feeProcessing.map((v) => v.toXdrObject()),
      txApplyProcessing: this.txApplyProcessing.toXdrObject(),
      postTxApplyFeeProcessing: this.postTxApplyFeeProcessing.map(
        (v) => v.toXdrObject()
      )
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResultMetaV1({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      result: TransactionResultPair.fromXdrObject(wire.result),
      feeProcessing: wire.feeProcessing.map(
        (w) => LedgerEntryChange.fromXdrObject(w)
      ),
      txApplyProcessing: TransactionMeta.fromXdrObject(wire.txApplyProcessing),
      postTxApplyFeeProcessing: wire.postTxApplyFeeProcessing.map(
        (w) => LedgerEntryChange.fromXdrObject(w)
      )
    });
  }
}

export { TransactionResultMetaV1 };
//# sourceMappingURL=transaction-result-meta-v1.js.map
