'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionResultCode = require('./transaction-result-code.js');
var operationResult = require('./operation-result.js');

class InnerTransactionResultResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === InnerTransactionResultResultBase) {
      throw new TypeError(
        "new xdr.InnerTransactionResultResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.InnerTransactionResultResult.txSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "InnerTransactionResultResult",
    {
      switchOn: transactionResultCode.TransactionResultCode.schema,
      cases: [
        jsXdr.case(
          "txSuccess",
          0,
          jsXdr.field("results", jsXdr.array(operationResult.OperationResult.schema, jsXdr.UNBOUNDED_MAX_LENGTH))
        ),
        jsXdr.case(
          "txFailed",
          -1,
          jsXdr.field("results", jsXdr.array(operationResult.OperationResult.schema, jsXdr.UNBOUNDED_MAX_LENGTH))
        ),
        jsXdr.case("txTooEarly", -2, jsXdr.void()),
        jsXdr.case("txTooLate", -3, jsXdr.void()),
        jsXdr.case("txMissingOperation", -4, jsXdr.void()),
        jsXdr.case("txBadSeq", -5, jsXdr.void()),
        jsXdr.case("txBadAuth", -6, jsXdr.void()),
        jsXdr.case("txInsufficientBalance", -7, jsXdr.void()),
        jsXdr.case("txNoAccount", -8, jsXdr.void()),
        jsXdr.case("txInsufficientFee", -9, jsXdr.void()),
        jsXdr.case("txBadAuthExtra", -10, jsXdr.void()),
        jsXdr.case("txInternalError", -11, jsXdr.void()),
        jsXdr.case("txNotSupported", -12, jsXdr.void()),
        jsXdr.case("txBadSponsorship", -14, jsXdr.void()),
        jsXdr.case("txBadMinSeqAgeOrGap", -15, jsXdr.void()),
        jsXdr.case("txMalformed", -16, jsXdr.void()),
        jsXdr.case("txSorobanInvalid", -17, jsXdr.void()),
        jsXdr.case("txFrozenKeyAccessed", -18, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static txSuccess(results) {
    return new InnerTransactionResultResultTxSuccess(results);
  }
  static txFailed(results) {
    return new InnerTransactionResultResultTxFailed(results);
  }
  static txTooEarly() {
    return new InnerTransactionResultResultTxTooEarly();
  }
  static txTooLate() {
    return new InnerTransactionResultResultTxTooLate();
  }
  static txMissingOperation() {
    return new InnerTransactionResultResultTxMissingOperation();
  }
  static txBadSeq() {
    return new InnerTransactionResultResultTxBadSeq();
  }
  static txBadAuth() {
    return new InnerTransactionResultResultTxBadAuth();
  }
  static txInsufficientBalance() {
    return new InnerTransactionResultResultTxInsufficientBalance();
  }
  static txNoAccount() {
    return new InnerTransactionResultResultTxNoAccount();
  }
  static txInsufficientFee() {
    return new InnerTransactionResultResultTxInsufficientFee();
  }
  static txBadAuthExtra() {
    return new InnerTransactionResultResultTxBadAuthExtra();
  }
  static txInternalError() {
    return new InnerTransactionResultResultTxInternalError();
  }
  static txNotSupported() {
    return new InnerTransactionResultResultTxNotSupported();
  }
  static txBadSponsorship() {
    return new InnerTransactionResultResultTxBadSponsorship();
  }
  static txBadMinSeqAgeOrGap() {
    return new InnerTransactionResultResultTxBadMinSeqAgeOrGap();
  }
  static txMalformed() {
    return new InnerTransactionResultResultTxMalformed();
  }
  static txSorobanInvalid() {
    return new InnerTransactionResultResultTxSorobanInvalid();
  }
  static txFrozenKeyAccessed() {
    return new InnerTransactionResultResultTxFrozenKeyAccessed();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new InnerTransactionResultResultTxSuccess(
          wire.results.map((w) => operationResult.OperationResult.fromXdrObject(w))
        );
      case -1:
        return new InnerTransactionResultResultTxFailed(
          wire.results.map((w) => operationResult.OperationResult.fromXdrObject(w))
        );
      case -2:
        return new InnerTransactionResultResultTxTooEarly();
      case -3:
        return new InnerTransactionResultResultTxTooLate();
      case -4:
        return new InnerTransactionResultResultTxMissingOperation();
      case -5:
        return new InnerTransactionResultResultTxBadSeq();
      case -6:
        return new InnerTransactionResultResultTxBadAuth();
      case -7:
        return new InnerTransactionResultResultTxInsufficientBalance();
      case -8:
        return new InnerTransactionResultResultTxNoAccount();
      case -9:
        return new InnerTransactionResultResultTxInsufficientFee();
      case -10:
        return new InnerTransactionResultResultTxBadAuthExtra();
      case -11:
        return new InnerTransactionResultResultTxInternalError();
      case -12:
        return new InnerTransactionResultResultTxNotSupported();
      case -14:
        return new InnerTransactionResultResultTxBadSponsorship();
      case -15:
        return new InnerTransactionResultResultTxBadMinSeqAgeOrGap();
      case -16:
        return new InnerTransactionResultResultTxMalformed();
      case -17:
        return new InnerTransactionResultResultTxSorobanInvalid();
      case -18:
        return new InnerTransactionResultResultTxFrozenKeyAccessed();
    }
    throw new jsXdr.XdrError(
      `InnerTransactionResultResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete InnerTransactionResultResult variant.
   * Use this instead of `instanceof InnerTransactionResultResult`: the exported `InnerTransactionResultResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `InnerTransactionResultResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof InnerTransactionResultResultBase;
  }
}
class InnerTransactionResultResultTxSuccess extends InnerTransactionResultResultBase {
  type = "txSuccess";
  results;
  constructor(results) {
    super();
    this.results = results;
  }
  get value() {
    return this.results;
  }
  toXdrObject() {
    return { code: 0, results: this.results.map((v) => v.toXdrObject()) };
  }
}
class InnerTransactionResultResultTxFailed extends InnerTransactionResultResultBase {
  type = "txFailed";
  results;
  constructor(results) {
    super();
    this.results = results;
  }
  get value() {
    return this.results;
  }
  toXdrObject() {
    return { code: -1, results: this.results.map((v) => v.toXdrObject()) };
  }
}
class InnerTransactionResultResultTxTooEarly extends InnerTransactionResultResultBase {
  type = "txTooEarly";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class InnerTransactionResultResultTxTooLate extends InnerTransactionResultResultBase {
  type = "txTooLate";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class InnerTransactionResultResultTxMissingOperation extends InnerTransactionResultResultBase {
  type = "txMissingOperation";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class InnerTransactionResultResultTxBadSeq extends InnerTransactionResultResultBase {
  type = "txBadSeq";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class InnerTransactionResultResultTxBadAuth extends InnerTransactionResultResultBase {
  type = "txBadAuth";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class InnerTransactionResultResultTxInsufficientBalance extends InnerTransactionResultResultBase {
  type = "txInsufficientBalance";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class InnerTransactionResultResultTxNoAccount extends InnerTransactionResultResultBase {
  type = "txNoAccount";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
class InnerTransactionResultResultTxInsufficientFee extends InnerTransactionResultResultBase {
  type = "txInsufficientFee";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -9 };
  }
}
class InnerTransactionResultResultTxBadAuthExtra extends InnerTransactionResultResultBase {
  type = "txBadAuthExtra";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -10 };
  }
}
class InnerTransactionResultResultTxInternalError extends InnerTransactionResultResultBase {
  type = "txInternalError";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -11 };
  }
}
class InnerTransactionResultResultTxNotSupported extends InnerTransactionResultResultBase {
  type = "txNotSupported";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -12 };
  }
}
class InnerTransactionResultResultTxBadSponsorship extends InnerTransactionResultResultBase {
  type = "txBadSponsorship";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -14 };
  }
}
class InnerTransactionResultResultTxBadMinSeqAgeOrGap extends InnerTransactionResultResultBase {
  type = "txBadMinSeqAgeOrGap";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -15 };
  }
}
class InnerTransactionResultResultTxMalformed extends InnerTransactionResultResultBase {
  type = "txMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -16 };
  }
}
class InnerTransactionResultResultTxSorobanInvalid extends InnerTransactionResultResultBase {
  type = "txSorobanInvalid";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -17 };
  }
}
class InnerTransactionResultResultTxFrozenKeyAccessed extends InnerTransactionResultResultBase {
  type = "txFrozenKeyAccessed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -18 };
  }
}
const InnerTransactionResultResult = InnerTransactionResultResultBase;

exports.InnerTransactionResultResult = InnerTransactionResultResult;
exports.InnerTransactionResultResultTxBadAuth = InnerTransactionResultResultTxBadAuth;
exports.InnerTransactionResultResultTxBadAuthExtra = InnerTransactionResultResultTxBadAuthExtra;
exports.InnerTransactionResultResultTxBadMinSeqAgeOrGap = InnerTransactionResultResultTxBadMinSeqAgeOrGap;
exports.InnerTransactionResultResultTxBadSeq = InnerTransactionResultResultTxBadSeq;
exports.InnerTransactionResultResultTxBadSponsorship = InnerTransactionResultResultTxBadSponsorship;
exports.InnerTransactionResultResultTxFailed = InnerTransactionResultResultTxFailed;
exports.InnerTransactionResultResultTxFrozenKeyAccessed = InnerTransactionResultResultTxFrozenKeyAccessed;
exports.InnerTransactionResultResultTxInsufficientBalance = InnerTransactionResultResultTxInsufficientBalance;
exports.InnerTransactionResultResultTxInsufficientFee = InnerTransactionResultResultTxInsufficientFee;
exports.InnerTransactionResultResultTxInternalError = InnerTransactionResultResultTxInternalError;
exports.InnerTransactionResultResultTxMalformed = InnerTransactionResultResultTxMalformed;
exports.InnerTransactionResultResultTxMissingOperation = InnerTransactionResultResultTxMissingOperation;
exports.InnerTransactionResultResultTxNoAccount = InnerTransactionResultResultTxNoAccount;
exports.InnerTransactionResultResultTxNotSupported = InnerTransactionResultResultTxNotSupported;
exports.InnerTransactionResultResultTxSorobanInvalid = InnerTransactionResultResultTxSorobanInvalid;
exports.InnerTransactionResultResultTxSuccess = InnerTransactionResultResultTxSuccess;
exports.InnerTransactionResultResultTxTooEarly = InnerTransactionResultResultTxTooEarly;
exports.InnerTransactionResultResultTxTooLate = InnerTransactionResultResultTxTooLate;
//# sourceMappingURL=inner-transaction-result-result.js.map
