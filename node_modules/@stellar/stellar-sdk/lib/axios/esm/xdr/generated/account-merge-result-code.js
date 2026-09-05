import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class AccountMergeResultCode extends EnumValue {
  static accountMergeSuccess = new AccountMergeResultCode(
    "accountMergeSuccess",
    0
  );
  static accountMergeMalformed = new AccountMergeResultCode(
    "accountMergeMalformed",
    -1
  );
  static accountMergeNoAccount = new AccountMergeResultCode(
    "accountMergeNoAccount",
    -2
  );
  static accountMergeImmutableSet = new AccountMergeResultCode(
    "accountMergeImmutableSet",
    -3
  );
  static accountMergeHasSubEntries = new AccountMergeResultCode(
    "accountMergeHasSubEntries",
    -4
  );
  static accountMergeSeqnumTooFar = new AccountMergeResultCode(
    "accountMergeSeqnumTooFar",
    -5
  );
  static accountMergeDestFull = new AccountMergeResultCode(
    "accountMergeDestFull",
    -6
  );
  static accountMergeIsSponsor = new AccountMergeResultCode(
    "accountMergeIsSponsor",
    -7
  );
  static schema = withMemberPrefix(
    enumType("AccountMergeResultCode", {
      accountMergeSuccess: 0,
      accountMergeMalformed: -1,
      accountMergeNoAccount: -2,
      accountMergeImmutableSet: -3,
      accountMergeHasSubEntries: -4,
      accountMergeSeqnumTooFar: -5,
      accountMergeDestFull: -6,
      accountMergeIsSponsor: -7
    }),
    "accountMerge"
  );
  static fromValue(value) {
    return enumFromValue(
      "AccountMergeResultCode",
      AccountMergeResultCode.schema,
      AccountMergeResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("AccountMergeResultCode", AccountMergeResultCode, name);
  }
  static fromXdrObject(wire) {
    return AccountMergeResultCode.fromValue(wire);
  }
}

export { AccountMergeResultCode };
//# sourceMappingURL=account-merge-result-code.js.map
