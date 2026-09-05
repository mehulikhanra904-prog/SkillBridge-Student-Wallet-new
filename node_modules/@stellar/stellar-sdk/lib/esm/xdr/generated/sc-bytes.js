import { varOpaque, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class ScBytes extends BytesValue {
  static encoding = "hex";
  static schema = varOpaque(UNBOUNDED_MAX_LENGTH, "ScBytes");
  static fromXdrObject(wire) {
    return new ScBytes(wire);
  }
}

export { ScBytes };
//# sourceMappingURL=sc-bytes.js.map
