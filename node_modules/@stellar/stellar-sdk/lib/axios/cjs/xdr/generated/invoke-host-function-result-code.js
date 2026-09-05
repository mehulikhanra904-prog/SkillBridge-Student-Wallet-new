'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class InvokeHostFunctionResultCode extends enumValue.EnumValue {
  static invokeHostFunctionSuccess = new InvokeHostFunctionResultCode(
    "invokeHostFunctionSuccess",
    0
  );
  static invokeHostFunctionMalformed = new InvokeHostFunctionResultCode("invokeHostFunctionMalformed", -1);
  static invokeHostFunctionTrapped = new InvokeHostFunctionResultCode(
    "invokeHostFunctionTrapped",
    -2
  );
  static invokeHostFunctionResourceLimitExceeded = new InvokeHostFunctionResultCode(
    "invokeHostFunctionResourceLimitExceeded",
    -3
  );
  static invokeHostFunctionEntryArchived = new InvokeHostFunctionResultCode("invokeHostFunctionEntryArchived", -4);
  static invokeHostFunctionInsufficientRefundableFee = new InvokeHostFunctionResultCode(
    "invokeHostFunctionInsufficientRefundableFee",
    -5
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("InvokeHostFunctionResultCode", {
      invokeHostFunctionSuccess: 0,
      invokeHostFunctionMalformed: -1,
      invokeHostFunctionTrapped: -2,
      invokeHostFunctionResourceLimitExceeded: -3,
      invokeHostFunctionEntryArchived: -4,
      invokeHostFunctionInsufficientRefundableFee: -5
    }),
    "invokeHostFunction"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "InvokeHostFunctionResultCode",
      InvokeHostFunctionResultCode.schema,
      InvokeHostFunctionResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "InvokeHostFunctionResultCode",
      InvokeHostFunctionResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return InvokeHostFunctionResultCode.fromValue(wire);
  }
}

exports.InvokeHostFunctionResultCode = InvokeHostFunctionResultCode;
//# sourceMappingURL=invoke-host-function-result-code.js.map
