import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class RestoreFootprintResultCode extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("RestoreFootprintResultCode", {
      restoreFootprintSuccess: 0,
      restoreFootprintMalformed: -1,
      restoreFootprintResourceLimitExceeded: -2,
      restoreFootprintInsufficientRefundableFee: -3
    }),
    "restoreFootprint"
  );
  static fromValue(value) {
    return enumFromValue(
      "RestoreFootprintResultCode",
      RestoreFootprintResultCode.schema,
      RestoreFootprintResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "RestoreFootprintResultCode",
      RestoreFootprintResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return RestoreFootprintResultCode.fromValue(wire);
  }
}

export { RestoreFootprintResultCode };
//# sourceMappingURL=restore-footprint-result-code.js.map
