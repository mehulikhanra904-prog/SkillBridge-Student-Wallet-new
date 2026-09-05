import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class SetTrustLineFlagsResultCode extends EnumValue {
  static setTrustLineFlagsSuccess = new SetTrustLineFlagsResultCode(
    "setTrustLineFlagsSuccess",
    0
  );
  static setTrustLineFlagsMalformed = new SetTrustLineFlagsResultCode(
    "setTrustLineFlagsMalformed",
    -1
  );
  static setTrustLineFlagsNoTrustLine = new SetTrustLineFlagsResultCode("setTrustLineFlagsNoTrustLine", -2);
  static setTrustLineFlagsCantRevoke = new SetTrustLineFlagsResultCode(
    "setTrustLineFlagsCantRevoke",
    -3
  );
  static setTrustLineFlagsInvalidState = new SetTrustLineFlagsResultCode("setTrustLineFlagsInvalidState", -4);
  static setTrustLineFlagsLowReserve = new SetTrustLineFlagsResultCode(
    "setTrustLineFlagsLowReserve",
    -5
  );
  static schema = withMemberPrefix(
    enumType("SetTrustLineFlagsResultCode", {
      setTrustLineFlagsSuccess: 0,
      setTrustLineFlagsMalformed: -1,
      setTrustLineFlagsNoTrustLine: -2,
      setTrustLineFlagsCantRevoke: -3,
      setTrustLineFlagsInvalidState: -4,
      setTrustLineFlagsLowReserve: -5
    }),
    "setTrustLineFlags"
  );
  static fromValue(value) {
    return enumFromValue(
      "SetTrustLineFlagsResultCode",
      SetTrustLineFlagsResultCode.schema,
      SetTrustLineFlagsResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "SetTrustLineFlagsResultCode",
      SetTrustLineFlagsResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return SetTrustLineFlagsResultCode.fromValue(wire);
  }
}

export { SetTrustLineFlagsResultCode };
//# sourceMappingURL=set-trust-line-flags-result-code.js.map
