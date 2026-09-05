import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScMetaKind extends EnumValue {
  static scMetaV0 = new ScMetaKind("scMetaV0", 0);
  static schema = enumType("ScMetaKind", {
    scMetaV0: 0
  });
  static fromValue(value) {
    return enumFromValue("ScMetaKind", ScMetaKind.schema, ScMetaKind, value);
  }
  static fromName(name) {
    return enumFromName("ScMetaKind", ScMetaKind, name);
  }
  static fromXdrObject(wire) {
    return ScMetaKind.fromValue(wire);
  }
}

export { ScMetaKind };
//# sourceMappingURL=sc-meta-kind.js.map
