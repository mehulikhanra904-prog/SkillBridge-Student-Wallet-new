import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerKeyAccount, type LedgerKeyAccountWire } from "./ledger-key-account.js";
import { LedgerKeyTrustLine, type LedgerKeyTrustLineWire } from "./ledger-key-trust-line.js";
import { LedgerKeyOffer, type LedgerKeyOfferWire } from "./ledger-key-offer.js";
import { LedgerKeyData, type LedgerKeyDataWire } from "./ledger-key-data.js";
import { LedgerKeyClaimableBalance, type LedgerKeyClaimableBalanceWire } from "./ledger-key-claimable-balance.js";
import { LedgerKeyLiquidityPool, type LedgerKeyLiquidityPoolWire } from "./ledger-key-liquidity-pool.js";
import { LedgerKeyContractData, type LedgerKeyContractDataWire } from "./ledger-key-contract-data.js";
import { LedgerKeyContractCode, type LedgerKeyContractCodeWire } from "./ledger-key-contract-code.js";
import { LedgerKeyConfigSetting, type LedgerKeyConfigSettingWire } from "./ledger-key-config-setting.js";
import { LedgerKeyTtl, type LedgerKeyTtlWire } from "./ledger-key-ttl.js";
export type LedgerKeyWire = {
    type: 0;
    account: LedgerKeyAccountWire;
} | {
    type: 1;
    trustLine: LedgerKeyTrustLineWire;
} | {
    type: 2;
    offer: LedgerKeyOfferWire;
} | {
    type: 3;
    data: LedgerKeyDataWire;
} | {
    type: 4;
    claimableBalance: LedgerKeyClaimableBalanceWire;
} | {
    type: 5;
    liquidityPool: LedgerKeyLiquidityPoolWire;
} | {
    type: 6;
    contractData: LedgerKeyContractDataWire;
} | {
    type: 7;
    contractCode: LedgerKeyContractCodeWire;
} | {
    type: 8;
    configSetting: LedgerKeyConfigSettingWire;
} | {
    type: 9;
    ttl: LedgerKeyTtlWire;
};
export type LedgerKeyVariantName = "account" | "trustline" | "offer" | "data" | "claimableBalance" | "liquidityPool" | "contractData" | "contractCode" | "configSetting" | "ttl";
/**
 * ```xdr
 * union LedgerKey switch (LedgerEntryType type)
 * {
 * case ACCOUNT:
 *     struct
 *     {
 *         AccountID accountID;
 *     } account;
 *
 * case TRUSTLINE:
 *     struct
 *     {
 *         AccountID accountID;
 *         TrustLineAsset asset;
 *     } trustLine;
 *
 * case OFFER:
 *     struct
 *     {
 *         AccountID sellerID;
 *         int64 offerID;
 *     } offer;
 *
 * case DATA:
 *     struct
 *     {
 *         AccountID accountID;
 *         string64 dataName;
 *     } data;
 *
 * case CLAIMABLE_BALANCE:
 *     struct
 *     {
 *         ClaimableBalanceID balanceID;
 *     } claimableBalance;
 *
 * case LIQUIDITY_POOL:
 *     struct
 *     {
 *         PoolID liquidityPoolID;
 *     } liquidityPool;
 * case CONTRACT_DATA:
 *     struct
 *     {
 *         SCAddress contract;
 *         SCVal key;
 *         ContractDataDurability durability;
 *     } contractData;
 * case CONTRACT_CODE:
 *     struct
 *     {
 *         Hash hash;
 *     } contractCode;
 * case CONFIG_SETTING:
 *     struct
 *     {
 *         ConfigSettingID configSettingID;
 *     } configSetting;
 * case TTL:
 *     struct
 *     {
 *         // Hash of the LedgerKey that is associated with this TTLEntry
 *         Hash keyHash;
 *     } ttl;
 * };
 * ```
 */
declare abstract class LedgerKeyBase extends XdrValue {
    abstract readonly type: LedgerKeyVariantName;
    constructor();
    static readonly schema: XdrType<LedgerKeyWire>;
    static account(account: LedgerKeyAccount): LedgerKeyAccountArm;
    static trustline(trustLine: LedgerKeyTrustLine): LedgerKeyTrustline;
    static offer(offer: LedgerKeyOffer): LedgerKeyOfferArm;
    static data(data: LedgerKeyData): LedgerKeyDataArm;
    static claimableBalance(claimableBalance: LedgerKeyClaimableBalance): LedgerKeyClaimableBalanceArm;
    static liquidityPool(liquidityPool: LedgerKeyLiquidityPool): LedgerKeyLiquidityPoolArm;
    static contractData(contractData: LedgerKeyContractData): LedgerKeyContractDataArm;
    static contractCode(contractCode: LedgerKeyContractCode): LedgerKeyContractCodeArm;
    static configSetting(configSetting: LedgerKeyConfigSetting): LedgerKeyConfigSettingArm;
    static ttl(ttl: LedgerKeyTtl): LedgerKeyTtlArm;
    static fromXdrObject(wire: LedgerKeyWire): LedgerKey;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerKey variant.
     * Use this instead of `instanceof LedgerKey`: the exported `LedgerKey` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerKey.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerKey;
    abstract toXdrObject(): LedgerKeyWire;
}
export declare class LedgerKeyAccountArm extends LedgerKeyBase {
    readonly type: "account";
    readonly account: LedgerKeyAccount;
    constructor(account: LedgerKeyAccount);
    get value(): LedgerKeyAccount;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 0;
    }>;
}
export declare class LedgerKeyTrustline extends LedgerKeyBase {
    readonly type: "trustline";
    readonly trustLine: LedgerKeyTrustLine;
    constructor(trustLine: LedgerKeyTrustLine);
    get value(): LedgerKeyTrustLine;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 1;
    }>;
}
export declare class LedgerKeyOfferArm extends LedgerKeyBase {
    readonly type: "offer";
    readonly offer: LedgerKeyOffer;
    constructor(offer: LedgerKeyOffer);
    get value(): LedgerKeyOffer;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 2;
    }>;
}
export declare class LedgerKeyDataArm extends LedgerKeyBase {
    readonly type: "data";
    readonly data: LedgerKeyData;
    constructor(data: LedgerKeyData);
    get value(): LedgerKeyData;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 3;
    }>;
}
export declare class LedgerKeyClaimableBalanceArm extends LedgerKeyBase {
    readonly type: "claimableBalance";
    readonly claimableBalance: LedgerKeyClaimableBalance;
    constructor(claimableBalance: LedgerKeyClaimableBalance);
    get value(): LedgerKeyClaimableBalance;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 4;
    }>;
}
export declare class LedgerKeyLiquidityPoolArm extends LedgerKeyBase {
    readonly type: "liquidityPool";
    readonly liquidityPool: LedgerKeyLiquidityPool;
    constructor(liquidityPool: LedgerKeyLiquidityPool);
    get value(): LedgerKeyLiquidityPool;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 5;
    }>;
}
export declare class LedgerKeyContractDataArm extends LedgerKeyBase {
    readonly type: "contractData";
    readonly contractData: LedgerKeyContractData;
    constructor(contractData: LedgerKeyContractData);
    get value(): LedgerKeyContractData;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 6;
    }>;
}
export declare class LedgerKeyContractCodeArm extends LedgerKeyBase {
    readonly type: "contractCode";
    readonly contractCode: LedgerKeyContractCode;
    constructor(contractCode: LedgerKeyContractCode);
    get value(): LedgerKeyContractCode;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 7;
    }>;
}
export declare class LedgerKeyConfigSettingArm extends LedgerKeyBase {
    readonly type: "configSetting";
    readonly configSetting: LedgerKeyConfigSetting;
    constructor(configSetting: LedgerKeyConfigSetting);
    get value(): LedgerKeyConfigSetting;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 8;
    }>;
}
export declare class LedgerKeyTtlArm extends LedgerKeyBase {
    readonly type: "ttl";
    readonly ttl: LedgerKeyTtl;
    constructor(ttl: LedgerKeyTtl);
    get value(): LedgerKeyTtl;
    toXdrObject(): Extract<LedgerKeyWire, {
        type: 9;
    }>;
}
export type LedgerKey = LedgerKeyAccountArm | LedgerKeyTrustline | LedgerKeyOfferArm | LedgerKeyDataArm | LedgerKeyClaimableBalanceArm | LedgerKeyLiquidityPoolArm | LedgerKeyContractDataArm | LedgerKeyContractCodeArm | LedgerKeyConfigSettingArm | LedgerKeyTtlArm;
export declare const LedgerKey: typeof LedgerKeyBase;
export {};
