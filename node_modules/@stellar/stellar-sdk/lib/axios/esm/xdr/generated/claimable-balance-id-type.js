import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class ClaimableBalanceIdType extends EnumValue {
  static claimableBalanceIdTypeV0 = new ClaimableBalanceIdType(
    "claimableBalanceIdTypeV0",
    0
  );
  static schema = enumType("ClaimableBalanceIdType", {
    claimableBalanceIdTypeV0: 0
  });
  static fromValue(value) {
    return enumFromValue(
      "ClaimableBalanceIdType",
      ClaimableBalanceIdType.schema,
      ClaimableBalanceIdType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ClaimableBalanceIdType", ClaimableBalanceIdType, name);
  }
  static fromXdrObject(wire) {
    return ClaimableBalanceIdType.fromValue(wire);
  }
}

export { ClaimableBalanceIdType };
//# sourceMappingURL=claimable-balance-id-type.js.map
