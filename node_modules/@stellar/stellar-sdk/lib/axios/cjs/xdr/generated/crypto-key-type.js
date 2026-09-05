'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class CryptoKeyType extends enumValue.EnumValue {
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
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("CryptoKeyType", {
      keyTypeEd25519: 0,
      keyTypePreAuthTx: 1,
      keyTypeHashX: 2,
      keyTypeEd25519SignedPayload: 3,
      keyTypeMuxedEd25519: 256
    }),
    "keyType"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "CryptoKeyType",
      CryptoKeyType.schema,
      CryptoKeyType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("CryptoKeyType", CryptoKeyType, name);
  }
  static fromXdrObject(wire) {
    return CryptoKeyType.fromValue(wire);
  }
}

exports.CryptoKeyType = CryptoKeyType;
//# sourceMappingURL=crypto-key-type.js.map
