import { EnumValue } from "../values/enum-value.js";
export type ConfigSettingIdWire = number;
export type ConfigSettingIdName = "configSettingContractMaxSizeBytes" | "configSettingContractComputeV0" | "configSettingContractLedgerCostV0" | "configSettingContractHistoricalDataV0" | "configSettingContractEventsV0" | "configSettingContractBandwidthV0" | "configSettingContractCostParamsCpuInstructions" | "configSettingContractCostParamsMemoryBytes" | "configSettingContractDataKeySizeBytes" | "configSettingContractDataEntrySizeBytes" | "configSettingStateArchival" | "configSettingContractExecutionLanes" | "configSettingLiveSorobanStateSizeWindow" | "configSettingEvictionIterator" | "configSettingContractParallelComputeV0" | "configSettingContractLedgerCostExtV0" | "configSettingScpTiming" | "configSettingFrozenLedgerKeys" | "configSettingFrozenLedgerKeysDelta" | "configSettingFreezeBypassTxs" | "configSettingFreezeBypassTxsDelta";
/**
 * ```xdr
 * enum ConfigSettingID
 * {
 *     CONFIG_SETTING_CONTRACT_MAX_SIZE_BYTES = 0,
 *     CONFIG_SETTING_CONTRACT_COMPUTE_V0 = 1,
 *     CONFIG_SETTING_CONTRACT_LEDGER_COST_V0 = 2,
 *     CONFIG_SETTING_CONTRACT_HISTORICAL_DATA_V0 = 3,
 *     CONFIG_SETTING_CONTRACT_EVENTS_V0 = 4,
 *     CONFIG_SETTING_CONTRACT_BANDWIDTH_V0 = 5,
 *     CONFIG_SETTING_CONTRACT_COST_PARAMS_CPU_INSTRUCTIONS = 6,
 *     CONFIG_SETTING_CONTRACT_COST_PARAMS_MEMORY_BYTES = 7,
 *     CONFIG_SETTING_CONTRACT_DATA_KEY_SIZE_BYTES = 8,
 *     CONFIG_SETTING_CONTRACT_DATA_ENTRY_SIZE_BYTES = 9,
 *     CONFIG_SETTING_STATE_ARCHIVAL = 10,
 *     CONFIG_SETTING_CONTRACT_EXECUTION_LANES = 11,
 *     CONFIG_SETTING_LIVE_SOROBAN_STATE_SIZE_WINDOW = 12,
 *     CONFIG_SETTING_EVICTION_ITERATOR = 13,
 *     CONFIG_SETTING_CONTRACT_PARALLEL_COMPUTE_V0 = 14,
 *     CONFIG_SETTING_CONTRACT_LEDGER_COST_EXT_V0 = 15,
 *     CONFIG_SETTING_SCP_TIMING = 16,
 *     CONFIG_SETTING_FROZEN_LEDGER_KEYS = 17,
 *     CONFIG_SETTING_FROZEN_LEDGER_KEYS_DELTA = 18,
 *     CONFIG_SETTING_FREEZE_BYPASS_TXS = 19,
 *     CONFIG_SETTING_FREEZE_BYPASS_TXS_DELTA = 20
 * };
 * ```
 */
export declare class ConfigSettingId extends EnumValue<ConfigSettingIdName> {
    static readonly configSettingContractMaxSizeBytes: ConfigSettingId;
    static readonly configSettingContractComputeV0: ConfigSettingId;
    static readonly configSettingContractLedgerCostV0: ConfigSettingId;
    static readonly configSettingContractHistoricalDataV0: ConfigSettingId;
    static readonly configSettingContractEventsV0: ConfigSettingId;
    static readonly configSettingContractBandwidthV0: ConfigSettingId;
    static readonly configSettingContractCostParamsCpuInstructions: ConfigSettingId;
    static readonly configSettingContractCostParamsMemoryBytes: ConfigSettingId;
    static readonly configSettingContractDataKeySizeBytes: ConfigSettingId;
    static readonly configSettingContractDataEntrySizeBytes: ConfigSettingId;
    static readonly configSettingStateArchival: ConfigSettingId;
    static readonly configSettingContractExecutionLanes: ConfigSettingId;
    static readonly configSettingLiveSorobanStateSizeWindow: ConfigSettingId;
    static readonly configSettingEvictionIterator: ConfigSettingId;
    static readonly configSettingContractParallelComputeV0: ConfigSettingId;
    static readonly configSettingContractLedgerCostExtV0: ConfigSettingId;
    static readonly configSettingScpTiming: ConfigSettingId;
    static readonly configSettingFrozenLedgerKeys: ConfigSettingId;
    static readonly configSettingFrozenLedgerKeysDelta: ConfigSettingId;
    static readonly configSettingFreezeBypassTxs: ConfigSettingId;
    static readonly configSettingFreezeBypassTxsDelta: ConfigSettingId;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly configSettingContractMaxSizeBytes: 0;
        readonly configSettingContractComputeV0: 1;
        readonly configSettingContractLedgerCostV0: 2;
        readonly configSettingContractHistoricalDataV0: 3;
        readonly configSettingContractEventsV0: 4;
        readonly configSettingContractBandwidthV0: 5;
        readonly configSettingContractCostParamsCpuInstructions: 6;
        readonly configSettingContractCostParamsMemoryBytes: 7;
        readonly configSettingContractDataKeySizeBytes: 8;
        readonly configSettingContractDataEntrySizeBytes: 9;
        readonly configSettingStateArchival: 10;
        readonly configSettingContractExecutionLanes: 11;
        readonly configSettingLiveSorobanStateSizeWindow: 12;
        readonly configSettingEvictionIterator: 13;
        readonly configSettingContractParallelComputeV0: 14;
        readonly configSettingContractLedgerCostExtV0: 15;
        readonly configSettingScpTiming: 16;
        readonly configSettingFrozenLedgerKeys: 17;
        readonly configSettingFrozenLedgerKeysDelta: 18;
        readonly configSettingFreezeBypassTxs: 19;
        readonly configSettingFreezeBypassTxsDelta: 20;
    }>> & {
        readonly kind: "enum";
        readonly name: "ConfigSettingId";
        readonly nameByValue: ReadonlyMap<number, "configSettingContractMaxSizeBytes" | "configSettingContractComputeV0" | "configSettingContractLedgerCostV0" | "configSettingContractHistoricalDataV0" | "configSettingContractEventsV0" | "configSettingContractBandwidthV0" | "configSettingContractCostParamsCpuInstructions" | "configSettingContractCostParamsMemoryBytes" | "configSettingContractDataKeySizeBytes" | "configSettingContractDataEntrySizeBytes" | "configSettingStateArchival" | "configSettingContractExecutionLanes" | "configSettingLiveSorobanStateSizeWindow" | "configSettingEvictionIterator" | "configSettingContractParallelComputeV0" | "configSettingContractLedgerCostExtV0" | "configSettingScpTiming" | "configSettingFrozenLedgerKeys" | "configSettingFrozenLedgerKeysDelta" | "configSettingFreezeBypassTxs" | "configSettingFreezeBypassTxsDelta">;
    } & {
        readonly configSettingContractMaxSizeBytes: 0;
        readonly configSettingContractComputeV0: 1;
        readonly configSettingContractLedgerCostV0: 2;
        readonly configSettingContractHistoricalDataV0: 3;
        readonly configSettingContractEventsV0: 4;
        readonly configSettingContractBandwidthV0: 5;
        readonly configSettingContractCostParamsCpuInstructions: 6;
        readonly configSettingContractCostParamsMemoryBytes: 7;
        readonly configSettingContractDataKeySizeBytes: 8;
        readonly configSettingContractDataEntrySizeBytes: 9;
        readonly configSettingStateArchival: 10;
        readonly configSettingContractExecutionLanes: 11;
        readonly configSettingLiveSorobanStateSizeWindow: 12;
        readonly configSettingEvictionIterator: 13;
        readonly configSettingContractParallelComputeV0: 14;
        readonly configSettingContractLedgerCostExtV0: 15;
        readonly configSettingScpTiming: 16;
        readonly configSettingFrozenLedgerKeys: 17;
        readonly configSettingFrozenLedgerKeysDelta: 18;
        readonly configSettingFreezeBypassTxs: 19;
        readonly configSettingFreezeBypassTxsDelta: 20;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ConfigSettingId;
    static fromName(name: ConfigSettingIdName): ConfigSettingId;
    static fromXdrObject(wire: number): ConfigSettingId;
}
