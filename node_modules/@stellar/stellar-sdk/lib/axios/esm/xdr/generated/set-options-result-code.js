import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class SetOptionsResultCode extends EnumValue {
  static setOptionsSuccess = new SetOptionsResultCode(
    "setOptionsSuccess",
    0
  );
  static setOptionsLowReserve = new SetOptionsResultCode(
    "setOptionsLowReserve",
    -1
  );
  static setOptionsTooManySigners = new SetOptionsResultCode(
    "setOptionsTooManySigners",
    -2
  );
  static setOptionsBadFlags = new SetOptionsResultCode(
    "setOptionsBadFlags",
    -3
  );
  static setOptionsInvalidInflation = new SetOptionsResultCode(
    "setOptionsInvalidInflation",
    -4
  );
  static setOptionsCantChange = new SetOptionsResultCode(
    "setOptionsCantChange",
    -5
  );
  static setOptionsUnknownFlag = new SetOptionsResultCode(
    "setOptionsUnknownFlag",
    -6
  );
  static setOptionsThresholdOutOfRange = new SetOptionsResultCode(
    "setOptionsThresholdOutOfRange",
    -7
  );
  static setOptionsBadSigner = new SetOptionsResultCode(
    "setOptionsBadSigner",
    -8
  );
  static setOptionsInvalidHomeDomain = new SetOptionsResultCode(
    "setOptionsInvalidHomeDomain",
    -9
  );
  static setOptionsAuthRevocableRequired = new SetOptionsResultCode(
    "setOptionsAuthRevocableRequired",
    -10
  );
  static schema = withMemberPrefix(
    enumType("SetOptionsResultCode", {
      setOptionsSuccess: 0,
      setOptionsLowReserve: -1,
      setOptionsTooManySigners: -2,
      setOptionsBadFlags: -3,
      setOptionsInvalidInflation: -4,
      setOptionsCantChange: -5,
      setOptionsUnknownFlag: -6,
      setOptionsThresholdOutOfRange: -7,
      setOptionsBadSigner: -8,
      setOptionsInvalidHomeDomain: -9,
      setOptionsAuthRevocableRequired: -10
    }),
    "setOptions"
  );
  static fromValue(value) {
    return enumFromValue(
      "SetOptionsResultCode",
      SetOptionsResultCode.schema,
      SetOptionsResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("SetOptionsResultCode", SetOptionsResultCode, name);
  }
  static fromXdrObject(wire) {
    return SetOptionsResultCode.fromValue(wire);
  }
}

export { SetOptionsResultCode };
//# sourceMappingURL=set-options-result-code.js.map
