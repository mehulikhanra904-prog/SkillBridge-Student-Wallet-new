'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ExtendFootprintTtlResultCode extends enumValue.EnumValue {
  static extendFootprintTtlSuccess = new ExtendFootprintTtlResultCode(
    "extendFootprintTtlSuccess",
    0
  );
  static extendFootprintTtlMalformed = new ExtendFootprintTtlResultCode("extendFootprintTtlMalformed", -1);
  static extendFootprintTtlResourceLimitExceeded = new ExtendFootprintTtlResultCode(
    "extendFootprintTtlResourceLimitExceeded",
    -2
  );
  static extendFootprintTtlInsufficientRefundableFee = new ExtendFootprintTtlResultCode(
    "extendFootprintTtlInsufficientRefundableFee",
    -3
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ExtendFootprintTtlResultCode", {
      extendFootprintTtlSuccess: 0,
      extendFootprintTtlMalformed: -1,
      extendFootprintTtlResourceLimitExceeded: -2,
      extendFootprintTtlInsufficientRefundableFee: -3
    }),
    "extendFootprintTtl"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ExtendFootprintTtlResultCode",
      ExtendFootprintTtlResultCode.schema,
      ExtendFootprintTtlResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "ExtendFootprintTtlResultCode",
      ExtendFootprintTtlResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return ExtendFootprintTtlResultCode.fromValue(wire);
  }
}

exports.ExtendFootprintTtlResultCode = ExtendFootprintTtlResultCode;
//# sourceMappingURL=extend-footprint-ttl-result-code.js.map
