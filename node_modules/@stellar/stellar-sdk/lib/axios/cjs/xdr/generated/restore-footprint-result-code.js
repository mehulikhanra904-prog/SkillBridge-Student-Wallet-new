'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class RestoreFootprintResultCode extends enumValue.EnumValue {
  static restoreFootprintSuccess = new RestoreFootprintResultCode(
    "restoreFootprintSuccess",
    0
  );
  static restoreFootprintMalformed = new RestoreFootprintResultCode(
    "restoreFootprintMalformed",
    -1
  );
  static restoreFootprintResourceLimitExceeded = new RestoreFootprintResultCode("restoreFootprintResourceLimitExceeded", -2);
  static restoreFootprintInsufficientRefundableFee = new RestoreFootprintResultCode(
    "restoreFootprintInsufficientRefundableFee",
    -3
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("RestoreFootprintResultCode", {
      restoreFootprintSuccess: 0,
      restoreFootprintMalformed: -1,
      restoreFootprintResourceLimitExceeded: -2,
      restoreFootprintInsufficientRefundableFee: -3
    }),
    "restoreFootprint"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "RestoreFootprintResultCode",
      RestoreFootprintResultCode.schema,
      RestoreFootprintResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "RestoreFootprintResultCode",
      RestoreFootprintResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return RestoreFootprintResultCode.fromValue(wire);
  }
}

exports.RestoreFootprintResultCode = RestoreFootprintResultCode;
//# sourceMappingURL=restore-footprint-result-code.js.map
