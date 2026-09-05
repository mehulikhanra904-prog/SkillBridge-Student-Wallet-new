import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ExtendFootprintTtlResultCode } from './extend-footprint-ttl-result-code.js';

class ExtendFootprintTtlResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ExtendFootprintTtlResultBase) {
      throw new TypeError(
        "new xdr.ExtendFootprintTtlResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ExtendFootprintTtlResult.extendFootprintTtlSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ExtendFootprintTtlResult",
    {
      switchOn: ExtendFootprintTtlResultCode.schema,
      cases: [
        _case("extendFootprintTtlSuccess", 0, _void()),
        _case("extendFootprintTtlMalformed", -1, _void()),
        _case("extendFootprintTtlResourceLimitExceeded", -2, _void()),
        _case("extendFootprintTtlInsufficientRefundableFee", -3, _void())
      ],
      switchKey: "code"
    }
  );
  static extendFootprintTtlSuccess() {
    return new ExtendFootprintTtlResultSuccess();
  }
  static extendFootprintTtlMalformed() {
    return new ExtendFootprintTtlResultMalformed();
  }
  static extendFootprintTtlResourceLimitExceeded() {
    return new ExtendFootprintTtlResultResourceLimitExceeded();
  }
  static extendFootprintTtlInsufficientRefundableFee() {
    return new ExtendFootprintTtlResultInsufficientRefundableFee();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ExtendFootprintTtlResultSuccess();
      case -1:
        return new ExtendFootprintTtlResultMalformed();
      case -2:
        return new ExtendFootprintTtlResultResourceLimitExceeded();
      case -3:
        return new ExtendFootprintTtlResultInsufficientRefundableFee();
    }
    throw new XdrError(
      `ExtendFootprintTtlResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ExtendFootprintTtlResult variant.
   * Use this instead of `instanceof ExtendFootprintTtlResult`: the exported `ExtendFootprintTtlResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ExtendFootprintTtlResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ExtendFootprintTtlResultBase;
  }
}
class ExtendFootprintTtlResultSuccess extends ExtendFootprintTtlResultBase {
  type = "extendFootprintTtlSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class ExtendFootprintTtlResultMalformed extends ExtendFootprintTtlResultBase {
  type = "extendFootprintTtlMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ExtendFootprintTtlResultResourceLimitExceeded extends ExtendFootprintTtlResultBase {
  type = "extendFootprintTtlResourceLimitExceeded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ExtendFootprintTtlResultInsufficientRefundableFee extends ExtendFootprintTtlResultBase {
  type = "extendFootprintTtlInsufficientRefundableFee";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
const ExtendFootprintTtlResult = ExtendFootprintTtlResultBase;

export { ExtendFootprintTtlResult, ExtendFootprintTtlResultInsufficientRefundableFee, ExtendFootprintTtlResultMalformed, ExtendFootprintTtlResultResourceLimitExceeded, ExtendFootprintTtlResultSuccess };
//# sourceMappingURL=extend-footprint-ttl-result.js.map
