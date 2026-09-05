'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class EnvelopeType extends enumValue.EnumValue {
  static envelopeTypeTxV0 = new EnvelopeType("envelopeTypeTxV0", 0);
  static envelopeTypeScp = new EnvelopeType("envelopeTypeScp", 1);
  static envelopeTypeTx = new EnvelopeType("envelopeTypeTx", 2);
  static envelopeTypeAuth = new EnvelopeType("envelopeTypeAuth", 3);
  static envelopeTypeScpvalue = new EnvelopeType(
    "envelopeTypeScpvalue",
    4
  );
  static envelopeTypeTxFeeBump = new EnvelopeType(
    "envelopeTypeTxFeeBump",
    5
  );
  static envelopeTypeOpId = new EnvelopeType("envelopeTypeOpId", 6);
  static envelopeTypePoolRevokeOpId = new EnvelopeType(
    "envelopeTypePoolRevokeOpId",
    7
  );
  static envelopeTypeContractId = new EnvelopeType(
    "envelopeTypeContractId",
    8
  );
  static envelopeTypeSorobanAuthorization = new EnvelopeType(
    "envelopeTypeSorobanAuthorization",
    9
  );
  static envelopeTypeSorobanAuthorizationWithAddress = new EnvelopeType("envelopeTypeSorobanAuthorizationWithAddress", 10);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("EnvelopeType", {
      envelopeTypeTxV0: 0,
      envelopeTypeScp: 1,
      envelopeTypeTx: 2,
      envelopeTypeAuth: 3,
      envelopeTypeScpvalue: 4,
      envelopeTypeTxFeeBump: 5,
      envelopeTypeOpId: 6,
      envelopeTypePoolRevokeOpId: 7,
      envelopeTypeContractId: 8,
      envelopeTypeSorobanAuthorization: 9,
      envelopeTypeSorobanAuthorizationWithAddress: 10
    }),
    "envelopeType"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "EnvelopeType",
      EnvelopeType.schema,
      EnvelopeType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("EnvelopeType", EnvelopeType, name);
  }
  static fromXdrObject(wire) {
    return EnvelopeType.fromValue(wire);
  }
}

exports.EnvelopeType = EnvelopeType;
//# sourceMappingURL=envelope-type.js.map
