import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScErrorCode extends EnumValue {
  static scecArithDomain = new ScErrorCode("scecArithDomain", 0);
  static scecIndexBounds = new ScErrorCode("scecIndexBounds", 1);
  static scecInvalidInput = new ScErrorCode("scecInvalidInput", 2);
  static scecMissingValue = new ScErrorCode("scecMissingValue", 3);
  static scecExistingValue = new ScErrorCode("scecExistingValue", 4);
  static scecExceededLimit = new ScErrorCode("scecExceededLimit", 5);
  static scecInvalidAction = new ScErrorCode("scecInvalidAction", 6);
  static scecInternalError = new ScErrorCode("scecInternalError", 7);
  static scecUnexpectedType = new ScErrorCode("scecUnexpectedType", 8);
  static scecUnexpectedSize = new ScErrorCode("scecUnexpectedSize", 9);
  static schema = withMemberPrefix(
    enumType("ScErrorCode", {
      scecArithDomain: 0,
      scecIndexBounds: 1,
      scecInvalidInput: 2,
      scecMissingValue: 3,
      scecExistingValue: 4,
      scecExceededLimit: 5,
      scecInvalidAction: 6,
      scecInternalError: 7,
      scecUnexpectedType: 8,
      scecUnexpectedSize: 9
    }),
    "scec"
  );
  static fromValue(value) {
    return enumFromValue("ScErrorCode", ScErrorCode.schema, ScErrorCode, value);
  }
  static fromName(name) {
    return enumFromName("ScErrorCode", ScErrorCode, name);
  }
  static fromXdrObject(wire) {
    return ScErrorCode.fromValue(wire);
  }
}

export { ScErrorCode };
//# sourceMappingURL=sc-error-code.js.map
