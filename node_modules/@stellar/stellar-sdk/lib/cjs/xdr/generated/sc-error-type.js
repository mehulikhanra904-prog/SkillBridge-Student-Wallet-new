'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScErrorType extends enumValue.EnumValue {
  static sceContract = new ScErrorType("sceContract", 0);
  static sceWasmVm = new ScErrorType("sceWasmVm", 1);
  static sceContext = new ScErrorType("sceContext", 2);
  static sceStorage = new ScErrorType("sceStorage", 3);
  static sceObject = new ScErrorType("sceObject", 4);
  static sceCrypto = new ScErrorType("sceCrypto", 5);
  static sceEvents = new ScErrorType("sceEvents", 6);
  static sceBudget = new ScErrorType("sceBudget", 7);
  static sceValue = new ScErrorType("sceValue", 8);
  static sceAuth = new ScErrorType("sceAuth", 9);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ScErrorType", {
      sceContract: 0,
      sceWasmVm: 1,
      sceContext: 2,
      sceStorage: 3,
      sceObject: 4,
      sceCrypto: 5,
      sceEvents: 6,
      sceBudget: 7,
      sceValue: 8,
      sceAuth: 9
    }),
    "sce"
  );
  static fromValue(value) {
    return enumValue.enumFromValue("ScErrorType", ScErrorType.schema, ScErrorType, value);
  }
  static fromName(name) {
    return enumValue.enumFromName("ScErrorType", ScErrorType, name);
  }
  static fromXdrObject(wire) {
    return ScErrorType.fromValue(wire);
  }
}

exports.ScErrorType = ScErrorType;
//# sourceMappingURL=sc-error-type.js.map
