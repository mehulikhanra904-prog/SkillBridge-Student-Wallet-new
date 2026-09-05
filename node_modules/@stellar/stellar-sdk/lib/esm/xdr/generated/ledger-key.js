import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerEntryType } from './ledger-entry-type.js';
import { LedgerKeyAccount } from './ledger-key-account.js';
import { LedgerKeyTrustLine } from './ledger-key-trust-line.js';
import { LedgerKeyOffer } from './ledger-key-offer.js';
import { LedgerKeyData } from './ledger-key-data.js';
import { LedgerKeyClaimableBalance } from './ledger-key-claimable-balance.js';
import { LedgerKeyLiquidityPool } from './ledger-key-liquidity-pool.js';
import { LedgerKeyContractData } from './ledger-key-contract-data.js';
import { LedgerKeyContractCode } from './ledger-key-contract-code.js';
import { LedgerKeyConfigSetting } from './ledger-key-config-setting.js';
import { LedgerKeyTtl } from './ledger-key-ttl.js';

class LedgerKeyBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerKeyBase) {
      throw new TypeError(
        "new xdr.LedgerKey(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerKey.account(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("LedgerKey", {
    switchOn: LedgerEntryType.schema,
    cases: [
      _case("account", 0, field("account", LedgerKeyAccount.schema)),
      _case("trustline", 1, field("trustLine", LedgerKeyTrustLine.schema)),
      _case("offer", 2, field("offer", LedgerKeyOffer.schema)),
      _case("data", 3, field("data", LedgerKeyData.schema)),
      _case(
        "claimableBalance",
        4,
        field("claimableBalance", LedgerKeyClaimableBalance.schema)
      ),
      _case(
        "liquidityPool",
        5,
        field("liquidityPool", LedgerKeyLiquidityPool.schema)
      ),
      _case(
        "contractData",
        6,
        field("contractData", LedgerKeyContractData.schema)
      ),
      _case(
        "contractCode",
        7,
        field("contractCode", LedgerKeyContractCode.schema)
      ),
      _case(
        "configSetting",
        8,
        field("configSetting", LedgerKeyConfigSetting.schema)
      ),
      _case("ttl", 9, field("ttl", LedgerKeyTtl.schema))
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
          LedgerKeyAccount.fromXdrObject(wire.account)
        );
      case 1:
        return new LedgerKeyTrustline(
          LedgerKeyTrustLine.fromXdrObject(wire.trustLine)
        );
      case 2:
        return new LedgerKeyOfferArm(LedgerKeyOffer.fromXdrObject(wire.offer));
      case 3:
        return new LedgerKeyDataArm(LedgerKeyData.fromXdrObject(wire.data));
      case 4:
        return new LedgerKeyClaimableBalanceArm(
          LedgerKeyClaimableBalance.fromXdrObject(wire.claimableBalance)
        );
      case 5:
        return new LedgerKeyLiquidityPoolArm(
          LedgerKeyLiquidityPool.fromXdrObject(wire.liquidityPool)
        );
      case 6:
        return new LedgerKeyContractDataArm(
          LedgerKeyContractData.fromXdrObject(wire.contractData)
        );
      case 7:
        return new LedgerKeyContractCodeArm(
          LedgerKeyContractCode.fromXdrObject(wire.contractCode)
        );
      case 8:
        return new LedgerKeyConfigSettingArm(
          LedgerKeyConfigSetting.fromXdrObject(wire.configSetting)
        );
      case 9:
        return new LedgerKeyTtlArm(LedgerKeyTtl.fromXdrObject(wire.ttl));
    }
    throw new XdrError(
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

export { LedgerKey, LedgerKeyAccountArm, LedgerKeyClaimableBalanceArm, LedgerKeyConfigSettingArm, LedgerKeyContractCodeArm, LedgerKeyContractDataArm, LedgerKeyDataArm, LedgerKeyLiquidityPoolArm, LedgerKeyOfferArm, LedgerKeyTrustline, LedgerKeyTtlArm };
//# sourceMappingURL=ledger-key.js.map
