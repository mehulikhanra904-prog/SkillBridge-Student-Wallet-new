'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var accountMergeResultCode = require('./account-merge-result-code.js');

class AccountMergeResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === AccountMergeResultBase) {
      throw new TypeError(
        "new xdr.AccountMergeResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AccountMergeResult.accountMergeSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "AccountMergeResult",
    {
      switchOn: accountMergeResultCode.AccountMergeResultCode.schema,
      cases: [
        jsXdr.case("accountMergeSuccess", 0, jsXdr.field("sourceAccountBalance", jsXdr.int64())),
        jsXdr.case("accountMergeMalformed", -1, jsXdr.void()),
        jsXdr.case("accountMergeNoAccount", -2, jsXdr.void()),
        jsXdr.case("accountMergeImmutableSet", -3, jsXdr.void()),
        jsXdr.case("accountMergeHasSubEntries", -4, jsXdr.void()),
        jsXdr.case("accountMergeSeqnumTooFar", -5, jsXdr.void()),
        jsXdr.case("accountMergeDestFull", -6, jsXdr.void()),
        jsXdr.case("accountMergeIsSponsor", -7, jsXdr.void())
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
    throw new jsXdr.XdrError(
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

exports.AccountMergeResult = AccountMergeResult;
exports.AccountMergeResultDestFull = AccountMergeResultDestFull;
exports.AccountMergeResultHasSubEntries = AccountMergeResultHasSubEntries;
exports.AccountMergeResultImmutableSet = AccountMergeResultImmutableSet;
exports.AccountMergeResultIsSponsor = AccountMergeResultIsSponsor;
exports.AccountMergeResultMalformed = AccountMergeResultMalformed;
exports.AccountMergeResultNoAccount = AccountMergeResultNoAccount;
exports.AccountMergeResultSeqnumTooFar = AccountMergeResultSeqnumTooFar;
exports.AccountMergeResultSuccess = AccountMergeResultSuccess;
//# sourceMappingURL=account-merge-result.js.map
