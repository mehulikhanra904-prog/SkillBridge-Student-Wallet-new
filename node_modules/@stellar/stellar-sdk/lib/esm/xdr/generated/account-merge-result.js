import { union, case as _case, field, int64, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AccountMergeResultCode } from './account-merge-result-code.js';

class AccountMergeResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === AccountMergeResultBase) {
      throw new TypeError(
        "new xdr.AccountMergeResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AccountMergeResult.accountMergeSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "AccountMergeResult",
    {
      switchOn: AccountMergeResultCode.schema,
      cases: [
        _case("accountMergeSuccess", 0, field("sourceAccountBalance", int64())),
        _case("accountMergeMalformed", -1, _void()),
        _case("accountMergeNoAccount", -2, _void()),
        _case("accountMergeImmutableSet", -3, _void()),
        _case("accountMergeHasSubEntries", -4, _void()),
        _case("accountMergeSeqnumTooFar", -5, _void()),
        _case("accountMergeDestFull", -6, _void()),
        _case("accountMergeIsSponsor", -7, _void())
      ],
      switchKey: "code"
    }
  );
  static accountMergeSuccess(sourceAccountBalance) {
    return new AccountMergeResultSuccess(sourceAccountBalance);
  }
  static accountMergeMalformed() {
    return new AccountMergeResultMalformed();
  }
  static accountMergeNoAccount() {
    return new AccountMergeResultNoAccount();
  }
  static accountMergeImmutableSet() {
    return new AccountMergeResultImmutableSet();
  }
  static accountMergeHasSubEntries() {
    return new AccountMergeResultHasSubEntries();
  }
  static accountMergeSeqnumTooFar() {
    return new AccountMergeResultSeqnumTooFar();
  }
  static accountMergeDestFull() {
    return new AccountMergeResultDestFull();
  }
  static accountMergeIsSponsor() {
    return new AccountMergeResultIsSponsor();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new AccountMergeResultSuccess(wire.sourceAccountBalance);
      case -1:
        return new AccountMergeResultMalformed();
      case -2:
        return new AccountMergeResultNoAccount();
      case -3:
        return new AccountMergeResultImmutableSet();
      case -4:
        return new AccountMergeResultHasSubEntries();
      case -5:
        return new AccountMergeResultSeqnumTooFar();
      case -6:
        return new AccountMergeResultDestFull();
      case -7:
        return new AccountMergeResultIsSponsor();
    }
    throw new XdrError(
      `AccountMergeResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AccountMergeResult variant.
   * Use this instead of `instanceof AccountMergeResult`: the exported `AccountMergeResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AccountMergeResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AccountMergeResultBase;
  }
}
class AccountMergeResultSuccess extends AccountMergeResultBase {
  type = "accountMergeSuccess";
  sourceAccountBalance;
  constructor(sourceAccountBalance) {
    super();
    this.sourceAccountBalance = sourceAccountBalance;
  }
  get value() {
    return this.sourceAccountBalance;
  }
  toXdrObject() {
    return { code: 0, sourceAccountBalance: this.sourceAccountBalance };
  }
}
class AccountMergeResultMalformed extends AccountMergeResultBase {
  type = "accountMergeMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class AccountMergeResultNoAccount extends AccountMergeResultBase {
  type = "accountMergeNoAccount";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class AccountMergeResultImmutableSet extends AccountMergeResultBase {
  type = "accountMergeImmutableSet";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class AccountMergeResultHasSubEntries extends AccountMergeResultBase {
  type = "accountMergeHasSubEntries";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class AccountMergeResultSeqnumTooFar extends AccountMergeResultBase {
  type = "accountMergeSeqnumTooFar";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class AccountMergeResultDestFull extends AccountMergeResultBase {
  type = "accountMergeDestFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class AccountMergeResultIsSponsor extends AccountMergeResultBase {
  type = "accountMergeIsSponsor";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
const AccountMergeResult = AccountMergeResultBase;

export { AccountMergeResult, AccountMergeResultDestFull, AccountMergeResultHasSubEntries, AccountMergeResultImmutableSet, AccountMergeResultIsSponsor, AccountMergeResultMalformed, AccountMergeResultNoAccount, AccountMergeResultSeqnumTooFar, AccountMergeResultSuccess };
//# sourceMappingURL=account-merge-result.js.map
