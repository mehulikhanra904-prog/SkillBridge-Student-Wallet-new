import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ClawbackClaimableBalanceResultCode extends EnumValue {
  static clawbackClaimableBalanceSuccess = new ClawbackClaimableBalanceResultCode(
    "clawbackClaimableBalanceSuccess",
    0
  );
  static clawbackClaimableBalanceDoesNotExist = new ClawbackClaimableBalanceResultCode(
    "clawbackClaimableBalanceDoesNotExist",
    -1
  );
  static clawbackClaimableBalanceNotIssuer = new ClawbackClaimableBalanceResultCode(
    "clawbackClaimableBalanceNotIssuer",
    -2
  );
  static clawbackClaimableBalanceNotClawbackEnabled = new ClawbackClaimableBalanceResultCode(
    "clawbackClaimableBalanceNotClawbackEnabled",
    -3
  );
  static schema = withMemberPrefix(
    enumType("ClawbackClaimableBalanceResultCode", {
      clawbackClaimableBalanceSuccess: 0,
      clawbackClaimableBalanceDoesNotExist: -1,
      clawbackClaimableBalanceNotIssuer: -2,
      clawbackClaimableBalanceNotClawbackEnabled: -3
    }),
    "clawbackClaimableBalance"
  );
  static fromValue(value) {
    return enumFromValue(
      "ClawbackClaimableBalanceResultCode",
      ClawbackClaimableBalanceResultCode.schema,
      ClawbackClaimableBalanceResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "ClawbackClaimableBalanceResultCode",
      ClawbackClaimableBalanceResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return ClawbackClaimableBalanceResultCode.fromValue(wire);
  }
}

export { ClawbackClaimableBalanceResultCode };
//# sourceMappingURL=clawback-claimable-balance-result-code.js.map
