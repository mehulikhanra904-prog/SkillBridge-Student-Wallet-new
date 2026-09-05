import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionResultResult } from './transaction-result-result.js';
import { TransactionResultExt } from './transaction-result-ext.js';

class TransactionResult extends XdrValue {
  feeCharged;
  result;
  ext;
  static schema = struct(
    "TransactionResult",
    {
      feeCharged: int64(),
      result: TransactionResultResult.schema,
      ext: TransactionResultExt.schema
    }
  );
  constructor(input) {
    super();
    this.feeCharged = input.feeCharged;
    this.result = input.result;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      feeCharged: this.feeCharged,
      result: this.result.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TransactionResult({
      feeCharged: wire.feeCharged,
      result: TransactionResultResult.fromXdrObject(wire.result),
      ext: TransactionResultExt.fromXdrObject(wire.ext)
    });
  }
}

export { TransactionResult };
//# sourceMappingURL=transaction-result.js.map
