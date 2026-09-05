import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { OperationResultCode } from './operation-result-code.js';
import { OperationResultTr } from './operation-result-tr.js';

class OperationResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === OperationResultBase) {
      throw new TypeError(
        "new xdr.OperationResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.OperationResult.opInner(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "OperationResult",
    {
      switchOn: OperationResultCode.schema,
      cases: [
        _case("opInner", 0, field("tr", OperationResultTr.schema)),
        _case("opBadAuth", -1, _void()),
        _case("opNoAccount", -2, _void()),
        _case("opNotSupported", -3, _void()),
        _case("opTooManySubentries", -4, _void()),
        _case("opExceededWorkLimit", -5, _void()),
        _case("opTooManySponsoring", -6, _void())
      ],
      switchKey: "code"
    }
  );
  static opInner(tr) {
    return new OperationResultOpInner(tr);
  }
  static opBadAuth() {
    return new OperationResultOpBadAuth();
  }
  static opNoAccount() {
    return new OperationResultOpNoAccount();
  }
  static opNotSupported() {
    return new OperationResultOpNotSupported();
  }
  static opTooManySubentries() {
    return new OperationResultOpTooManySubentries();
  }
  static opExceededWorkLimit() {
    return new OperationResultOpExceededWorkLimit();
  }
  static opTooManySponsoring() {
    return new OperationResultOpTooManySponsoring();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new OperationResultOpInner(
          OperationResultTr.fromXdrObject(wire.tr)
        );
      case -1:
        return new OperationResultOpBadAuth();
      case -2:
        return new OperationResultOpNoAccount();
      case -3:
        return new OperationResultOpNotSupported();
      case -4:
        return new OperationResultOpTooManySubentries();
      case -5:
        return new OperationResultOpExceededWorkLimit();
      case -6:
        return new OperationResultOpTooManySponsoring();
    }
    throw new XdrError(
      `OperationResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete OperationResult variant.
   * Use this instead of `instanceof OperationResult`: the exported `OperationResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `OperationResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof OperationResultBase;
  }
}
class OperationResultOpInner extends OperationResultBase {
  type = "opInner";
  tr;
  constructor(tr) {
    super();
    this.tr = tr;
  }
  get value() {
    return this.tr;
  }
  toXdrObject() {
    return { code: 0, tr: this.tr.toXdrObject() };
  }
}
class OperationResultOpBadAuth extends OperationResultBase {
  type = "opBadAuth";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class OperationResultOpNoAccount extends OperationResultBase {
  type = "opNoAccount";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class OperationResultOpNotSupported extends OperationResultBase {
  type = "opNotSupported";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class OperationResultOpTooManySubentries extends OperationResultBase {
  type = "opTooManySubentries";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class OperationResultOpExceededWorkLimit extends OperationResultBase {
  type = "opExceededWorkLimit";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class OperationResultOpTooManySponsoring extends OperationResultBase {
  type = "opTooManySponsoring";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
const OperationResult = OperationResultBase;

export { OperationResult, OperationResultOpBadAuth, OperationResultOpExceededWorkLimit, OperationResultOpInner, OperationResultOpNoAccount, OperationResultOpNotSupported, OperationResultOpTooManySponsoring, OperationResultOpTooManySubentries };
//# sourceMappingURL=operation-result.js.map
