import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ConfigSettingContractEventsV0Wire {
    txMaxContractEventsSizeBytes: number;
    feeContractEvents1Kb: bigint;
}
/**
 * ```xdr
 * struct ConfigSettingContractEventsV0
 * {
 *     // Maximum size of events that a contract call can emit.
 *     uint32 txMaxContractEventsSizeBytes;
 *     // Fee for generating 1KB of contract events.
 *     int64 feeContractEvents1KB;
 * };
 * ```
 */
export declare class ConfigSettingContractEventsV0 extends XdrValue {
    readonly txMaxContractEventsSizeBytes: number;
    readonly feeContractEvents1Kb: bigint;
    static readonly schema: XdrType<ConfigSettingContractEventsV0Wire>;
    constructor(input: {
        txMaxContractEventsSizeBytes: number;
        feeContractEvents1Kb: bigint;
    });
    toXdrObject(): ConfigSettingContractEventsV0Wire;
    static fromXdrObject(wire: ConfigSettingContractEventsV0Wire): ConfigSettingContractEventsV0;
}
