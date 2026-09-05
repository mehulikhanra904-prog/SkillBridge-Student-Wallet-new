import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class PublicKeyType extends EnumValue {
  static publicKeyTypeEd25519 = new PublicKeyType(
    "publicKeyTypeEd25519",
    0
  );
  static schema = enumType("PublicKeyType", {
    publicKeyTypeEd25519: 0
  });
  static fromValue(value) {
    return enumFromValue(
      "PublicKeyType",
      PublicKeyType.schema,
      PublicKeyType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("PublicKeyType", PublicKeyType, name);
  }
  static fromXdrObject(wire) {
    return PublicKeyType.fromValue(wire);
  }
}

export { PublicKeyType };
//# sourceMappingURL=public-key-type.js.map
