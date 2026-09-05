'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class PublicKeyType extends enumValue.EnumValue {
  static publicKeyTypeEd25519 = new PublicKeyType(
    "publicKeyTypeEd25519",
    0
  );
  static schema = jsXdr.enumType("PublicKeyType", {
    publicKeyTypeEd25519: 0
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "PublicKeyType",
      PublicKeyType.schema,
      PublicKeyType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("PublicKeyType", PublicKeyType, name);
  }
  static fromXdrObject(wire) {
    return PublicKeyType.fromValue(wire);
  }
}

exports.PublicKeyType = PublicKeyType;
//# sourceMappingURL=public-key-type.js.map
