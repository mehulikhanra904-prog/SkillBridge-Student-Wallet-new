'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class LiquidityPoolWithdrawResultCode extends enumValue.EnumValue {
  static liquidityPoolWithdrawSuccess = new LiquidityPoolWithdrawResultCode("liquidityPoolWithdrawSuccess", 0);
  static liquidityPoolWithdrawMalformed = new LiquidityPoolWithdrawResultCode("liquidityPoolWithdrawMalformed", -1);
  static liquidityPoolWithdrawNoTrust = new LiquidityPoolWithdrawResultCode("liquidityPoolWithdrawNoTrust", -2);
  static liquidityPoolWithdrawUnderfunded = new LiquidityPoolWithdrawResultCode("liquidityPoolWithdrawUnderfunded", -3);
  static liquidityPoolWithdrawLineFull = new LiquidityPoolWithdrawResultCode("liquidityPoolWithdrawLineFull", -4);
  static liquidityPoolWithdrawUnderMinimum = new LiquidityPoolWithdrawResultCode(
    "liquidityPoolWithdrawUnderMinimum",
    -5
  );
  static liquidityPoolWithdrawTrustlineFrozen = new LiquidityPoolWithdrawResultCode(
    "liquidityPoolWithdrawTrustlineFrozen",
    -6
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("LiquidityPoolWithdrawResultCode", {
      liquidityPoolWithdrawSuccess: 0,
      liquidityPoolWithdrawMalformed: -1,
      liquidityPoolWithdrawNoTrust: -2,
      liquidityPoolWithdrawUnderfunded: -3,
      liquidityPoolWithdrawLineFull: -4,
      liquidityPoolWithdrawUnderMinimum: -5,
      liquidityPoolWithdrawTrustlineFrozen: -6
    }),
    "liquidityPoolWithdraw"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "LiquidityPoolWithdrawResultCode",
      LiquidityPoolWithdrawResultCode.schema,
      LiquidityPoolWithdrawResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "LiquidityPoolWithdrawResultCode",
      LiquidityPoolWithdrawResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return LiquidityPoolWithdrawResultCode.fromValue(wire);
  }
}

exports.LiquidityPoolWithdrawResultCode = LiquidityPoolWithdrawResultCode;
//# sourceMappingURL=liquidity-pool-withdraw-result-code.js.map
