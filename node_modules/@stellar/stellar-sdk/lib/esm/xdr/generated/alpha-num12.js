import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AssetCode12 } from './asset-code12.js';
import { PublicKey } from './public-key.js';

class AlphaNum12 extends XdrValue {
  assetCode;
  issuer;
  static schema = struct("AlphaNum12", {
    assetCode: AssetCode12.schema,
    issuer: PublicKey.schema
  });
  constructor(input) {
    super();
    this.assetCode = input.assetCode instanceof AssetCode12 ? input.assetCode : new AssetCode12(input.assetCode);
    this.issuer = input.issuer;
  }
  toXdrObject() {
    return {
      assetCode: this.assetCode.toXdrObject(),
      issuer: this.issuer.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AlphaNum12({
      assetCode: AssetCode12.fromXdrObject(wire.assetCode),
      issuer: PublicKey.fromXdrObject(wire.issuer)
    });
  }
}

export { AlphaNum12 };
//# sourceMappingURL=alpha-num12.js.map
