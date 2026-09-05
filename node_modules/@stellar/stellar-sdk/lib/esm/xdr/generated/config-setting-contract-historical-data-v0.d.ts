import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ConfigSettingContractHistoricalDataV0Wire {
    feeHistorical1Kb: bigint;
}
/**
 * ```xdr
 * struct ConfigSettingContractHistoricalDataV0
 * {
 *     int64 feeHistorical1KB; // Fee for storing 1KB in archives
 * };
 * ```
 */
export declare class ConfigSettingContractHistoricalDataV0 extends XdrValue {
    readonly feeHistorical1Kb: bigint;
    static readonly schema: XdrType<ConfigSettingContractHistoricalDataV0Wire>;
    constructor(input: {
        feeHistorical1Kb: bigint;
    });
    toXdrObject(): ConfigSettingContractHistoricalDataV0Wire;
    static fromXdrObject(wire: ConfigSettingContractHistoricalDataV0Wire): ConfigSettingContractHistoricalDataV0;
}
