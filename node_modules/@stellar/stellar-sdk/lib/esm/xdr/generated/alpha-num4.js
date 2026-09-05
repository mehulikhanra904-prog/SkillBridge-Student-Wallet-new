import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AssetCode4 } from './asset-code4.js';
import { PublicKey } from './public-key.js';

class AlphaNum4 extends XdrValue {
  assetCode;
  issuer;
  static schema = struct("AlphaNum4", {
    assetCode: AssetCode4.schema,
    issuer: PublicKey.schema
  });
  constructor(input) {
    super();
    this.assetCode = input.assetCode instanceof AssetCode4 ? input.assetCode : new AssetCode4(input.assetCode);
    this.issuer = input.issuer;
  }
  toXdrObject() {
    return {
      assetCode: this.assetCode.toXdrObject(),
      issuer: this.issuer.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AlphaNum4({
      assetCode: AssetCode4.fromXdrObject(wire.assetCode),
      issuer: PublicKey.fromXdrObject(wire.issuer)
    });
  }
}

export { AlphaNum4 };
//# sourceMappingURL=alpha-num4.js.map
