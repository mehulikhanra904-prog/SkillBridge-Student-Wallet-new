import { union, case as _case, field, array, UNBOUNDED_MAX_LENGTH, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionResultCode } from './transaction-result-code.js';
import { InnerTransactionResultPair } from './inner-transaction-result-pair.js';
import { OperationResult } from './operation-result.js';

class TransactionResultResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TransactionResultResultBase) {
      throw new TypeError(
        "new xdr.TransactionResultResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionResultResult.txFeeBumpInnerSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TransactionResultResult",
    {
      switchOn: TransactionResultCode.schema,
      cases: [
        _case(
          "txFeeBumpInnerSuccess",
          1,
          field("innerResultPair", InnerTransactionResultPair.schema)
        ),
        _case(
          "txFeeBumpInnerFailed",
          -13,
          field("innerResultPair", InnerTransactionResultPair.schema)
        ),
        _case(
          "txSuccess",
          0,
          field("results", array(OperationResult.schema, UNBOUNDED_MAX_LENGTH))
        ),
        _case(
          "txFailed",
          -1,
          field("results", array(OperationResult.schema, UNBOUNDED_MAX_LENGTH))
        ),
        _case("txTooEarly", -2, _void()),
        _case("txTooLate", -3, _void()),
        _case("txMissingOperation", -4, _void()),
        _case("txBadSeq", -5, _void()),
        _case("txBadAuth", -6, _void()),
        _case("txInsufficientBalance", -7, _void()),
        _case("txNoAccount", -8, _void()),
        _case("txInsufficientFee", -9, _void()),
        _case("txBadAuthExtra", -10, _void()),
        _case("txInternalError", -11, _void()),
        _case("txNotSupported", -12, _void()),
        _case("txBadSponsorship", -14, _void()),
        _case("txBadMinSeqAgeOrGap", -15, _void()),
        _case("txMalformed", -16, _void()),
        _case("txSorobanInvalid", -17, _void()),
        _case("txFrozenKeyAccessed", -18, _void())
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
          InnerTransactionResultPair.fromXdrObject(wire.innerResultPair)
        );
      case -13:
        return new TransactionResultResultTxFeeBumpInnerFailed(
          InnerTransactionResultPair.fromXdrObject(wire.innerResultPair)
        );
      case 0:
        return new TransactionResultResultTxSuccess(
          wire.results.map((w) => OperationResult.fromXdrObject(w))
        );
      case -1:
        return new TransactionResultResultTxFailed(
          wire.results.map((w) => OperationResult.fromXdrObject(w))
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
    throw new XdrError(
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

export { TransactionResultResult, TransactionResultResultTxBadAuth, TransactionResultResultTxBadAuthExtra, TransactionResultResultTxBadMinSeqAgeOrGap, TransactionResultResultTxBadSeq, TransactionResultResultTxBadSponsorship, TransactionResultResultTxFailed, TransactionResultResultTxFeeBumpInnerFailed, TransactionResultResultTxFeeBumpInnerSuccess, TransactionResultResultTxFrozenKeyAccessed, TransactionResultResultTxInsufficientBalance, TransactionResultResultTxInsufficientFee, TransactionResultResultTxInternalError, TransactionResultResultTxMalformed, TransactionResultResultTxMissingOperation, TransactionResultResultTxNoAccount, TransactionResultResultTxNotSupported, TransactionResultResultTxSorobanInvalid, TransactionResultResultTxSuccess, TransactionResultResultTxTooEarly, TransactionResultResultTxTooLate };
//# sourceMappingURL=transaction-result-result.js.map
