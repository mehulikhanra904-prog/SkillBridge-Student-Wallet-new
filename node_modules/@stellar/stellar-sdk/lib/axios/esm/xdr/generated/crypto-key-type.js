import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class CryptoKeyType extends EnumValue {
  static keyTypeEd25519 = new CryptoKeyType("keyTypeEd25519", 0);
  static keyTypePreAuthTx = new CryptoKeyType("keyTypePreAuthTx", 1);
  static keyTypeHashX = new CryptoKeyType("keyTypeHashX", 2);
  static keyTypeEd25519SignedPayload = new CryptoKeyType(
    "keyTypeEd25519SignedPayload",
    3
  );
  static keyTypeMuxedEd25519 = new CryptoKeyType(
    "keyTypeMuxedEd25519",
    256
  );
  static schema = withMemberPrefix(
    enumType("CryptoKeyType", {
      keyTypeEd25519: 0,
      keyTypePreAuthTx: 1,
      keyTypeHashX: 2,
      keyTypeEd25519SignedPayload: 3,
      keyTypeMuxedEd25519: 256
    }),
    "keyType"
  );
  static fromValue(value) {
    return enumFromValue(
      "CryptoKeyType",
      CryptoKeyType.schema,
      CryptoKeyType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("CryptoKeyType", CryptoKeyType, name);
  }
  static fromXdrObject(wire) {
    return CryptoKeyType.fromValue(wire);
  }
}

export { CryptoKeyType };
//# sourceMappingURL=crypto-key-type.js.map
