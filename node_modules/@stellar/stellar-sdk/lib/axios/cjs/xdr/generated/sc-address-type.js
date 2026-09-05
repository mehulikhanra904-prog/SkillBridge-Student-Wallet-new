'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScAddressType extends enumValue.EnumValue {
  static scAddressTypeAccount = new ScAddressType(
    "scAddressTypeAccount",
    0
  );
  static scAddressTypeContract = new ScAddressType(
    "scAddressTypeContract",
    1
  );
  static scAddressTypeMuxedAccount = new ScAddressType(
    "scAddressTypeMuxedAccount",
    2
  );
  static scAddressTypeClaimableBalance = new ScAddressType(
    "scAddressTypeClaimableBalance",
    3
  );
  static scAddressTypeLiquidityPool = new ScAddressType(
    "scAddressTypeLiquidityPool",
    4
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ScAddressType", {
      scAddressTypeAccount: 0,
      scAddressTypeContract: 1,
      scAddressTypeMuxedAccount: 2,
      scAddressTypeClaimableBalance: 3,
      scAddressTypeLiquidityPool: 4
    }),
    "scAddressType"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ScAddressType",
      ScAddressType.schema,
      ScAddressType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ScAddressType", ScAddressType, name);
  }
  static fromXdrObject(wire) {
    return ScAddressType.fromValue(wire);
  }
}

exports.ScAddressType = ScAddressType;
//# sourceMappingURL=sc-address-type.js.map
