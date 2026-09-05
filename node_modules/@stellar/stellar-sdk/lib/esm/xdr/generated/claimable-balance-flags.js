import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class ClaimableBalanceFlags extends EnumValue {
  static claimableBalanceClawbackEnabledFlag = new ClaimableBalanceFlags("claimableBalanceClawbackEnabledFlag", 1);
  static schema = enumType("ClaimableBalanceFlags", {
    claimableBalanceClawbackEnabledFlag: 1
  });
  static fromValue(value) {
    return enumFromValue(
      "ClaimableBalanceFlags",
      ClaimableBalanceFlags.schema,
      ClaimableBalanceFlags,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ClaimableBalanceFlags", ClaimableBalanceFlags, name);
  }
  static fromXdrObject(wire) {
    return ClaimableBalanceFlags.fromValue(wire);
  }
}

export { ClaimableBalanceFlags };
//# sourceMappingURL=claimable-balance-flags.js.map
