import { opaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class AssetCode4 extends BytesValue {
  static byteLength = 4;
  static padTo = 4;
  static encoding = "ascii";
  static schema = opaque(4, "AssetCode4");
  static fromXdrObject(wire) {
    return new AssetCode4(wire);
  }
}

export { AssetCode4 };
//# sourceMappingURL=asset-code4.js.map
