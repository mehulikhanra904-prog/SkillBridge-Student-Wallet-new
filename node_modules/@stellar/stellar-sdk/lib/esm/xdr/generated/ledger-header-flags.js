import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class LedgerHeaderFlags extends EnumValue {
  static disableLiquidityPoolTradingFlag = new LedgerHeaderFlags(
    "disableLiquidityPoolTradingFlag",
    1
  );
  static disableLiquidityPoolDepositFlag = new LedgerHeaderFlags(
    "disableLiquidityPoolDepositFlag",
    2
  );
  static disableLiquidityPoolWithdrawalFlag = new LedgerHeaderFlags(
    "disableLiquidityPoolWithdrawalFlag",
    4
  );
  static schema = withMemberPrefix(
    enumType("LedgerHeaderFlags", {
      disableLiquidityPoolTradingFlag: 1,
      disableLiquidityPoolDepositFlag: 2,
      disableLiquidityPoolWithdrawalFlag: 4
    }),
    "disableLiquidityPool"
  );
  static fromValue(value) {
    return enumFromValue(
      "LedgerHeaderFlags",
      LedgerHeaderFlags.schema,
      LedgerHeaderFlags,
      value
    );
  }
  static fromName(name) {
    return enumFromName("LedgerHeaderFlags", LedgerHeaderFlags, name);
  }
  static fromXdrObject(wire) {
    return LedgerHeaderFlags.fromValue(wire);
  }
}

export { LedgerHeaderFlags };
//# sourceMappingURL=ledger-header-flags.js.map
