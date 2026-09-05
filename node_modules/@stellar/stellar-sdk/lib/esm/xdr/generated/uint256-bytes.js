import { opaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class Uint256Bytes extends BytesValue {
  static byteLength = 32;
  static encoding = "hex";
  static schema = opaque(32, "Uint256Bytes");
  static fromXdrObject(wire) {
    return new Uint256Bytes(wire);
  }
}

export { Uint256Bytes };
//# sourceMappingURL=uint256-bytes.js.map
