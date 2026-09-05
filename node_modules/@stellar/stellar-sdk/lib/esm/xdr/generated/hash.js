import { opaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class Hash extends BytesValue {
  static byteLength = 32;
  static encoding = "hex";
  static schema = opaque(32, "Hash");
  static fromXdrObject(wire) {
    return new Hash(wire);
  }
}

export { Hash };
//# sourceMappingURL=hash.js.map
