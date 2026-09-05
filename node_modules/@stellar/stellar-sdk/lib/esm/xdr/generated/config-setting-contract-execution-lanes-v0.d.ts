import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface ConfigSettingContractExecutionLanesV0Wire {
    ledgerMaxTxCount: number;
}
/**
 * ```xdr
 * struct ConfigSettingContractExecutionLanesV0
 * {
 *     // maximum number of Soroban transactions per ledger
 *     uint32 ledgerMaxTxCount;
 * };
 * ```
 */
export declare class ConfigSettingContractExecutionLanesV0 extends XdrValue {
    readonly ledgerMaxTxCount: number;
    static readonly schema: XdrType<ConfigSettingContractExecutionLanesV0Wire>;
    constructor(input: {
        ledgerMaxTxCount: number;
    });
    toXdrObject(): ConfigSettingContractExecutionLanesV0Wire;
    static fromXdrObject(wire: ConfigSettingContractExecutionLanesV0Wire): ConfigSettingContractExecutionLanesV0;
}
