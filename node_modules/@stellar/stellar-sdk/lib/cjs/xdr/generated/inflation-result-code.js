'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class InflationResultCode extends enumValue.EnumValue {
  static inflationSuccess = new InflationResultCode(
    "inflationSuccess",
    0
  );
  static inflationNotTime = new InflationResultCode(
    "inflationNotTime",
    -1
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("InflationResultCode", {
      inflationSuccess: 0,
      inflationNotTime: -1
    }),
    "inflation"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "InflationResultCode",
      InflationResultCode.schema,
      InflationResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("InflationResultCode", InflationResultCode, name);
  }
  static fromXdrObject(wire) {
    return InflationResultCode.fromValue(wire);
  }
}

exports.InflationResultCode = InflationResultCode;
//# sourceMappingURL=inflation-result-code.js.map
