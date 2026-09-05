import { varOpaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class DataValue extends BytesValue {
  static encoding = "hex";
  static schema = varOpaque(64, "DataValue");
  static fromXdrObject(wire) {
    return new DataValue(wire);
  }
}

export { DataValue };
//# sourceMappingURL=data-value.js.map
