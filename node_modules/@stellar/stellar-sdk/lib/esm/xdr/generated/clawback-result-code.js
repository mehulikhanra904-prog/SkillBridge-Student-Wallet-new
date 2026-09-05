import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ClawbackResultCode extends EnumValue {
  static clawbackSuccess = new ClawbackResultCode(
    "clawbackSuccess",
    0
  );
  static clawbackMalformed = new ClawbackResultCode(
    "clawbackMalformed",
    -1
  );
  static clawbackNotClawbackEnabled = new ClawbackResultCode(
    "clawbackNotClawbackEnabled",
    -2
  );
  static clawbackNoTrust = new ClawbackResultCode(
    "clawbackNoTrust",
    -3
  );
  static clawbackUnderfunded = new ClawbackResultCode(
    "clawbackUnderfunded",
    -4
  );
  static schema = withMemberPrefix(
    enumType("ClawbackResultCode", {
      clawbackSuccess: 0,
      clawbackMalformed: -1,
      clawbackNotClawbackEnabled: -2,
      clawbackNoTrust: -3,
      clawbackUnderfunded: -4
    }),
    "clawback"
  );
  static fromValue(value) {
    return enumFromValue(
      "ClawbackResultCode",
      ClawbackResultCode.schema,
      ClawbackResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ClawbackResultCode", ClawbackResultCode, name);
  }
  static fromXdrObject(wire) {
    return ClawbackResultCode.fromValue(wire);
  }
}

export { ClawbackResultCode };
//# sourceMappingURL=clawback-result-code.js.map
