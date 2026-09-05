import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ConfigSettingContractComputeV0Wire {
    ledgerMaxInstructions: bigint;
    txMaxInstructions: bigint;
    feeRatePerInstructionsIncrement: bigint;
    txMemoryLimit: number;
}
/**
 * ```xdr
 * struct ConfigSettingContractComputeV0
 * {
 *     // Maximum instructions per ledger
 *     int64 ledgerMaxInstructions;
 *     // Maximum instructions per transaction
 *     int64 txMaxInstructions;
 *     // Cost of 10000 instructions
 *     int64 feeRatePerInstructionsIncrement;
 *
 *     // Memory limit per transaction. Unlike instructions, there is no fee
 *     // for memory, just the limit.
 *     uint32 txMemoryLimit;
 * };
 * ```
 */
export declare class ConfigSettingContractComputeV0 extends XdrValue {
    readonly ledgerMaxInstructions: bigint;
    readonly txMaxInstructions: bigint;
    readonly feeRatePerInstructionsIncrement: bigint;
    readonly txMemoryLimit: number;
    static readonly schema: XdrType<ConfigSettingContractComputeV0Wire>;
    constructor(input: {
        ledgerMaxInstructions: bigint;
        txMaxInstructions: bigint;
        feeRatePerInstructionsIncrement: bigint;
        txMemoryLimit: number;
    });
    toXdrObject(): ConfigSettingContractComputeV0Wire;
    static fromXdrObject(wire: ConfigSettingContractComputeV0Wire): ConfigSettingContractComputeV0;
}
