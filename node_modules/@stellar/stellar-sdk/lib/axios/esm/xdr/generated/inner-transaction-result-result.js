import { union, case as _case, field, array, UNBOUNDED_MAX_LENGTH, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionResultCode } from './transaction-result-code.js';
import { OperationResult } from './operation-result.js';

class InnerTransactionResultResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === InnerTransactionResultResultBase) {
      throw new TypeError(
        "new xdr.InnerTransactionResultResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.InnerTransactionResultResult.txSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "InnerTransactionResultResult",
    {
      switchOn: TransactionResultCode.schema,
      cases: [
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
          wire.results.map((w) => OperationResult.fromXdrObject(w))
        );
      case -1:
        return new InnerTransactionResultResultTxFailed(
          wire.results.map((w) => OperationResult.fromXdrObject(w))
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
    throw new XdrError(
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

export { InnerTransactionResultResult, InnerTransactionResultResultTxBadAuth, InnerTransactionResultResultTxBadAuthExtra, InnerTransactionResultResultTxBadMinSeqAgeOrGap, InnerTransactionResultResultTxBadSeq, InnerTransactionResultResultTxBadSponsorship, InnerTransactionResultResultTxFailed, InnerTransactionResultResultTxFrozenKeyAccessed, InnerTransactionResultResultTxInsufficientBalance, InnerTransactionResultResultTxInsufficientFee, InnerTransactionResultResultTxInternalError, InnerTransactionResultResultTxMalformed, InnerTransactionResultResultTxMissingOperation, InnerTransactionResultResultTxNoAccount, InnerTransactionResultResultTxNotSupported, InnerTransactionResultResultTxSorobanInvalid, InnerTransactionResultResultTxSuccess, InnerTransactionResultResultTxTooEarly, InnerTransactionResultResultTxTooLate };
//# sourceMappingURL=inner-transaction-result-result.js.map
