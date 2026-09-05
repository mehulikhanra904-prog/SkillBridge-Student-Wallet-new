import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScErrorType extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("ScErrorType", {
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
    return enumFromValue("ScErrorType", ScErrorType.schema, ScErrorType, value);
  }
  static fromName(name) {
    return enumFromName("ScErrorType", ScErrorType, name);
  }
  static fromXdrObject(wire) {
    return ScErrorType.fromValue(wire);
  }
}

export { ScErrorType };
//# sourceMappingURL=sc-error-type.js.map
