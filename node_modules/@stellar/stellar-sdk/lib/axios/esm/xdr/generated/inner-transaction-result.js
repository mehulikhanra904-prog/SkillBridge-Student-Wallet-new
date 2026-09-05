import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { InnerTransactionResultResult } from './inner-transaction-result-result.js';
import { InnerTransactionResultExt } from './inner-transaction-result-ext.js';

class InnerTransactionResult extends XdrValue {
  feeCharged;
  result;
  ext;
  static schema = struct(
    "InnerTransactionResult",
    {
      feeCharged: int64(),
      result: InnerTransactionResultResult.schema,
      ext: InnerTransactionResultExt.schema
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
    return new InnerTransactionResult({
      feeCharged: wire.feeCharged,
      result: InnerTransactionResultResult.fromXdrObject(wire.result),
      ext: InnerTransactionResultExt.fromXdrObject(wire.ext)
    });
  }
}

export { InnerTransactionResult };
//# sourceMappingURL=inner-transaction-result.js.map
