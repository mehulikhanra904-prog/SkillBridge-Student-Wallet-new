import { varOpaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class Signature extends BytesValue {
  static encoding = "hex";
  static schema = varOpaque(64, "Signature");
  static fromXdrObject(wire) {
    return new Signature(wire);
  }
}

export { Signature };
//# sourceMappingURL=signature.js.map
