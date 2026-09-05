'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class OperationResultCode extends enumValue.EnumValue {
  static opInner = new OperationResultCode("opInner", 0);
  static opBadAuth = new OperationResultCode("opBadAuth", -1);
  static opNoAccount = new OperationResultCode("opNoAccount", -2);
  static opNotSupported = new OperationResultCode(
    "opNotSupported",
    -3
  );
  static opTooManySubentries = new OperationResultCode(
    "opTooManySubentries",
    -4
  );
  static opExceededWorkLimit = new OperationResultCode(
    "opExceededWorkLimit",
    -5
  );
  static opTooManySponsoring = new OperationResultCode(
    "opTooManySponsoring",
    -6
  );
  static schema = jsXdr.enumType("OperationResultCode", {
    opInner: 0,
    opBadAuth: -1,
    opNoAccount: -2,
    opNotSupported: -3,
    opTooManySubentries: -4,
    opExceededWorkLimit: -5,
    opTooManySponsoring: -6
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "OperationResultCode",
      OperationResultCode.schema,
      OperationResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("OperationResultCode", OperationResultCode, name);
  }
  static fromXdrObject(wire) {
    return OperationResultCode.fromValue(wire);
  }
}

exports.OperationResultCode = OperationResultCode;
//# sourceMappingURL=operation-result-code.js.map
