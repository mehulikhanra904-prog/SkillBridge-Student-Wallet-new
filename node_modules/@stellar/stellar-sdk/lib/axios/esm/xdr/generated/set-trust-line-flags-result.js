import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SetTrustLineFlagsResultCode } from './set-trust-line-flags-result-code.js';

class SetTrustLineFlagsResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === SetTrustLineFlagsResultBase) {
      throw new TypeError(
        "new xdr.SetTrustLineFlagsResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SetTrustLineFlagsResult.setTrustLineFlagsSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "SetTrustLineFlagsResult",
    {
      switchOn: SetTrustLineFlagsResultCode.schema,
      cases: [
        _case("setTrustLineFlagsSuccess", 0, _void()),
        _case("setTrustLineFlagsMalformed", -1, _void()),
        _case("setTrustLineFlagsNoTrustLine", -2, _void()),
        _case("setTrustLineFlagsCantRevoke", -3, _void()),
        _case("setTrustLineFlagsInvalidState", -4, _void()),
        _case("setTrustLineFlagsLowReserve", -5, _void())
      ],
      switchKey: "code"
    }
  );
  static setTrustLineFlagsSuccess() {
    return new SetTrustLineFlagsResultSuccess();
  }
  static setTrustLineFlagsMalformed() {
    return new SetTrustLineFlagsResultMalformed();
  }
  static setTrustLineFlagsNoTrustLine() {
    return new SetTrustLineFlagsResultNoTrustLine();
  }
  static setTrustLineFlagsCantRevoke() {
    return new SetTrustLineFlagsResultCantRevoke();
  }
  static setTrustLineFlagsInvalidState() {
    return new SetTrustLineFlagsResultInvalidState();
  }
  static setTrustLineFlagsLowReserve() {
    return new SetTrustLineFlagsResultLowReserve();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new SetTrustLineFlagsResultSuccess();
      case -1:
        return new SetTrustLineFlagsResultMalformed();
      case -2:
        return new SetTrustLineFlagsResultNoTrustLine();
      case -3:
        return new SetTrustLineFlagsResultCantRevoke();
      case -4:
        return new SetTrustLineFlagsResultInvalidState();
      case -5:
        return new SetTrustLineFlagsResultLowReserve();
    }
    throw new XdrError(
      `SetTrustLineFlagsResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SetTrustLineFlagsResult variant.
   * Use this instead of `instanceof SetTrustLineFlagsResult`: the exported `SetTrustLineFlagsResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SetTrustLineFlagsResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SetTrustLineFlagsResultBase;
  }
}
class SetTrustLineFlagsResultSuccess extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class SetTrustLineFlagsResultMalformed extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class SetTrustLineFlagsResultNoTrustLine extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsNoTrustLine";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class SetTrustLineFlagsResultCantRevoke extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsCantRevoke";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class SetTrustLineFlagsResultInvalidState extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsInvalidState";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class SetTrustLineFlagsResultLowReserve extends SetTrustLineFlagsResultBase {
  type = "setTrustLineFlagsLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
const SetTrustLineFlagsResult = SetTrustLineFlagsResultBase;

export { SetTrustLineFlagsResult, SetTrustLineFlagsResultCantRevoke, SetTrustLineFlagsResultInvalidState, SetTrustLineFlagsResultLowReserve, SetTrustLineFlagsResultMalformed, SetTrustLineFlagsResultNoTrustLine, SetTrustLineFlagsResultSuccess };
//# sourceMappingURL=set-trust-line-flags-result.js.map
