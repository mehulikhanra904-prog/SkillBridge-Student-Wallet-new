import { varOpaque } from '@stellar/js-xdr';
import { BytesValue } from '../values/bytes-value.js';

class UpgradeType extends BytesValue {
  static encoding = "hex";
  static schema = varOpaque(128, "UpgradeType");
  static fromXdrObject(wire) {
    return new UpgradeType(wire);
  }
}

export { UpgradeType };
//# sourceMappingURL=upgrade-type.js.map
