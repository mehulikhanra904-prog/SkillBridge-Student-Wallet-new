'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class LedgerEntryType extends enumValue.EnumValue {
  static account = new LedgerEntryType("account", 0);
  static trustline = new LedgerEntryType("trustline", 1);
  static offer = new LedgerEntryType("offer", 2);
  static data = new LedgerEntryType("data", 3);
  static claimableBalance = new LedgerEntryType("claimableBalance", 4);
  static liquidityPool = new LedgerEntryType("liquidityPool", 5);
  static contractData = new LedgerEntryType("contractData", 6);
  static contractCode = new LedgerEntryType("contractCode", 7);
  static configSetting = new LedgerEntryType("configSetting", 8);
  static ttl = new LedgerEntryType("ttl", 9);
  static schema = jsXdr.enumType("LedgerEntryType", {
    account: 0,
    trustline: 1,
    offer: 2,
    data: 3,
    claimableBalance: 4,
    liquidityPool: 5,
    contractData: 6,
    contractCode: 7,
    configSetting: 8,
    ttl: 9
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "LedgerEntryType",
      LedgerEntryType.schema,
      LedgerEntryType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("LedgerEntryType", LedgerEntryType, name);
  }
  static fromXdrObject(wire) {
    return LedgerEntryType.fromValue(wire);
  }
}

exports.LedgerEntryType = LedgerEntryType;
//# sourceMappingURL=ledger-entry-type.js.map
