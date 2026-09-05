import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ExtendFootprintTtlResultCode extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("ExtendFootprintTtlResultCode", {
      extendFootprintTtlSuccess: 0,
      extendFootprintTtlMalformed: -1,
      extendFootprintTtlResourceLimitExceeded: -2,
      extendFootprintTtlInsufficientRefundableFee: -3
    }),
    "extendFootprintTtl"
  );
  static fromValue(value) {
    return enumFromValue(
      "ExtendFootprintTtlResultCode",
      ExtendFootprintTtlResultCode.schema,
      ExtendFootprintTtlResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "ExtendFootprintTtlResultCode",
      ExtendFootprintTtlResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return ExtendFootprintTtlResultCode.fromValue(wire);
  }
}

export { ExtendFootprintTtlResultCode };
//# sourceMappingURL=extend-footprint-ttl-result-code.js.map
