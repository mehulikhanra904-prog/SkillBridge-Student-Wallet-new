import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class LiquidityPoolDepositResultCode extends EnumValue {
  static liquidityPoolDepositSuccess = new LiquidityPoolDepositResultCode("liquidityPoolDepositSuccess", 0);
  static liquidityPoolDepositMalformed = new LiquidityPoolDepositResultCode("liquidityPoolDepositMalformed", -1);
  static liquidityPoolDepositNoTrust = new LiquidityPoolDepositResultCode("liquidityPoolDepositNoTrust", -2);
  static liquidityPoolDepositNotAuthorized = new LiquidityPoolDepositResultCode("liquidityPoolDepositNotAuthorized", -3);
  static liquidityPoolDepositUnderfunded = new LiquidityPoolDepositResultCode("liquidityPoolDepositUnderfunded", -4);
  static liquidityPoolDepositLineFull = new LiquidityPoolDepositResultCode("liquidityPoolDepositLineFull", -5);
  static liquidityPoolDepositBadPrice = new LiquidityPoolDepositResultCode("liquidityPoolDepositBadPrice", -6);
  static liquidityPoolDepositPoolFull = new LiquidityPoolDepositResultCode("liquidityPoolDepositPoolFull", -7);
  static liquidityPoolDepositTrustlineFrozen = new LiquidityPoolDepositResultCode(
    "liquidityPoolDepositTrustlineFrozen",
    -8
  );
  static schema = withMemberPrefix(
    enumType("LiquidityPoolDepositResultCode", {
      liquidityPoolDepositSuccess: 0,
      liquidityPoolDepositMalformed: -1,
      liquidityPoolDepositNoTrust: -2,
      liquidityPoolDepositNotAuthorized: -3,
      liquidityPoolDepositUnderfunded: -4,
      liquidityPoolDepositLineFull: -5,
      liquidityPoolDepositBadPrice: -6,
      liquidityPoolDepositPoolFull: -7,
      liquidityPoolDepositTrustlineFrozen: -8
    }),
    "liquidityPoolDeposit"
  );
  static fromValue(value) {
    return enumFromValue(
      "LiquidityPoolDepositResultCode",
      LiquidityPoolDepositResultCode.schema,
      LiquidityPoolDepositResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "LiquidityPoolDepositResultCode",
      LiquidityPoolDepositResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return LiquidityPoolDepositResultCode.fromValue(wire);
  }
}

export { LiquidityPoolDepositResultCode };
//# sourceMappingURL=liquidity-pool-deposit-result-code.js.map
