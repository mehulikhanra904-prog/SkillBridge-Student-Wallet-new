import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AllowTrustResultCode } from './allow-trust-result-code.js';

class AllowTrustResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === AllowTrustResultBase) {
      throw new TypeError(
        "new xdr.AllowTrustResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AllowTrustResult.allowTrustSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "AllowTrustResult",
    {
      switchOn: AllowTrustResultCode.schema,
      cases: [
        _case("allowTrustSuccess", 0, _void()),
        _case("allowTrustMalformed", -1, _void()),
        _case("allowTrustNoTrustLine", -2, _void()),
        _case("allowTrustTrustNotRequired", -3, _void()),
        _case("allowTrustCantRevoke", -4, _void()),
        _case("allowTrustSelfNotAllowed", -5, _void()),
        _case("allowTrustLowReserve", -6, _void())
      ],
      switchKey: "code"
    }
  );
  static allowTrustSuccess() {
    return new AllowTrustResultSuccess();
  }
  static allowTrustMalformed() {
    return new AllowTrustResultMalformed();
  }
  static allowTrustNoTrustLine() {
    return new AllowTrustResultNoTrustLine();
  }
  static allowTrustTrustNotRequired() {
    return new AllowTrustResultTrustNotRequired();
  }
  static allowTrustCantRevoke() {
    return new AllowTrustResultCantRevoke();
  }
  static allowTrustSelfNotAllowed() {
    return new AllowTrustResultSelfNotAllowed();
  }
  static allowTrustLowReserve() {
    return new AllowTrustResultLowReserve();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new AllowTrustResultSuccess();
      case -1:
        return new AllowTrustResultMalformed();
      case -2:
        return new AllowTrustResultNoTrustLine();
      case -3:
        return new AllowTrustResultTrustNotRequired();
      case -4:
        return new AllowTrustResultCantRevoke();
      case -5:
        return new AllowTrustResultSelfNotAllowed();
      case -6:
        return new AllowTrustResultLowReserve();
    }
    throw new XdrError(
      `AllowTrustResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AllowTrustResult variant.
   * Use this instead of `instanceof AllowTrustResult`: the exported `AllowTrustResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AllowTrustResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AllowTrustResultBase;
  }
}
class AllowTrustResultSuccess extends AllowTrustResultBase {
  type = "allowTrustSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class AllowTrustResultMalformed extends AllowTrustResultBase {
  type = "allowTrustMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class AllowTrustResultNoTrustLine extends AllowTrustResultBase {
  type = "allowTrustNoTrustLine";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class AllowTrustResultTrustNotRequired extends AllowTrustResultBase {
  type = "allowTrustTrustNotRequired";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class AllowTrustResultCantRevoke extends AllowTrustResultBase {
  type = "allowTrustCantRevoke";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class AllowTrustResultSelfNotAllowed extends AllowTrustResultBase {
  type = "allowTrustSelfNotAllowed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class AllowTrustResultLowReserve extends AllowTrustResultBase {
  type = "allowTrustLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
const AllowTrustResult = AllowTrustResultBase;

export { AllowTrustResult, AllowTrustResultCantRevoke, AllowTrustResultLowReserve, AllowTrustResultMalformed, AllowTrustResultNoTrustLine, AllowTrustResultSelfNotAllowed, AllowTrustResultSuccess, AllowTrustResultTrustNotRequired };
//# sourceMappingURL=allow-trust-result.js.map
