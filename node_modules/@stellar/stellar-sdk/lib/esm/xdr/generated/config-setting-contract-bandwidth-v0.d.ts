import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ConfigSettingContractBandwidthV0Wire {
    ledgerMaxTxsSizeBytes: number;
    txMaxSizeBytes: number;
    feeTxSize1Kb: bigint;
}
/**
 * ```xdr
 * struct ConfigSettingContractBandwidthV0
 * {
 *     // Maximum sum of all transaction sizes in the ledger in bytes
 *     uint32 ledgerMaxTxsSizeBytes;
 *     // Maximum size in bytes for a transaction
 *     uint32 txMaxSizeBytes;
 *
 *     // Fee for 1 KB of transaction size
 *     int64 feeTxSize1KB;
 * };
 * ```
 */
export declare class ConfigSettingContractBandwidthV0 extends XdrValue {
    readonly ledgerMaxTxsSizeBytes: number;
    readonly txMaxSizeBytes: number;
    readonly feeTxSize1Kb: bigint;
    static readonly schema: XdrType<ConfigSettingContractBandwidthV0Wire>;
    constructor(input: {
        ledgerMaxTxsSizeBytes: number;
        txMaxSizeBytes: number;
        feeTxSize1Kb: bigint;
    });
    toXdrObject(): ConfigSettingContractBandwidthV0Wire;
    static fromXdrObject(wire: ConfigSettingContractBandwidthV0Wire): ConfigSettingContractBandwidthV0;
}
