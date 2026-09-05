import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class LiquidityPoolWithdrawResultCode extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("LiquidityPoolWithdrawResultCode", {
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
    return enumFromValue(
      "LiquidityPoolWithdrawResultCode",
      LiquidityPoolWithdrawResultCode.schema,
      LiquidityPoolWithdrawResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "LiquidityPoolWithdrawResultCode",
      LiquidityPoolWithdrawResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return LiquidityPoolWithdrawResultCode.fromValue(wire);
  }
}

export { LiquidityPoolWithdrawResultCode };
//# sourceMappingURL=liquidity-pool-withdraw-result-code.js.map
