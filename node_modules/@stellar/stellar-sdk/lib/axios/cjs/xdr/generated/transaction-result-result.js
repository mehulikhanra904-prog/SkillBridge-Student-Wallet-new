'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionResultCode = require('./transaction-result-code.js');
var innerTransactionResultPair = require('./inner-transaction-result-pair.js');
var operationResult = require('./operation-result.js');

class TransactionResultResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TransactionResultResultBase) {
      throw new TypeError(
        "new xdr.TransactionResultResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionResultResult.txFeeBumpInnerSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TransactionResultResult",
    {
      switchOn: transactionResultCode.TransactionResultCode.schema,
      cases: [
        jsXdr.case(
          "txFeeBumpInnerSuccess",
          1,
          jsXdr.field("innerResultPair", innerTransactionResultPair.InnerTransactionResultPair.schema)
        ),
        jsXdr.case(
          "txFeeBumpInnerFailed",
          -13,
          jsXdr.field("innerResultPair", innerTransactionResultPair.InnerTransactionResultPair.schema)
        ),
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
  static txFeeBumpInnerSuccess(innerResultPair) {
    return new TransactionResultResultTxFeeBumpInnerSuccess(innerResultPair);
  }
  static txFeeBumpInnerFailed(innerResultPair) {
    return new TransactionResultResultTxFeeBumpInnerFailed(innerResultPair);
  }
  static txSuccess(results) {
    return new TransactionResultResultTxSuccess(results);
  }
  static txFailed(results) {
    return new TransactionResultResultTxFailed(results);
  }
  static txTooEarly() {
    return new TransactionResultResultTxTooEarly();
  }
  static txTooLate() {
    return new TransactionResultResultTxTooLate();
  }
  static txMissingOperation() {
    return new TransactionResultResultTxMissingOperation();
  }
  static txBadSeq() {
    return new TransactionResultResultTxBadSeq();
  }
  static txBadAuth() {
    return new TransactionResultResultTxBadAuth();
  }
  static txInsufficientBalance() {
    return new TransactionResultResultTxInsufficientBalance();
  }
  static txNoAccount() {
    return new TransactionResultResultTxNoAccount();
  }
  static txInsufficientFee() {
    return new TransactionResultResultTxInsufficientFee();
  }
  static txBadAuthExtra() {
    return new TransactionResultResultTxBadAuthExtra();
  }
  static txInternalError() {
    return new TransactionResultResultTxInternalError();
  }
  static txNotSupported() {
    return new TransactionResultResultTxNotSupported();
  }
  static txBadSponsorship() {
    return new TransactionResultResultTxBadSponsorship();
  }
  static txBadMinSeqAgeOrGap() {
    return new TransactionResultResultTxBadMinSeqAgeOrGap();
  }
  static txMalformed() {
    return new TransactionResultResultTxMalformed();
  }
  static txSorobanInvalid() {
    return new TransactionResultResultTxSorobanInvalid();
  }
  static txFrozenKeyAccessed() {
    return new TransactionResultResultTxFrozenKeyAccessed();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 1:
        return new TransactionResultResultTxFeeBumpInnerSuccess(
          innerTransactionResultPair.InnerTransactionResultPair.fromXdrObject(wire.innerResultPair)
        );
      case -13:
        return new TransactionResultResultTxFeeBumpInnerFailed(
          innerTransactionResultPair.InnerTransactionResultPair.fromXdrObject(wire.innerResultPair)
        );
      case 0:
        return new TransactionResultResultTxSuccess(
          wire.results.map((w) => operationResult.OperationResult.fromXdrObject(w))
        );
      case -1:
        return new TransactionResultResultTxFailed(
          wire.results.map((w) => operationResult.OperationResult.fromXdrObject(w))
        );
      case -2:
        return new TransactionResultResultTxTooEarly();
      case -3:
        return new TransactionResultResultTxTooLate();
      case -4:
        return new TransactionResultResultTxMissingOperation();
      case -5:
        return new TransactionResultResultTxBadSeq();
      case -6:
        return new TransactionResultResultTxBadAuth();
      case -7:
        return new TransactionResultResultTxInsufficientBalance();
      case -8:
        return new TransactionResultResultTxNoAccount();
      case -9:
        return new TransactionResultResultTxInsufficientFee();
      case -10:
        return new TransactionResultResultTxBadAuthExtra();
      case -11:
        return new TransactionResultResultTxInternalError();
      case -12:
        return new TransactionResultResultTxNotSupported();
      case -14:
        return new TransactionResultResultTxBadSponsorship();
      case -15:
        return new TransactionResultResultTxBadMinSeqAgeOrGap();
      case -16:
        return new TransactionResultResultTxMalformed();
      case -17:
        return new TransactionResultResultTxSorobanInvalid();
      case -18:
        return new TransactionResultResultTxFrozenKeyAccessed();
    }
    throw new jsXdr.XdrError(
      `TransactionResultResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionResultResult variant.
   * Use this instead of `instanceof TransactionResultResult`: the exported `TransactionResultResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionResultResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionResultResultBase;
  }
}
class TransactionResultResultTxFeeBumpInnerSuccess extends TransactionResultResultBase {
  type = "txFeeBumpInnerSuccess";
  innerResultPair;
  constructor(innerResultPair) {
    super();
    this.innerResultPair = innerResultPair;
  }
  get value() {
    return this.innerResultPair;
  }
  toXdrObject() {
    return { code: 1, innerResultPair: this.innerResultPair.toXdrObject() };
  }
}
class TransactionResultResultTxFeeBumpInnerFailed extends TransactionResultResultBase {
  type = "txFeeBumpInnerFailed";
  innerResultPair;
  constructor(innerResultPair) {
    super();
    this.innerResultPair = innerResultPair;
  }
  get value() {
    return this.innerResultPair;
  }
  toXdrObject() {
    return { code: -13, innerResultPair: this.innerResultPair.toXdrObject() };
  }
}
class TransactionResultResultTxSuccess extends TransactionResultResultBase {
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
class TransactionResultResultTxFailed extends TransactionResultResultBase {
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
class TransactionResultResultTxTooEarly extends TransactionResultResultBase {
  type = "txTooEarly";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class TransactionResultResultTxTooLate extends TransactionResultResultBase {
  type = "txTooLate";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class TransactionResultResultTxMissingOperation extends TransactionResultResultBase {
  type = "txMissingOperation";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class TransactionResultResultTxBadSeq extends TransactionResultResultBase {
  type = "txBadSeq";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class TransactionResultResultTxBadAuth extends TransactionResultResultBase {
  type = "txBadAuth";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class TransactionResultResultTxInsufficientBalance extends TransactionResultResultBase {
  type = "txInsufficientBalance";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class TransactionResultResultTxNoAccount extends TransactionResultResultBase {
  type = "txNoAccount";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
class TransactionResultResultTxInsufficientFee extends TransactionResultResultBase {
  type = "txInsufficientFee";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -9 };
  }
}
class TransactionResultResultTxBadAuthExtra extends TransactionResultResultBase {
  type = "txBadAuthExtra";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -10 };
  }
}
class TransactionResultResultTxInternalError extends TransactionResultResultBase {
  type = "txInternalError";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -11 };
  }
}
class TransactionResultResultTxNotSupported extends TransactionResultResultBase {
  type = "txNotSupported";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -12 };
  }
}
class TransactionResultResultTxBadSponsorship extends TransactionResultResultBase {
  type = "txBadSponsorship";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -14 };
  }
}
class TransactionResultResultTxBadMinSeqAgeOrGap extends TransactionResultResultBase {
  type = "txBadMinSeqAgeOrGap";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -15 };
  }
}
class TransactionResultResultTxMalformed extends TransactionResultResultBase {
  type = "txMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -16 };
  }
}
class TransactionResultResultTxSorobanInvalid extends TransactionResultResultBase {
  type = "txSorobanInvalid";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -17 };
  }
}
class TransactionResultResultTxFrozenKeyAccessed extends TransactionResultResultBase {
  type = "txFrozenKeyAccessed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -18 };
  }
}
const TransactionResultResult = TransactionResultResultBase;

exports.TransactionResultResult = TransactionResultResult;
exports.TransactionResultResultTxBadAuth = TransactionResultResultTxBadAuth;
exports.TransactionResultResultTxBadAuthExtra = TransactionResultResultTxBadAuthExtra;
exports.TransactionResultResultTxBadMinSeqAgeOrGap = TransactionResultResultTxBadMinSeqAgeOrGap;
exports.TransactionResultResultTxBadSeq = TransactionResultResultTxBadSeq;
exports.TransactionResultResultTxBadSponsorship = TransactionResultResultTxBadSponsorship;
exports.TransactionResultResultTxFailed = TransactionResultResultTxFailed;
exports.TransactionResultResultTxFeeBumpInnerFailed = TransactionResultResultTxFeeBumpInnerFailed;
exports.TransactionResultResultTxFeeBumpInnerSuccess = TransactionResultResultTxFeeBumpInnerSuccess;
exports.TransactionResultResultTxFrozenKeyAccessed = TransactionResultResultTxFrozenKeyAccessed;
exports.TransactionResultResultTxInsufficientBalance = TransactionResultResultTxInsufficientBalance;
exports.TransactionResultResultTxInsufficientFee = TransactionResultResultTxInsufficientFee;
exports.TransactionResultResultTxInternalError = TransactionResultResultTxInternalError;
exports.TransactionResultResultTxMalformed = TransactionResultResultTxMalformed;
exports.TransactionResultResultTxMissingOperation = TransactionResultResultTxMissingOperation;
exports.TransactionResultResultTxNoAccount = TransactionResultResultTxNoAccount;
exports.TransactionResultResultTxNotSupported = TransactionResultResultTxNotSupported;
exports.TransactionResultResultTxSorobanInvalid = TransactionResultResultTxSorobanInvalid;
exports.TransactionResultResultTxSuccess = TransactionResultResultTxSuccess;
exports.TransactionResultResultTxTooEarly = TransactionResultResultTxTooEarly;
exports.TransactionResultResultTxTooLate = TransactionResultResultTxTooLate;
//# sourceMappingURL=transaction-result-result.js.map
