import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtensionPoint } from './extension-point.js';

class SorobanTransactionMetaExtV1 extends XdrValue {
  ext;
  totalNonRefundableResourceFeeCharged;
  totalRefundableResourceFeeCharged;
  rentFeeCharged;
  static schema = struct(
    "SorobanTransactionMetaExtV1",
    {
      ext: ExtensionPoint.schema,
      totalNonRefundableResourceFeeCharged: int64(),
      totalRefundableResourceFeeCharged: int64(),
      rentFeeCharged: int64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.totalNonRefundableResourceFeeCharged = input.totalNonRefundableResourceFeeCharged;
    this.totalRefundableResourceFeeCharged = input.totalRefundableResourceFeeCharged;
    this.rentFeeCharged = input.rentFeeCharged;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      totalNonRefundableResourceFeeCharged: this.totalNonRefundableResourceFeeCharged,
      totalRefundableResourceFeeCharged: this.totalRefundableResourceFeeCharged,
      rentFeeCharged: this.rentFeeCharged
    };
  }
  static fromXdrObject(wire) {
    return new SorobanTransactionMetaExtV1({
      ext: ExtensionPoint.fromXdrObject(wire.ext),
      totalNonRefundableResourceFeeCharged: wire.totalNonRefundableResourceFeeCharged,
      totalRefundableResourceFeeCharged: wire.totalRefundableResourceFeeCharged,
      rentFeeCharged: wire.rentFeeCharged
    });
  }
}

export { SorobanTransactionMetaExtV1 };
//# sourceMappingURL=soroban-transaction-meta-ext-v1.js.map
