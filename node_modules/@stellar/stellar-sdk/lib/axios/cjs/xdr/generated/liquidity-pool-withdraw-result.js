'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var liquidityPoolWithdrawResultCode = require('./liquidity-pool-withdraw-result-code.js');

class LiquidityPoolWithdrawResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === LiquidityPoolWithdrawResultBase) {
      throw new TypeError(
        "new xdr.LiquidityPoolWithdrawResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LiquidityPoolWithdrawResult.liquidityPoolWithdrawSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "LiquidityPoolWithdrawResult",
    {
      switchOn: liquidityPoolWithdrawResultCode.LiquidityPoolWithdrawResultCode.schema,
      cases: [
        jsXdr.case("liquidityPoolWithdrawSuccess", 0, jsXdr.void()),
        jsXdr.case("liquidityPoolWithdrawMalformed", -1, jsXdr.void()),
        jsXdr.case("liquidityPoolWithdrawNoTrust", -2, jsXdr.void()),
        jsXdr.case("liquidityPoolWithdrawUnderfunded", -3, jsXdr.void()),
        jsXdr.case("liquidityPoolWithdrawLineFull", -4, jsXdr.void()),
        jsXdr.case("liquidityPoolWithdrawUnderMinimum", -5, jsXdr.void()),
        jsXdr.case("liquidityPoolWithdrawTrustlineFrozen", -6, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static liquidityPoolWithdrawSuccess() {
    return new LiquidityPoolWithdrawResultSuccess();
  }
  static liquidityPoolWithdrawMalformed() {
    return new LiquidityPoolWithdrawResultMalformed();
  }
  static liquidityPoolWithdrawNoTrust() {
    return new LiquidityPoolWithdrawResultNoTrust();
  }
  static liquidityPoolWithdrawUnderfunded() {
    return new LiquidityPoolWithdrawResultUnderfunded();
  }
  static liquidityPoolWithdrawLineFull() {
    return new LiquidityPoolWithdrawResultLineFull();
  }
  static liquidityPoolWithdrawUnderMinimum() {
    return new LiquidityPoolWithdrawResultUnderMinimum();
  }
  static liquidityPoolWithdrawTrustlineFrozen() {
    return new LiquidityPoolWithdrawResultTrustlineFrozen();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new LiquidityPoolWithdrawResultSuccess();
      case -1:
        return new LiquidityPoolWithdrawResultMalformed();
      case -2:
        return new LiquidityPoolWithdrawResultNoTrust();
      case -3:
        return new LiquidityPoolWithdrawResultUnderfunded();
      case -4:
        return new LiquidityPoolWithdrawResultLineFull();
      case -5:
        return new LiquidityPoolWithdrawResultUnderMinimum();
      case -6:
        return new LiquidityPoolWithdrawResultTrustlineFrozen();
    }
    throw new jsXdr.XdrError(
      `LiquidityPoolWithdrawResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LiquidityPoolWithdrawResult variant.
   * Use this instead of `instanceof LiquidityPoolWithdrawResult`: the exported `LiquidityPoolWithdrawResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LiquidityPoolWithdrawResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LiquidityPoolWithdrawResultBase;
  }
}
class LiquidityPoolWithdrawResultSuccess extends LiquidityPoolWithdrawResultBase {
  type = "liquidityPoolWithdrawSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class LiquidityPoolWithdrawResultMalformed extends LiquidityPoolWithdrawResultBase {
  type = "liquidityPoolWithdrawMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class LiquidityPoolWithdrawResultNoTrust extends LiquidityPoolWithdrawResultBase {
  type = "liquidityPoolWithdrawNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class LiquidityPoolWithdrawResultUnderfunded extends LiquidityPoolWithdrawResultBase {
  type = "liquidityPoolWithdrawUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class LiquidityPoolWithdrawResultLineFull extends LiquidityPoolWithdrawResultBase {
  type = "liquidityPoolWithdrawLineFull";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class LiquidityPoolWithdrawResultUnderMinimum extends LiquidityPoolWithdrawResultBase {
  type = "liquidityPoolWithdrawUnderMinimum";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class LiquidityPoolWithdrawResultTrustlineFrozen extends LiquidityPoolWithdrawResultBase {
  type = "liquidityPoolWithdrawTrustlineFrozen";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
const LiquidityPoolWithdrawResult = LiquidityPoolWithdrawResultBase;

exports.LiquidityPoolWithdrawResult = LiquidityPoolWithdrawResult;
exports.LiquidityPoolWithdrawResultLineFull = LiquidityPoolWithdrawResultLineFull;
exports.LiquidityPoolWithdrawResultMalformed = LiquidityPoolWithdrawResultMalformed;
exports.LiquidityPoolWithdrawResultNoTrust = LiquidityPoolWithdrawResultNoTrust;
exports.LiquidityPoolWithdrawResultSuccess = LiquidityPoolWithdrawResultSuccess;
exports.LiquidityPoolWithdrawResultTrustlineFrozen = LiquidityPoolWithdrawResultTrustlineFrozen;
exports.LiquidityPoolWithdrawResultUnderMinimum = LiquidityPoolWithdrawResultUnderMinimum;
exports.LiquidityPoolWithdrawResultUnderfunded = LiquidityPoolWithdrawResultUnderfunded;
//# sourceMappingURL=liquidity-pool-withdraw-result.js.map
