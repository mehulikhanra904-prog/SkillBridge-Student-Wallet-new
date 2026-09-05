import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { RestoreFootprintResultCode } from './restore-footprint-result-code.js';

class RestoreFootprintResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === RestoreFootprintResultBase) {
      throw new TypeError(
        "new xdr.RestoreFootprintResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.RestoreFootprintResult.restoreFootprintSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "RestoreFootprintResult",
    {
      switchOn: RestoreFootprintResultCode.schema,
      cases: [
        _case("restoreFootprintSuccess", 0, _void()),
        _case("restoreFootprintMalformed", -1, _void()),
        _case("restoreFootprintResourceLimitExceeded", -2, _void()),
        _case("restoreFootprintInsufficientRefundableFee", -3, _void())
      ],
      switchKey: "code"
    }
  );
  static restoreFootprintSuccess() {
    return new RestoreFootprintResultSuccess();
  }
  static restoreFootprintMalformed() {
    return new RestoreFootprintResultMalformed();
  }
  static restoreFootprintResourceLimitExceeded() {
    return new RestoreFootprintResultResourceLimitExceeded();
  }
  static restoreFootprintInsufficientRefundableFee() {
    return new RestoreFootprintResultInsufficientRefundableFee();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new RestoreFootprintResultSuccess();
      case -1:
        return new RestoreFootprintResultMalformed();
      case -2:
        return new RestoreFootprintResultResourceLimitExceeded();
      case -3:
        return new RestoreFootprintResultInsufficientRefundableFee();
    }
    throw new XdrError(
      `RestoreFootprintResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete RestoreFootprintResult variant.
   * Use this instead of `instanceof RestoreFootprintResult`: the exported `RestoreFootprintResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `RestoreFootprintResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof RestoreFootprintResultBase;
  }
}
class RestoreFootprintResultSuccess extends RestoreFootprintResultBase {
  type = "restoreFootprintSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class RestoreFootprintResultMalformed extends RestoreFootprintResultBase {
  type = "restoreFootprintMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class RestoreFootprintResultResourceLimitExceeded extends RestoreFootprintResultBase {
  type = "restoreFootprintResourceLimitExceeded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class RestoreFootprintResultInsufficientRefundableFee extends RestoreFootprintResultBase {
  type = "restoreFootprintInsufficientRefundableFee";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
const RestoreFootprintResult = RestoreFootprintResultBase;

export { RestoreFootprintResult, RestoreFootprintResultInsufficientRefundableFee, RestoreFootprintResultMalformed, RestoreFootprintResultResourceLimitExceeded, RestoreFootprintResultSuccess };
//# sourceMappingURL=restore-footprint-result.js.map
