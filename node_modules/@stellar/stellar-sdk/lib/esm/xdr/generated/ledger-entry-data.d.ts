import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AccountEntry, type AccountEntryWire } from "./account-entry.js";
import { TrustLineEntry, type TrustLineEntryWire } from "./trust-line-entry.js";
import { OfferEntry, type OfferEntryWire } from "./offer-entry.js";
import { DataEntry, type DataEntryWire } from "./data-entry.js";
import { ClaimableBalanceEntry, type ClaimableBalanceEntryWire } from "./claimable-balance-entry.js";
import { LiquidityPoolEntry, type LiquidityPoolEntryWire } from "./liquidity-pool-entry.js";
import { ContractDataEntry, type ContractDataEntryWire } from "./contract-data-entry.js";
import { ContractCodeEntry, type ContractCodeEntryWire } from "./contract-code-entry.js";
import { ConfigSettingEntry, type ConfigSettingEntryWire } from "./config-setting-entry.js";
import { TtlEntry, type TtlEntryWire } from "./ttl-entry.js";
export type LedgerEntryDataWire = {
    type: 0;
    account: AccountEntryWire;
} | {
    type: 1;
    trustLine: TrustLineEntryWire;
} | {
    type: 2;
    offer: OfferEntryWire;
} | {
    type: 3;
    data: DataEntryWire;
} | {
    type: 4;
    claimableBalance: ClaimableBalanceEntryWire;
} | {
    type: 5;
    liquidityPool: LiquidityPoolEntryWire;
} | {
    type: 6;
    contractData: ContractDataEntryWire;
} | {
    type: 7;
    contractCode: ContractCodeEntryWire;
} | {
    type: 8;
    configSetting: ConfigSettingEntryWire;
} | {
    type: 9;
    ttl: TtlEntryWire;
};
export type LedgerEntryDataVariantName = "account" | "trustline" | "offer" | "data" | "claimableBalance" | "liquidityPool" | "contractData" | "contractCode" | "configSetting" | "ttl";
/**
 * ```xdr
 * union switch (LedgerEntryType type)
 *     {
 *     case ACCOUNT:
 *         AccountEntry account;
 *     case TRUSTLINE:
 *         TrustLineEntry trustLine;
 *     case OFFER:
 *         OfferEntry offer;
 *     case DATA:
 *         DataEntry data;
 *     case CLAIMABLE_BALANCE:
 *         ClaimableBalanceEntry claimableBalance;
 *     case LIQUIDITY_POOL:
 *         LiquidityPoolEntry liquidityPool;
 *     case CONTRACT_DATA:
 *         ContractDataEntry contractData;
 *     case CONTRACT_CODE:
 *         ContractCodeEntry contractCode;
 *     case CONFIG_SETTING:
 *         ConfigSettingEntry configSetting;
 *     case TTL:
 *         TTLEntry ttl;
 *     }
 * ```
 */
declare abstract class LedgerEntryDataBase extends XdrValue {
    abstract readonly type: LedgerEntryDataVariantName;
    constructor();
    static readonly schema: XdrType<LedgerEntryDataWire>;
    static account(account: AccountEntry): LedgerEntryDataAccount;
    static trustline(trustLine: TrustLineEntry): LedgerEntryDataTrustline;
    static offer(offer: OfferEntry): LedgerEntryDataOffer;
    static data(data: DataEntry): LedgerEntryDataData;
    static claimableBalance(claimableBalance: ClaimableBalanceEntry): LedgerEntryDataClaimableBalance;
    static liquidityPool(liquidityPool: LiquidityPoolEntry): LedgerEntryDataLiquidityPool;
    static contractData(contractData: ContractDataEntry): LedgerEntryDataContractData;
    static contractCode(contractCode: ContractCodeEntry): LedgerEntryDataContractCode;
    static configSetting(configSetting: ConfigSettingEntry): LedgerEntryDataConfigSetting;
    static ttl(ttl: TtlEntry): LedgerEntryDataTtl;
    static fromXdrObject(wire: LedgerEntryDataWire): LedgerEntryData;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerEntryData variant.
     * Use this instead of `instanceof LedgerEntryData`: the exported `LedgerEntryData` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerEntryData.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerEntryData;
    abstract toXdrObject(): LedgerEntryDataWire;
}
export declare class LedgerEntryDataAccount extends LedgerEntryDataBase {
    readonly type: "account";
    readonly account: AccountEntry;
    constructor(account: AccountEntry);
    get value(): AccountEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 0;
    }>;
}
export declare class LedgerEntryDataTrustline extends LedgerEntryDataBase {
    readonly type: "trustline";
    readonly trustLine: TrustLineEntry;
    constructor(trustLine: TrustLineEntry);
    get value(): TrustLineEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 1;
    }>;
}
export declare class LedgerEntryDataOffer extends LedgerEntryDataBase {
    readonly type: "offer";
    readonly offer: OfferEntry;
    constructor(offer: OfferEntry);
    get value(): OfferEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 2;
    }>;
}
export declare class LedgerEntryDataData extends LedgerEntryDataBase {
    readonly type: "data";
    readonly data: DataEntry;
    constructor(data: DataEntry);
    get value(): DataEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 3;
    }>;
}
export declare class LedgerEntryDataClaimableBalance extends LedgerEntryDataBase {
    readonly type: "claimableBalance";
    readonly claimableBalance: ClaimableBalanceEntry;
    constructor(claimableBalance: ClaimableBalanceEntry);
    get value(): ClaimableBalanceEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 4;
    }>;
}
export declare class LedgerEntryDataLiquidityPool extends LedgerEntryDataBase {
    readonly type: "liquidityPool";
    readonly liquidityPool: LiquidityPoolEntry;
    constructor(liquidityPool: LiquidityPoolEntry);
    get value(): LiquidityPoolEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 5;
    }>;
}
export declare class LedgerEntryDataContractData extends LedgerEntryDataBase {
    readonly type: "contractData";
    readonly contractData: ContractDataEntry;
    constructor(contractData: ContractDataEntry);
    get value(): ContractDataEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 6;
    }>;
}
export declare class LedgerEntryDataContractCode extends LedgerEntryDataBase {
    readonly type: "contractCode";
    readonly contractCode: ContractCodeEntry;
    constructor(contractCode: ContractCodeEntry);
    get value(): ContractCodeEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 7;
    }>;
}
export declare class LedgerEntryDataConfigSetting extends LedgerEntryDataBase {
    readonly type: "configSetting";
    readonly configSetting: ConfigSettingEntry;
    constructor(configSetting: ConfigSettingEntry);
    get value(): ConfigSettingEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 8;
    }>;
}
export declare class LedgerEntryDataTtl extends LedgerEntryDataBase {
    readonly type: "ttl";
    readonly ttl: TtlEntry;
    constructor(ttl: TtlEntry);
    get value(): TtlEntry;
    toXdrObject(): Extract<LedgerEntryDataWire, {
        type: 9;
    }>;
}
export type LedgerEntryData = LedgerEntryDataAccount | LedgerEntryDataTrustline | LedgerEntryDataOffer | LedgerEntryDataData | LedgerEntryDataClaimableBalance | LedgerEntryDataLiquidityPool | LedgerEntryDataContractData | LedgerEntryDataContractCode | LedgerEntryDataConfigSetting | LedgerEntryDataTtl;
export declare const LedgerEntryData: typeof LedgerEntryDataBase;
export {};
