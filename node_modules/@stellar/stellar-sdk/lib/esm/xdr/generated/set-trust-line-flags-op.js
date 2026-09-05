import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { Asset as Asset$1 } from './asset.js';

class SetTrustLineFlagsOp extends XdrValue {
  trustor;
  asset;
  clearFlags;
  setFlags;
  static schema = struct(
    "SetTrustLineFlagsOp",
    {
      trustor: PublicKey.schema,
      asset: Asset$1.schema,
      clearFlags: uint32(),
      setFlags: uint32()
    }
  );
  constructor(input) {
    super();
    this.trustor = input.trustor;
    this.asset = input.asset;
    this.clearFlags = input.clearFlags;
    this.setFlags = input.setFlags;
  }
  toXdrObject() {
    return {
      trustor: this.trustor.toXdrObject(),
      asset: this.asset.toXdrObject(),
      clearFlags: this.clearFlags,
      setFlags: this.setFlags
    };
  }
  static fromXdrObject(wire) {
    return new SetTrustLineFlagsOp({
      trustor: PublicKey.fromXdrObject(wire.trustor),
      asset: Asset$1.fromXdrObject(wire.asset),
      clearFlags: wire.clearFlags,
      setFlags: wire.setFlags
    });
  }
}

export { SetTrustLineFlagsOp };
//# sourceMappingURL=set-trust-line-flags-op.js.map
