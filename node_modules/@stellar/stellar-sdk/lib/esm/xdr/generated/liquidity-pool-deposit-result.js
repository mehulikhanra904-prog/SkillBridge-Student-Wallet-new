import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LiquidityPoolDepositResultCode } from './liquidity-pool-deposit-result-code.js';

class LiquidityPoolDepositResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LiquidityPoolDepositResultBase) {
      throw new TypeError(
        "new xdr.LiquidityPoolDepositResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LiquidityPoolDepositResult.liquidityPoolDepositSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LiquidityPoolDepositResult",
    {
      switchOn: LiquidityPoolDepositResultCode.schema,
      cases: [
        _case("liquidityPoolDepositSuccess", 0, _void()),
        _case("liquidityPoolDepositMalformed", -1, _void()),
        _case("liquidityPoolDepositNoTrust", -2, _void()),
        _case("liquidityPoolDepositNotAuthorized", -3, _void()),
        _case("liquidityPoolDepositUnderfunded", -4, _void()),
        _case("liquidityPoolDepositLineFull", -5, _void()),
        _case("liquidityPoolDepositBadPrice", -6, _void()),
        _case("liquidityPoolDepositPoolFull", -7, _void()),
        _case("liquidityPoolDepositTrustlineFrozen", -8, _void())
      ],
      switchKey: "code"
    }
  );
  static liquidityPoolDepositSuccess() {
    return new LiquidityPoolDepositResultSuccess();
  }
  static liquidityPoolDepositMalformed() {
    return new LiquidityPoolDepositResultMalformed();
  }
  static liquidityPoolDepositNoTrust() {
    return new LiquidityPoolDepositResultNoTrust();
  }
  static liquidityPoolDepositNotAuthorized() {
    return new LiquidityPoolDepositResultNotAuthorized();
  }
  static liquidityPoolDepositUnderfunded() {
    return new LiquidityPoolDepositResultUnderfunded();
  }
  static liquidityPoolDepositLineFull() {
    return new LiquidityPoolDepositResultLineFull();
  }
  static liquidityPoolDepositBadPrice() {
    return new LiquidityPoolDepositResultBadPrice();
  }
  static liquidityPoolDepositPoolFull() {
    return new LiquidityPoolDepositResultPoolFull();
  }
  static liquidityPoolDepositTrustlineFrozen() {
    return new LiquidityPoolDepositResultTrustlineFrozen();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new LiquidityPoolDepositResultSuccess();
      case -1:
        return new LiquidityPoolDepositResultMalformed();
      case -2:
        return new LiquidityPoolDepositResultNoTrust();
      case -3:
        return new LiquidityPoolDepositResultNotAuthorized();
      case -4:
        return new LiquidityPoolDepositResultUnderfunded();
      case -5:
        return new LiquidityPoolDepositResultLineFull();
      case -6:
        return new LiquidityPoolDepositResultBadPrice();
      case -7:
        return new LiquidityPoolDepositResultPoolFull();
      case -8:
        return new LiquidityPoolDepositResultTrustlineFrozen();
    }
    throw new XdrError(
      `LiquidityPoolDepositResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LiquidityPoolDepositResult variant.
   * Use this instead of `instanceof LiquidityPoolDepositResult`: the exported `LiquidityPoolDepositResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LiquidityPoolDepositResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LiquidityPoolDepositResultBase;
  }
}
class LiquidityPoolDepositResultSuccess extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class LiquidityPoolDepositResultMalformed extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class LiquidityPoolDepositResultNoTrust extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class LiquidityPoolDepositResultNotAuthorized extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositNotAuthorized";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class LiquidityPoolDepositResultUnderfunded extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class LiquidityPoolDepositResultLineFull extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositLineFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class LiquidityPoolDepositResultBadPrice extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositBadPrice";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class LiquidityPoolDepositResultPoolFull extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositPoolFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class LiquidityPoolDepositResultTrustlineFrozen extends LiquidityPoolDepositResultBase {
  type = "liquidityPoolDepositTrustlineFrozen";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
const LiquidityPoolDepositResult = LiquidityPoolDepositResultBase;

export { LiquidityPoolDepositResult, LiquidityPoolDepositResultBadPrice, LiquidityPoolDepositResultLineFull, LiquidityPoolDepositResultMalformed, LiquidityPoolDepositResultNoTrust, LiquidityPoolDepositResultNotAuthorized, LiquidityPoolDepositResultPoolFull, LiquidityPoolDepositResultSuccess, LiquidityPoolDepositResultTrustlineFrozen, LiquidityPoolDepositResultUnderfunded };
//# sourceMappingURL=liquidity-pool-deposit-result.js.map
