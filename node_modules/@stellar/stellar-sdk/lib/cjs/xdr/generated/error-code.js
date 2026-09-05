'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ErrorCode extends enumValue.EnumValue {
  static errMisc = new ErrorCode("errMisc", 0);
  static errData = new ErrorCode("errData", 1);
  static errConf = new ErrorCode("errConf", 2);
  static errAuth = new ErrorCode("errAuth", 3);
  static errLoad = new ErrorCode("errLoad", 4);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ErrorCode", {
      errMisc: 0,
      errData: 1,
      errConf: 2,
      errAuth: 3,
      errLoad: 4
    }),
    "err"
  );
  static fromValue(value) {
    return enumValue.enumFromValue("ErrorCode", ErrorCode.schema, ErrorCode, value);
  }
  static fromName(name) {
    return enumValue.enumFromName("ErrorCode", ErrorCode, name);
  }
  static fromXdrObject(wire) {
    return ErrorCode.fromValue(wire);
  }
}

exports.ErrorCode = ErrorCode;
//# sourceMappingURL=error-code.js.map
