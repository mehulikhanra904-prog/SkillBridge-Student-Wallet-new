import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ChangeTrustResultCode extends EnumValue {
  static changeTrustSuccess = new ChangeTrustResultCode(
    "changeTrustSuccess",
    0
  );
  static changeTrustMalformed = new ChangeTrustResultCode(
    "changeTrustMalformed",
    -1
  );
  static changeTrustNoIssuer = new ChangeTrustResultCode(
    "changeTrustNoIssuer",
    -2
  );
  static changeTrustInvalidLimit = new ChangeTrustResultCode(
    "changeTrustInvalidLimit",
    -3
  );
  static changeTrustLowReserve = new ChangeTrustResultCode(
    "changeTrustLowReserve",
    -4
  );
  static changeTrustSelfNotAllowed = new ChangeTrustResultCode(
    "changeTrustSelfNotAllowed",
    -5
  );
  static changeTrustTrustLineMissing = new ChangeTrustResultCode(
    "changeTrustTrustLineMissing",
    -6
  );
  static changeTrustCannotDelete = new ChangeTrustResultCode(
    "changeTrustCannotDelete",
    -7
  );
  static changeTrustNotAuthMaintainLiabilities = new ChangeTrustResultCode("changeTrustNotAuthMaintainLiabilities", -8);
  static schema = withMemberPrefix(
    enumType("ChangeTrustResultCode", {
      changeTrustSuccess: 0,
      changeTrustMalformed: -1,
      changeTrustNoIssuer: -2,
      changeTrustInvalidLimit: -3,
      changeTrustLowReserve: -4,
      changeTrustSelfNotAllowed: -5,
      changeTrustTrustLineMissing: -6,
      changeTrustCannotDelete: -7,
      changeTrustNotAuthMaintainLiabilities: -8
    }),
    "changeTrust"
  );
  static fromValue(value) {
    return enumFromValue(
      "ChangeTrustResultCode",
      ChangeTrustResultCode.schema,
      ChangeTrustResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ChangeTrustResultCode", ChangeTrustResultCode, name);
  }
  static fromXdrObject(wire) {
    return ChangeTrustResultCode.fromValue(wire);
  }
}

export { ChangeTrustResultCode };
//# sourceMappingURL=change-trust-result-code.js.map
