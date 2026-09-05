import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ClaimClaimableBalanceResultCode extends EnumValue {
  static claimClaimableBalanceSuccess = new ClaimClaimableBalanceResultCode("claimClaimableBalanceSuccess", 0);
  static claimClaimableBalanceDoesNotExist = new ClaimClaimableBalanceResultCode(
    "claimClaimableBalanceDoesNotExist",
    -1
  );
  static claimClaimableBalanceCannotClaim = new ClaimClaimableBalanceResultCode("claimClaimableBalanceCannotClaim", -2);
  static claimClaimableBalanceLineFull = new ClaimClaimableBalanceResultCode("claimClaimableBalanceLineFull", -3);
  static claimClaimableBalanceNoTrust = new ClaimClaimableBalanceResultCode("claimClaimableBalanceNoTrust", -4);
  static claimClaimableBalanceNotAuthorized = new ClaimClaimableBalanceResultCode(
    "claimClaimableBalanceNotAuthorized",
    -5
  );
  static claimClaimableBalanceTrustlineFrozen = new ClaimClaimableBalanceResultCode(
    "claimClaimableBalanceTrustlineFrozen",
    -6
  );
  static schema = withMemberPrefix(
    enumType("ClaimClaimableBalanceResultCode", {
      claimClaimableBalanceSuccess: 0,
      claimClaimableBalanceDoesNotExist: -1,
      claimClaimableBalanceCannotClaim: -2,
      claimClaimableBalanceLineFull: -3,
      claimClaimableBalanceNoTrust: -4,
      claimClaimableBalanceNotAuthorized: -5,
      claimClaimableBalanceTrustlineFrozen: -6
    }),
    "claimClaimableBalance"
  );
  static fromValue(value) {
    return enumFromValue(
      "ClaimClaimableBalanceResultCode",
      ClaimClaimableBalanceResultCode.schema,
      ClaimClaimableBalanceResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "ClaimClaimableBalanceResultCode",
      ClaimClaimableBalanceResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return ClaimClaimableBalanceResultCode.fromValue(wire);
  }
}

export { ClaimClaimableBalanceResultCode };
//# sourceMappingURL=claim-claimable-balance-result-code.js.map
