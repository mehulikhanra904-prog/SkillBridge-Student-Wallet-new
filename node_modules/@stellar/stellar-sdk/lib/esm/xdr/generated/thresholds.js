import { opaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class Thresholds extends BytesValue {
  static byteLength = 4;
  static encoding = "hex";
  static schema = opaque(4, "Thresholds");
  static fromXdrObject(wire) {
    return new Thresholds(wire);
  }
}

export { Thresholds };
//# sourceMappingURL=thresholds.js.map
