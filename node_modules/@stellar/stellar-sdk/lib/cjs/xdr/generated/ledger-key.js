'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerEntryType = require('./ledger-entry-type.js');
var ledgerKeyAccount = require('./ledger-key-account.js');
var ledgerKeyTrustLine = require('./ledger-key-trust-line.js');
var ledgerKeyOffer = require('./ledger-key-offer.js');
var ledgerKeyData = require('./ledger-key-data.js');
var ledgerKeyClaimableBalance = require('./ledger-key-claimable-balance.js');
var ledgerKeyLiquidityPool = require('./ledger-key-liquidity-pool.js');
var ledgerKeyContractData = require('./ledger-key-contract-data.js');
var ledgerKeyContractCode = require('./ledger-key-contract-code.js');
var ledgerKeyConfigSetting = require('./ledger-key-config-setting.js');
var ledgerKeyTtl = require('./ledger-key-ttl.js');

class LedgerKeyBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === LedgerKeyBase) {
      throw new TypeError(
        "new xdr.LedgerKey(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerKey.account(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("LedgerKey", {
    switchOn: ledgerEntryType.LedgerEntryType.schema,
    cases: [
      jsXdr.case("account", 0, jsXdr.field("account", ledgerKeyAccount.LedgerKeyAccount.schema)),
      jsXdr.case("trustline", 1, jsXdr.field("trustLine", ledgerKeyTrustLine.LedgerKeyTrustLine.schema)),
      jsXdr.case("offer", 2, jsXdr.field("offer", ledgerKeyOffer.LedgerKeyOffer.schema)),
      jsXdr.case("data", 3, jsXdr.field("data", ledgerKeyData.LedgerKeyData.schema)),
      jsXdr.case(
        "claimableBalance",
        4,
        jsXdr.field("claimableBalance", ledgerKeyClaimableBalance.LedgerKeyClaimableBalance.schema)
      ),
      jsXdr.case(
        "liquidityPool",
        5,
        jsXdr.field("liquidityPool", ledgerKeyLiquidityPool.LedgerKeyLiquidityPool.schema)
      ),
      jsXdr.case(
        "contractData",
        6,
        jsXdr.field("contractData", ledgerKeyContractData.LedgerKeyContractData.schema)
      ),
      jsXdr.case(
        "contractCode",
        7,
        jsXdr.field("contractCode", ledgerKeyContractCode.LedgerKeyContractCode.schema)
      ),
      jsXdr.case(
        "configSetting",
        8,
        jsXdr.field("configSetting", ledgerKeyConfigSetting.LedgerKeyConfigSetting.schema)
      ),
      jsXdr.case("ttl", 9, jsXdr.field("ttl", ledgerKeyTtl.LedgerKeyTtl.schema))
    ]
  });
  static account(account) {
    return new LedgerKeyAccountArm(account);
  }
  static trustline(trustLine) {
    return new LedgerKeyTrustline(trustLine);
  }
  static offer(offer) {
    return new LedgerKeyOfferArm(offer);
  }
  static data(data) {
    return new LedgerKeyDataArm(data);
  }
  static claimableBalance(claimableBalance) {
    return new LedgerKeyClaimableBalanceArm(claimableBalance);
  }
  static liquidityPool(liquidityPool) {
    return new LedgerKeyLiquidityPoolArm(liquidityPool);
  }
  static contractData(contractData) {
    return new LedgerKeyContractDataArm(contractData);
  }
  static contractCode(contractCode) {
    return new LedgerKeyContractCodeArm(contractCode);
  }
  static configSetting(configSetting) {
    return new LedgerKeyConfigSettingArm(configSetting);
  }
  static ttl(ttl) {
    return new LedgerKeyTtlArm(ttl);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new LedgerKeyAccountArm(
          ledgerKeyAccount.LedgerKeyAccount.fromXdrObject(wire.account)
        );
      case 1:
        return new LedgerKeyTrustline(
          ledgerKeyTrustLine.LedgerKeyTrustLine.fromXdrObject(wire.trustLine)
        );
      case 2:
        return new LedgerKeyOfferArm(ledgerKeyOffer.LedgerKeyOffer.fromXdrObject(wire.offer));
      case 3:
        return new LedgerKeyDataArm(ledgerKeyData.LedgerKeyData.fromXdrObject(wire.data));
      case 4:
        return new LedgerKeyClaimableBalanceArm(
          ledgerKeyClaimableBalance.LedgerKeyClaimableBalance.fromXdrObject(wire.claimableBalance)
        );
      case 5:
        return new LedgerKeyLiquidityPoolArm(
          ledgerKeyLiquidityPool.LedgerKeyLiquidityPool.fromXdrObject(wire.liquidityPool)
        );
      case 6:
        return new LedgerKeyContractDataArm(
          ledgerKeyContractData.LedgerKeyContractData.fromXdrObject(wire.contractData)
        );
      case 7:
        return new LedgerKeyContractCodeArm(
          ledgerKeyContractCode.LedgerKeyContractCode.fromXdrObject(wire.contractCode)
        );
      case 8:
        return new LedgerKeyConfigSettingArm(
          ledgerKeyConfigSetting.LedgerKeyConfigSetting.fromXdrObject(wire.configSetting)
        );
      case 9:
        return new LedgerKeyTtlArm(ledgerKeyTtl.LedgerKeyTtl.fromXdrObject(wire.ttl));
    }
    throw new jsXdr.XdrError(
      `LedgerKey: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerKey variant.
   * Use this instead of `instanceof LedgerKey`: the exported `LedgerKey` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerKey.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerKeyBase;
  }
}
class LedgerKeyAccountArm extends LedgerKeyBase {
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
class LedgerKeyTrustline extends LedgerKeyBase {
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
class LedgerKeyOfferArm extends LedgerKeyBase {
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
class LedgerKeyDataArm extends LedgerKeyBase {
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
class LedgerKeyClaimableBalanceArm extends LedgerKeyBase {
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
class LedgerKeyLiquidityPoolArm extends LedgerKeyBase {
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
class LedgerKeyContractDataArm extends LedgerKeyBase {
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
class LedgerKeyContractCodeArm extends LedgerKeyBase {
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
class LedgerKeyConfigSettingArm extends LedgerKeyBase {
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
class LedgerKeyTtlArm extends LedgerKeyBase {
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
const LedgerKey = LedgerKeyBase;

exports.LedgerKey = LedgerKey;
exports.LedgerKeyAccountArm = LedgerKeyAccountArm;
exports.LedgerKeyClaimableBalanceArm = LedgerKeyClaimableBalanceArm;
exports.LedgerKeyConfigSettingArm = LedgerKeyConfigSettingArm;
exports.LedgerKeyContractCodeArm = LedgerKeyContractCodeArm;
exports.LedgerKeyContractDataArm = LedgerKeyContractDataArm;
exports.LedgerKeyDataArm = LedgerKeyDataArm;
exports.LedgerKeyLiquidityPoolArm = LedgerKeyLiquidityPoolArm;
exports.LedgerKeyOfferArm = LedgerKeyOfferArm;
exports.LedgerKeyTrustline = LedgerKeyTrustline;
exports.LedgerKeyTtlArm = LedgerKeyTtlArm;
//# sourceMappingURL=ledger-key.js.map
