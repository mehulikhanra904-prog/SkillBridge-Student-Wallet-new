'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ClaimAtomType extends enumValue.EnumValue {
  static claimAtomTypeV0 = new ClaimAtomType("claimAtomTypeV0", 0);
  static claimAtomTypeOrderBook = new ClaimAtomType(
    "claimAtomTypeOrderBook",
    1
  );
  static claimAtomTypeLiquidityPool = new ClaimAtomType(
    "claimAtomTypeLiquidityPool",
    2
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ClaimAtomType", {
      claimAtomTypeV0: 0,
      claimAtomTypeOrderBook: 1,
      claimAtomTypeLiquidityPool: 2
    }),
    "claimAtomType"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ClaimAtomType",
      ClaimAtomType.schema,
      ClaimAtomType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ClaimAtomType", ClaimAtomType, name);
  }
  static fromXdrObject(wire) {
    return ClaimAtomType.fromValue(wire);
  }
}

exports.ClaimAtomType = ClaimAtomType;
//# sourceMappingURL=claim-atom-type.js.map
