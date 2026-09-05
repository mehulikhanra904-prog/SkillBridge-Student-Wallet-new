'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class AllowTrustResultCode extends enumValue.EnumValue {
  static allowTrustSuccess = new AllowTrustResultCode(
    "allowTrustSuccess",
    0
  );
  static allowTrustMalformed = new AllowTrustResultCode(
    "allowTrustMalformed",
    -1
  );
  static allowTrustNoTrustLine = new AllowTrustResultCode(
    "allowTrustNoTrustLine",
    -2
  );
  static allowTrustTrustNotRequired = new AllowTrustResultCode(
    "allowTrustTrustNotRequired",
    -3
  );
  static allowTrustCantRevoke = new AllowTrustResultCode(
    "allowTrustCantRevoke",
    -4
  );
  static allowTrustSelfNotAllowed = new AllowTrustResultCode(
    "allowTrustSelfNotAllowed",
    -5
  );
  static allowTrustLowReserve = new AllowTrustResultCode(
    "allowTrustLowReserve",
    -6
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("AllowTrustResultCode", {
      allowTrustSuccess: 0,
      allowTrustMalformed: -1,
      allowTrustNoTrustLine: -2,
      allowTrustTrustNotRequired: -3,
      allowTrustCantRevoke: -4,
      allowTrustSelfNotAllowed: -5,
      allowTrustLowReserve: -6
    }),
    "allowTrust"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "AllowTrustResultCode",
      AllowTrustResultCode.schema,
      AllowTrustResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("AllowTrustResultCode", AllowTrustResultCode, name);
  }
  static fromXdrObject(wire) {
    return AllowTrustResultCode.fromValue(wire);
  }
}

exports.AllowTrustResultCode = AllowTrustResultCode;
//# sourceMappingURL=allow-trust-result-code.js.map
