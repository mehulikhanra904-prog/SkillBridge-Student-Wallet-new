import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { MuxedAccount } from './muxed-account.js';
import { FeeBumpTransactionInnerTx } from './fee-bump-transaction-inner-tx.js';
import { FeeBumpTransactionExt } from './fee-bump-transaction-ext.js';

let FeeBumpTransaction$1 = class FeeBumpTransaction extends XdrValue {
  feeSource;
  fee;
  innerTx;
  ext;
  static schema = struct(
    "FeeBumpTransaction",
    {
      feeSource: MuxedAccount.schema,
      fee: int64(),
      innerTx: FeeBumpTransactionInnerTx.schema,
      ext: FeeBumpTransactionExt.schema
    }
  );
  constructor(input) {
    super();
    this.feeSource = input.feeSource;
    this.fee = input.fee;
    this.innerTx = input.innerTx;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      feeSource: this.feeSource.toXdrObject(),
      fee: this.fee,
      innerTx: this.innerTx.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new FeeBumpTransaction({
      feeSource: MuxedAccount.fromXdrObject(wire.feeSource),
      fee: wire.fee,
      innerTx: FeeBumpTransactionInnerTx.fromXdrObject(wire.innerTx),
      ext: FeeBumpTransactionExt.fromXdrObject(wire.ext)
    });
  }
};

export { FeeBumpTransaction$1 as FeeBumpTransaction };
//# sourceMappingURL=fee-bump-transaction.js.map
