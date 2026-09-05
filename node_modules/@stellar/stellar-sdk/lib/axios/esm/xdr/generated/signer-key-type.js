import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class SignerKeyType extends EnumValue {
  static signerKeyTypeEd25519 = new SignerKeyType(
    "signerKeyTypeEd25519",
    0
  );
  static signerKeyTypePreAuthTx = new SignerKeyType(
    "signerKeyTypePreAuthTx",
    1
  );
  static signerKeyTypeHashX = new SignerKeyType(
    "signerKeyTypeHashX",
    2
  );
  static signerKeyTypeEd25519SignedPayload = new SignerKeyType(
    "signerKeyTypeEd25519SignedPayload",
    3
  );
  static schema = withMemberPrefix(
    enumType("SignerKeyType", {
      signerKeyTypeEd25519: 0,
      signerKeyTypePreAuthTx: 1,
      signerKeyTypeHashX: 2,
      signerKeyTypeEd25519SignedPayload: 3
    }),
    "signerKeyType"
  );
  static fromValue(value) {
    return enumFromValue(
      "SignerKeyType",
      SignerKeyType.schema,
      SignerKeyType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("SignerKeyType", SignerKeyType, name);
  }
  static fromXdrObject(wire) {
    return SignerKeyType.fromValue(wire);
  }
}

export { SignerKeyType };
//# sourceMappingURL=signer-key-type.js.map
