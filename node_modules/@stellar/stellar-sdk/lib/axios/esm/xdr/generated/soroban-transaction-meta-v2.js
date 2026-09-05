import { struct, option } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanTransactionMetaExt } from './soroban-transaction-meta-ext.js';
import { ScVal } from './sc-val.js';

class SorobanTransactionMetaV2 extends XdrValue {
  ext;
  returnValue;
  static schema = struct(
    "SorobanTransactionMetaV2",
    {
      ext: SorobanTransactionMetaExt.schema,
      returnValue: option(ScVal.schema)
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.returnValue = input.returnValue;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      returnValue: this.returnValue === null ? null : this.returnValue.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SorobanTransactionMetaV2({
      ext: SorobanTransactionMetaExt.fromXdrObject(wire.ext),
      returnValue: wire.returnValue === null ? null : ScVal.fromXdrObject(wire.returnValue)
    });
  }
}

export { SorobanTransactionMetaV2 };
//# sourceMappingURL=soroban-transaction-meta-v2.js.map
