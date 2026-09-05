import { varOpaque, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class Value extends BytesValue {
  static encoding = "hex";
  static schema = varOpaque(UNBOUNDED_MAX_LENGTH, "Value");
  static fromXdrObject(wire) {
    return new Value(wire);
  }
}

export { Value };
//# sourceMappingURL=value.js.map
