import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class InflationResultCode extends EnumValue {
  static inflationSuccess = new InflationResultCode(
    "inflationSuccess",
    0
  );
  static inflationNotTime = new InflationResultCode(
    "inflationNotTime",
    -1
  );
  static schema = withMemberPrefix(
    enumType("InflationResultCode", {
      inflationSuccess: 0,
      inflationNotTime: -1
    }),
    "inflation"
  );
  static fromValue(value) {
    return enumFromValue(
      "InflationResultCode",
      InflationResultCode.schema,
      InflationResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("InflationResultCode", InflationResultCode, name);
  }
  static fromXdrObject(wire) {
    return InflationResultCode.fromValue(wire);
  }
}

export { InflationResultCode };
//# sourceMappingURL=inflation-result-code.js.map
