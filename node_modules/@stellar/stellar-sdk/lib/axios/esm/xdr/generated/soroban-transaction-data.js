import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanTransactionDataExt } from './soroban-transaction-data-ext.js';
import { SorobanResources } from './soroban-resources.js';

class SorobanTransactionData extends XdrValue {
  ext;
  resources;
  resourceFee;
  static schema = struct(
    "SorobanTransactionData",
    {
      ext: SorobanTransactionDataExt.schema,
      resources: SorobanResources.schema,
      resourceFee: int64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.resources = input.resources;
    this.resourceFee = input.resourceFee;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      resources: this.resources.toXdrObject(),
      resourceFee: this.resourceFee
    };
  }
  static fromXdrObject(wire) {
    return new SorobanTransactionData({
      ext: SorobanTransactionDataExt.fromXdrObject(wire.ext),
      resources: SorobanResources.fromXdrObject(wire.resources),
      resourceFee: wire.resourceFee
    });
  }
}

export { SorobanTransactionData };
//# sourceMappingURL=soroban-transaction-data.js.map
