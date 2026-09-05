import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ConfigSettingContractParallelComputeV0Wire {
    ledgerMaxDependentTxClusters: number;
}
/**
 * ```xdr
 * struct ConfigSettingContractParallelComputeV0
 * {
 *     // Maximum number of clusters with dependent transactions allowed in a
 *     // stage of parallel tx set component.
 *     // This effectively sets the lower bound on the number of physical threads
 *     // necessary to effectively apply transaction sets in parallel.
 *     uint32 ledgerMaxDependentTxClusters;
 * };
 * ```
 */
export declare class ConfigSettingContractParallelComputeV0 extends XdrValue {
    readonly ledgerMaxDependentTxClusters: number;
    static readonly schema: XdrType<ConfigSettingContractParallelComputeV0Wire>;
    constructor(input: {
        ledgerMaxDependentTxClusters: number;
    });
    toXdrObject(): ConfigSettingContractParallelComputeV0Wire;
    static fromXdrObject(wire: ConfigSettingContractParallelComputeV0Wire): ConfigSettingContractParallelComputeV0;
}
