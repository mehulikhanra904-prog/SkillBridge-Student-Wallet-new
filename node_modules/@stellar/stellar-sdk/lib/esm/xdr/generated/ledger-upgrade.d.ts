import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ConfigUpgradeSetKey, type ConfigUpgradeSetKeyWire } from "./config-upgrade-set-key.js";
export type LedgerUpgradeWire = {
    type: 1;
    newLedgerVersion: number;
} | {
    type: 2;
    newBaseFee: number;
} | {
    type: 3;
    newMaxTxSetSize: number;
} | {
    type: 4;
    newBaseReserve: number;
} | {
    type: 5;
    newFlags: number;
} | {
    type: 6;
    newConfig: ConfigUpgradeSetKeyWire;
} | {
    type: 7;
    newMaxSorobanTxSetSize: number;
};
export type LedgerUpgradeVariantName = "ledgerUpgradeVersion" | "ledgerUpgradeBaseFee" | "ledgerUpgradeMaxTxSetSize" | "ledgerUpgradeBaseReserve" | "ledgerUpgradeFlags" | "ledgerUpgradeConfig" | "ledgerUpgradeMaxSorobanTxSetSize";
/**
 * ```xdr
 * union LedgerUpgrade switch (LedgerUpgradeType type)
 * {
 * case LEDGER_UPGRADE_VERSION:
 *     uint32 newLedgerVersion; // update ledgerVersion
 * case LEDGER_UPGRADE_BASE_FEE:
 *     uint32 newBaseFee; // update baseFee
 * case LEDGER_UPGRADE_MAX_TX_SET_SIZE:
 *     uint32 newMaxTxSetSize; // update maxTxSetSize
 * case LEDGER_UPGRADE_BASE_RESERVE:
 *     uint32 newBaseReserve; // update baseReserve
 * case LEDGER_UPGRADE_FLAGS:
 *     uint32 newFlags; // update flags
 * case LEDGER_UPGRADE_CONFIG:
 *     // Update arbitrary `ConfigSetting` entries identified by the key.
 *     ConfigUpgradeSetKey newConfig;
 * case LEDGER_UPGRADE_MAX_SOROBAN_TX_SET_SIZE:
 *     // Update ConfigSettingContractExecutionLanesV0.ledgerMaxTxCount without
 *     // using `LEDGER_UPGRADE_CONFIG`.
 *     uint32 newMaxSorobanTxSetSize;
 * };
 * ```
 */
declare abstract class LedgerUpgradeBase extends XdrValue {
    abstract readonly type: LedgerUpgradeVariantName;
    constructor();
    static readonly schema: XdrType<LedgerUpgradeWire>;
    static ledgerUpgradeVersion(newLedgerVersion: number): LedgerUpgradeVersion;
    static ledgerUpgradeBaseFee(newBaseFee: number): LedgerUpgradeBaseFee;
    static ledgerUpgradeMaxTxSetSize(newMaxTxSetSize: number): LedgerUpgradeMaxTxSetSize;
    static ledgerUpgradeBaseReserve(newBaseReserve: number): LedgerUpgradeBaseReserve;
    static ledgerUpgradeFlags(newFlags: number): LedgerUpgradeFlags;
    static ledgerUpgradeConfig(newConfig: ConfigUpgradeSetKey): LedgerUpgradeConfig;
    static ledgerUpgradeMaxSorobanTxSetSize(newMaxSorobanTxSetSize: number): LedgerUpgradeMaxSorobanTxSetSize;
    static fromXdrObject(wire: LedgerUpgradeWire): LedgerUpgrade;
    /**
     * Type guard narrowing an unknown value to a concrete LedgerUpgrade variant.
     * Use this instead of `instanceof LedgerUpgrade`: the exported `LedgerUpgrade` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `LedgerUpgrade.is(x)` narrows to the union.
     */
    static is(value: unknown): value is LedgerUpgrade;
    abstract toXdrObject(): LedgerUpgradeWire;
}
export declare class LedgerUpgradeVersion extends LedgerUpgradeBase {
    readonly type: "ledgerUpgradeVersion";
    readonly newLedgerVersion: number;
    constructor(newLedgerVersion: number);
    get value(): number;
    toXdrObject(): Extract<LedgerUpgradeWire, {
        type: 1;
    }>;
}
export declare class LedgerUpgradeBaseFee extends LedgerUpgradeBase {
    readonly type: "ledgerUpgradeBaseFee";
    readonly newBaseFee: number;
    constructor(newBaseFee: number);
    get value(): number;
    toXdrObject(): Extract<LedgerUpgradeWire, {
        type: 2;
    }>;
}
export declare class LedgerUpgradeMaxTxSetSize extends LedgerUpgradeBase {
    readonly type: "ledgerUpgradeMaxTxSetSize";
    readonly newMaxTxSetSize: number;
    constructor(newMaxTxSetSize: number);
    get value(): number;
    toXdrObject(): Extract<LedgerUpgradeWire, {
        type: 3;
    }>;
}
export declare class LedgerUpgradeBaseReserve extends LedgerUpgradeBase {
    readonly type: "ledgerUpgradeBaseReserve";
    readonly newBaseReserve: number;
    constructor(newBaseReserve: number);
    get value(): number;
    toXdrObject(): Extract<LedgerUpgradeWire, {
        type: 4;
    }>;
}
export declare class LedgerUpgradeFlags extends LedgerUpgradeBase {
    readonly type: "ledgerUpgradeFlags";
    readonly newFlags: number;
    constructor(newFlags: number);
    get value(): number;
    toXdrObject(): Extract<LedgerUpgradeWire, {
        type: 5;
    }>;
}
export declare class LedgerUpgradeConfig extends LedgerUpgradeBase {
    readonly type: "ledgerUpgradeConfig";
    readonly newConfig: ConfigUpgradeSetKey;
    constructor(newConfig: ConfigUpgradeSetKey);
    get value(): ConfigUpgradeSetKey;
    toXdrObject(): Extract<LedgerUpgradeWire, {
        type: 6;
    }>;
}
export declare class LedgerUpgradeMaxSorobanTxSetSize extends LedgerUpgradeBase {
    readonly type: "ledgerUpgradeMaxSorobanTxSetSize";
    readonly newMaxSorobanTxSetSize: number;
    constructor(newMaxSorobanTxSetSize: number);
    get value(): number;
    toXdrObject(): Extract<LedgerUpgradeWire, {
        type: 7;
    }>;
}
export type LedgerUpgrade = LedgerUpgradeVersion | LedgerUpgradeBaseFee | LedgerUpgradeMaxTxSetSize | LedgerUpgradeBaseReserve | LedgerUpgradeFlags | LedgerUpgradeConfig | LedgerUpgradeMaxSorobanTxSetSize;
export declare const LedgerUpgrade: typeof LedgerUpgradeBase;
export {};
