'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class TrustLineFlags extends enumValue.EnumValue {
  static authorizedFlag = new TrustLineFlags("authorizedFlag", 1);
  static authorizedToMaintainLiabilitiesFlag = new TrustLineFlags(
    "authorizedToMaintainLiabilitiesFlag",
    2
  );
  static trustlineClawbackEnabledFlag = new TrustLineFlags(
    "trustlineClawbackEnabledFlag",
    4
  );
  static schema = jsXdr.enumType("TrustLineFlags", {
    authorizedFlag: 1,
    authorizedToMaintainLiabilitiesFlag: 2,
    trustlineClawbackEnabledFlag: 4
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "TrustLineFlags",
      TrustLineFlags.schema,
      TrustLineFlags,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("TrustLineFlags", TrustLineFlags, name);
  }
  static fromXdrObject(wire) {
    return TrustLineFlags.fromValue(wire);
  }
}

exports.TrustLineFlags = TrustLineFlags;
//# sourceMappingURL=trust-line-flags.js.map
