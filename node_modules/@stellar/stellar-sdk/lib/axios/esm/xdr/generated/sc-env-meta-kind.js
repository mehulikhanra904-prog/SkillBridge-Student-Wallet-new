import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScEnvMetaKind extends EnumValue {
  static scEnvMetaKindInterfaceVersion = new ScEnvMetaKind(
    "scEnvMetaKindInterfaceVersion",
    0
  );
  static schema = enumType("ScEnvMetaKind", {
    scEnvMetaKindInterfaceVersion: 0
  });
  static fromValue(value) {
    return enumFromValue(
      "ScEnvMetaKind",
      ScEnvMetaKind.schema,
      ScEnvMetaKind,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ScEnvMetaKind", ScEnvMetaKind, name);
  }
  static fromXdrObject(wire) {
    return ScEnvMetaKind.fromValue(wire);
  }
}

export { ScEnvMetaKind };
//# sourceMappingURL=sc-env-meta-kind.js.map
