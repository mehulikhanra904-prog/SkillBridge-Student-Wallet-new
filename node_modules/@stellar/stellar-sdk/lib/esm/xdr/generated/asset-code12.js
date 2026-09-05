import { opaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class AssetCode12 extends BytesValue {
  static byteLength = 12;
  static padTo = 12;
  static encoding = "ascii";
  static schema = opaque(12, "AssetCode12");
  static fromXdrObject(wire) {
    return new AssetCode12(wire);
  }
}

export { AssetCode12 };
//# sourceMappingURL=asset-code12.js.map
