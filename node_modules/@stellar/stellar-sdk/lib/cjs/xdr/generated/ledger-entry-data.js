'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerEntryType = require('./ledger-entry-type.js');
var accountEntry = require('./account-entry.js');
var trustLineEntry = require('./trust-line-entry.js');
var offerEntry = require('./offer-entry.js');
var dataEntry = require('./data-entry.js');
var claimableBalanceEntry = require('./claimable-balance-entry.js');
var liquidityPoolEntry = require('./liquidity-pool-entry.js');
var contractDataEntry = require('./contract-data-entry.js');
var contractCodeEntry = require('./contract-code-entry.js');
var configSettingEntry = require('./config-setting-entry.js');
var ttlEntry = require('./ttl-entry.js');

class LedgerEntryDataBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === LedgerEntryDataBase) {
      throw new TypeError(
        "new xdr.LedgerEntryData(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerEntryData.account(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "LedgerEntryData",
    {
      switchOn: ledgerEntryType.LedgerEntryType.schema,
      cases: [
        jsXdr.case("account", 0, jsXdr.field("account", accountEntry.AccountEntry.schema)),
        jsXdr.case("trustline", 1, jsXdr.field("trustLine", trustLineEntry.TrustLineEntry.schema)),
        jsXdr.case("offer", 2, jsXdr.field("offer", offerEntry.OfferEntry.schema)),
        jsXdr.case("data", 3, jsXdr.field("data", dataEntry.DataEntry.schema)),
        jsXdr.case(
          "claimableBalance",
          4,
          jsXdr.field("claimableBalance", claimableBalanceEntry.ClaimableBalanceEntry.schema)
        ),
        jsXdr.case(
          "liquidityPool",
          5,
          jsXdr.field("liquidityPool", liquidityPoolEntry.LiquidityPoolEntry.schema)
        ),
        jsXdr.case(
          "contractData",
          6,
          jsXdr.field("contractData", contractDataEntry.ContractDataEntry.schema)
        ),
        jsXdr.case(
          "contractCode",
          7,
          jsXdr.field("contractCode", contractCodeEntry.ContractCodeEntry.schema)
        ),
        jsXdr.case(
          "configSetting",
          8,
          jsXdr.field("configSetting", configSettingEntry.ConfigSettingEntry.schema)
        ),
        jsXdr.case("ttl", 9, jsXdr.field("ttl", ttlEntry.TtlEntry.schema))
      ]
    }
  );
  static account(account) {
    return new LedgerEntryDataAccount(account);
  }
  static trustline(trustLine) {
    return new LedgerEntryDataTrustline(trustLine);
  }
  static offer(offer) {
    return new LedgerEntryDataOffer(offer);
  }
  static data(data) {
    return new LedgerEntryDataData(data);
  }
  static claimableBalance(claimableBalance) {
    return new LedgerEntryDataClaimableBalance(claimableBalance);
  }
  static liquidityPool(liquidityPool) {
    return new LedgerEntryDataLiquidityPool(liquidityPool);
  }
  static contractData(contractData) {
    return new LedgerEntryDataContractData(contractData);
  }
  static contractCode(contractCode) {
    return new LedgerEntryDataContractCode(contractCode);
  }
  static configSetting(configSetting) {
    return new LedgerEntryDataConfigSetting(configSetting);
  }
  static ttl(ttl) {
    return new LedgerEntryDataTtl(ttl);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new LedgerEntryDataAccount(
          accountEntry.AccountEntry.fromXdrObject(wire.account)
        );
      case 1:
        return new LedgerEntryDataTrustline(
          trustLineEntry.TrustLineEntry.fromXdrObject(wire.trustLine)
        );
      case 2:
        return new LedgerEntryDataOffer(offerEntry.OfferEntry.fromXdrObject(wire.offer));
      case 3:
        return new LedgerEntryDataData(dataEntry.DataEntry.fromXdrObject(wire.data));
      case 4:
        return new LedgerEntryDataClaimableBalance(
          claimableBalanceEntry.ClaimableBalanceEntry.fromXdrObject(wire.claimableBalance)
        );
      case 5:
        return new LedgerEntryDataLiquidityPool(
          liquidityPoolEntry.LiquidityPoolEntry.fromXdrObject(wire.liquidityPool)
        );
      case 6:
        return new LedgerEntryDataContractData(
          contractDataEntry.ContractDataEntry.fromXdrObject(wire.contractData)
        );
      case 7:
        return new LedgerEntryDataContractCode(
          contractCodeEntry.ContractCodeEntry.fromXdrObject(wire.contractCode)
        );
      case 8:
        return new LedgerEntryDataConfigSetting(
          configSettingEntry.ConfigSettingEntry.fromXdrObject(wire.configSetting)
        );
      case 9:
        return new LedgerEntryDataTtl(ttlEntry.TtlEntry.fromXdrObject(wire.ttl));
    }
    throw new jsXdr.XdrError(
      `LedgerEntryData: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerEntryData variant.
   * Use this instead of `instanceof LedgerEntryData`: the exported `LedgerEntryData` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerEntryData.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerEntryDataBase;
  }
}
class LedgerEntryDataAccount extends LedgerEntryDataBase {
  type = "account";
  account;
  constructor(account) {
    super();
    this.account = account;
  }
  get value() {
    return this.account;
  }
  toXdrObject() {
    return { type: 0, account: this.account.toXdrObject() };
  }
}
class LedgerEntryDataTrustline extends LedgerEntryDataBase {
  type = "trustline";
  trustLine;
  constructor(trustLine) {
    super();
    this.trustLine = trustLine;
  }
  get value() {
    return this.trustLine;
  }
  toXdrObject() {
    return { type: 1, trustLine: this.trustLine.toXdrObject() };
  }
}
class LedgerEntryDataOffer extends LedgerEntryDataBase {
  type = "offer";
  offer;
  constructor(offer) {
    super();
    this.offer = offer;
  }
  get value() {
    return this.offer;
  }
  toXdrObject() {
    return { type: 2, offer: this.offer.toXdrObject() };
  }
}
class LedgerEntryDataData extends LedgerEntryDataBase {
  type = "data";
  data;
  constructor(data) {
    super();
    this.data = data;
  }
  get value() {
    return this.data;
  }
  toXdrObject() {
    return { type: 3, data: this.data.toXdrObject() };
  }
}
class LedgerEntryDataClaimableBalance extends LedgerEntryDataBase {
  type = "claimableBalance";
  claimableBalance;
  constructor(claimableBalance) {
    super();
    this.claimableBalance = claimableBalance;
  }
  get value() {
    return this.claimableBalance;
  }
  toXdrObject() {
    return { type: 4, claimableBalance: this.claimableBalance.toXdrObject() };
  }
}
class LedgerEntryDataLiquidityPool extends LedgerEntryDataBase {
  type = "liquidityPool";
  liquidityPool;
  constructor(liquidityPool) {
    super();
    this.liquidityPool = liquidityPool;
  }
  get value() {
    return this.liquidityPool;
  }
  toXdrObject() {
    return { type: 5, liquidityPool: this.liquidityPool.toXdrObject() };
  }
}
class LedgerEntryDataContractData extends LedgerEntryDataBase {
  type = "contractData";
  contractData;
  constructor(contractData) {
    super();
    this.contractData = contractData;
  }
  get value() {
    return this.contractData;
  }
  toXdrObject() {
    return { type: 6, contractData: this.contractData.toXdrObject() };
  }
}
class LedgerEntryDataContractCode extends LedgerEntryDataBase {
  type = "contractCode";
  contractCode;
  constructor(contractCode) {
    super();
    this.contractCode = contractCode;
  }
  get value() {
    return this.contractCode;
  }
  toXdrObject() {
    return { type: 7, contractCode: this.contractCode.toXdrObject() };
  }
}
class LedgerEntryDataConfigSetting extends LedgerEntryDataBase {
  type = "configSetting";
  configSetting;
  constructor(configSetting) {
    super();
    this.configSetting = configSetting;
  }
  get value() {
    return this.configSetting;
  }
  toXdrObject() {
    return { type: 8, configSetting: this.configSetting.toXdrObject() };
  }
}
class LedgerEntryDataTtl extends LedgerEntryDataBase {
  type = "ttl";
  ttl;
  constructor(ttl) {
    super();
    this.ttl = ttl;
  }
  get value() {
    return this.ttl;
  }
  toXdrObject() {
    return { type: 9, ttl: this.ttl.toXdrObject() };
  }
}
const LedgerEntryData = LedgerEntryDataBase;

exports.LedgerEntryData = LedgerEntryData;
exports.LedgerEntryDataAccount = LedgerEntryDataAccount;
exports.LedgerEntryDataClaimableBalance = LedgerEntryDataClaimableBalance;
exports.LedgerEntryDataConfigSetting = LedgerEntryDataConfigSetting;
exports.LedgerEntryDataContractCode = LedgerEntryDataContractCode;
exports.LedgerEntryDataContractData = LedgerEntryDataContractData;
exports.LedgerEntryDataData = LedgerEntryDataData;
exports.LedgerEntryDataLiquidityPool = LedgerEntryDataLiquidityPool;
exports.LedgerEntryDataOffer = LedgerEntryDataOffer;
exports.LedgerEntryDataTrustline = LedgerEntryDataTrustline;
exports.LedgerEntryDataTtl = LedgerEntryDataTtl;
//# sourceMappingURL=ledger-entry-data.js.map
