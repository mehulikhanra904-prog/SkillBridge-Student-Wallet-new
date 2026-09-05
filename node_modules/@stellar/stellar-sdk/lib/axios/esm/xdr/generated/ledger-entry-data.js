import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerEntryType } from './ledger-entry-type.js';
import { AccountEntry } from './account-entry.js';
import { TrustLineEntry } from './trust-line-entry.js';
import { OfferEntry } from './offer-entry.js';
import { DataEntry } from './data-entry.js';
import { ClaimableBalanceEntry } from './claimable-balance-entry.js';
import { LiquidityPoolEntry } from './liquidity-pool-entry.js';
import { ContractDataEntry } from './contract-data-entry.js';
import { ContractCodeEntry } from './contract-code-entry.js';
import { ConfigSettingEntry } from './config-setting-entry.js';
import { TtlEntry } from './ttl-entry.js';

class LedgerEntryDataBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerEntryDataBase) {
      throw new TypeError(
        "new xdr.LedgerEntryData(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerEntryData.account(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LedgerEntryData",
    {
      switchOn: LedgerEntryType.schema,
      cases: [
        _case("account", 0, field("account", AccountEntry.schema)),
        _case("trustline", 1, field("trustLine", TrustLineEntry.schema)),
        _case("offer", 2, field("offer", OfferEntry.schema)),
        _case("data", 3, field("data", DataEntry.schema)),
        _case(
          "claimableBalance",
          4,
          field("claimableBalance", ClaimableBalanceEntry.schema)
        ),
        _case(
          "liquidityPool",
          5,
          field("liquidityPool", LiquidityPoolEntry.schema)
        ),
        _case(
          "contractData",
          6,
          field("contractData", ContractDataEntry.schema)
        ),
        _case(
          "contractCode",
          7,
          field("contractCode", ContractCodeEntry.schema)
        ),
        _case(
          "configSetting",
          8,
          field("configSetting", ConfigSettingEntry.schema)
        ),
        _case("ttl", 9, field("ttl", TtlEntry.schema))
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
          AccountEntry.fromXdrObject(wire.account)
        );
      case 1:
        return new LedgerEntryDataTrustline(
          TrustLineEntry.fromXdrObject(wire.trustLine)
        );
      case 2:
        return new LedgerEntryDataOffer(OfferEntry.fromXdrObject(wire.offer));
      case 3:
        return new LedgerEntryDataData(DataEntry.fromXdrObject(wire.data));
      case 4:
        return new LedgerEntryDataClaimableBalance(
          ClaimableBalanceEntry.fromXdrObject(wire.claimableBalance)
        );
      case 5:
        return new LedgerEntryDataLiquidityPool(
          LiquidityPoolEntry.fromXdrObject(wire.liquidityPool)
        );
      case 6:
        return new LedgerEntryDataContractData(
          ContractDataEntry.fromXdrObject(wire.contractData)
        );
      case 7:
        return new LedgerEntryDataContractCode(
          ContractCodeEntry.fromXdrObject(wire.contractCode)
        );
      case 8:
        return new LedgerEntryDataConfigSetting(
          ConfigSettingEntry.fromXdrObject(wire.configSetting)
        );
      case 9:
        return new LedgerEntryDataTtl(TtlEntry.fromXdrObject(wire.ttl));
    }
    throw new XdrError(
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

export { LedgerEntryData, LedgerEntryDataAccount, LedgerEntryDataClaimableBalance, LedgerEntryDataConfigSetting, LedgerEntryDataContractCode, LedgerEntryDataContractData, LedgerEntryDataData, LedgerEntryDataLiquidityPool, LedgerEntryDataOffer, LedgerEntryDataTrustline, LedgerEntryDataTtl };
//# sourceMappingURL=ledger-entry-data.js.map
