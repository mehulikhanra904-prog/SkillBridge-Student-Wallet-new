import { struct, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ChangeTrustAsset } from './change-trust-asset.js';

class ChangeTrustOp extends XdrValue {
  line;
  limit;
  static schema = struct("ChangeTrustOp", {
    line: ChangeTrustAsset.schema,
    limit: int64()
  });
  constructor(input) {
    super();
    this.line = input.line;
    this.limit = input.limit;
  }
  toXdrObject() {
    return {
      line: this.line.toXdrObject(),
      limit: this.limit
    };
  }
  static fromXdrObject(wire) {
    return new ChangeTrustOp({
      line: ChangeTrustAsset.fromXdrObject(wire.line),
      limit: wire.limit
    });
  }
}

export { ChangeTrustOp };
//# sourceMappingURL=change-trust-op.js.map
