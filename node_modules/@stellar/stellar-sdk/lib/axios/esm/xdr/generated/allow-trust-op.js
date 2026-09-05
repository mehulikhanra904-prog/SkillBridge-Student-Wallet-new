import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { AssetCode } from './asset-code.js';

class AllowTrustOp extends XdrValue {
  trustor;
  asset;
  authorize;
  static schema = struct("AllowTrustOp", {
    trustor: PublicKey.schema,
    asset: AssetCode.schema,
    authorize: uint32()
  });
  constructor(input) {
    super();
    this.trustor = input.trustor;
    this.asset = input.asset;
    this.authorize = input.authorize;
  }
  toXdrObject() {
    return {
      trustor: this.trustor.toXdrObject(),
      asset: this.asset.toXdrObject(),
      authorize: this.authorize
    };
  }
  static fromXdrObject(wire) {
    return new AllowTrustOp({
      trustor: PublicKey.fromXdrObject(wire.trustor),
      asset: AssetCode.fromXdrObject(wire.asset),
      authorize: wire.authorize
    });
  }
}

export { AllowTrustOp };
//# sourceMappingURL=allow-trust-op.js.map
