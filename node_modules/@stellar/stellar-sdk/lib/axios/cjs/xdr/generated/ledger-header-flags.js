'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class LedgerHeaderFlags extends enumValue.EnumValue {
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
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("LedgerHeaderFlags", {
      disableLiquidityPoolTradingFlag: 1,
      disableLiquidityPoolDepositFlag: 2,
      disableLiquidityPoolWithdrawalFlag: 4
    }),
    "disableLiquidityPool"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "LedgerHeaderFlags",
      LedgerHeaderFlags.schema,
      LedgerHeaderFlags,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("LedgerHeaderFlags", LedgerHeaderFlags, name);
  }
  static fromXdrObject(wire) {
    return LedgerHeaderFlags.fromValue(wire);
  }
}

exports.LedgerHeaderFlags = LedgerHeaderFlags;
//# sourceMappingURL=ledger-header-flags.js.map
