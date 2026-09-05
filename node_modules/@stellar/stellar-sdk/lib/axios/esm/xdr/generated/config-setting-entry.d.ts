import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ConfigSettingContractComputeV0, type ConfigSettingContractComputeV0Wire } from "./config-setting-contract-compute-v0.js";
import { ConfigSettingContractLedgerCostV0, type ConfigSettingContractLedgerCostV0Wire } from "./config-setting-contract-ledger-cost-v0.js";
import { ConfigSettingContractHistoricalDataV0, type ConfigSettingContractHistoricalDataV0Wire } from "./config-setting-contract-historical-data-v0.js";
import { ConfigSettingContractEventsV0, type ConfigSettingContractEventsV0Wire } from "./config-setting-contract-events-v0.js";
import { ConfigSettingContractBandwidthV0, type ConfigSettingContractBandwidthV0Wire } from "./config-setting-contract-bandwidth-v0.js";
import { ContractCostParamEntry, type ContractCostParamEntryWire } from "./contract-cost-param-entry.js";
import { StateArchivalSettings, type StateArchivalSettingsWire } from "./state-archival-settings.js";
import { ConfigSettingContractExecutionLanesV0, type ConfigSettingContractExecutionLanesV0Wire } from "./config-setting-contract-execution-lanes-v0.js";
import { EvictionIterator, type EvictionIteratorWire } from "./eviction-iterator.js";
import { ConfigSettingContractParallelComputeV0, type ConfigSettingContractParallelComputeV0Wire } from "./config-setting-contract-parallel-compute-v0.js";
import { ConfigSettingContractLedgerCostExtV0, type ConfigSettingContractLedgerCostExtV0Wire } from "./config-setting-contract-ledger-cost-ext-v0.js";
import { ConfigSettingScpTiming, type ConfigSettingScpTimingWire } from "./config-setting-scp-timing.js";
import { FrozenLedgerKeys, type FrozenLedgerKeysWire } from "./frozen-ledger-keys.js";
import { FrozenLedgerKeysDelta, type FrozenLedgerKeysDeltaWire } from "./frozen-ledger-keys-delta.js";
import { FreezeBypassTxs, type FreezeBypassTxsWire } from "./freeze-bypass-txs.js";
import { FreezeBypassTxsDelta, type FreezeBypassTxsDeltaWire } from "./freeze-bypass-txs-delta.js";
export type ConfigSettingEntryWire = {
    configSettingID: 0;
    contractMaxSizeBytes: number;
} | {
    configSettingID: 1;
    contractCompute: ConfigSettingContractComputeV0Wire;
} | {
    configSettingID: 2;
    contractLedgerCost: ConfigSettingContractLedgerCostV0Wire;
} | {
    configSettingID: 3;
    contractHistoricalData: ConfigSettingContractHistoricalDataV0Wire;
} | {
    configSettingID: 4;
    contractEvents: ConfigSettingContractEventsV0Wire;
} | {
    configSettingID: 5;
    contractBandwidth: ConfigSettingContractBandwidthV0Wire;
} | {
    configSettingID: 6;
    contractCostParamsCpuInsns: ContractCostParamEntryWire[];
} | {
    configSettingID: 7;
    contractCostParamsMemBytes: ContractCostParamEntryWire[];
} | {
    configSettingID: 8;
    contractDataKeySizeBytes: number;
} | {
    configSettingID: 9;
    contractDataEntrySizeBytes: number;
} | {
    configSettingID: 10;
    stateArchivalSettings: StateArchivalSettingsWire;
} | {
    configSettingID: 11;
    contractExecutionLanes: ConfigSettingContractExecutionLanesV0Wire;
} | {
    configSettingID: 12;
    liveSorobanStateSizeWindow: bigint[];
} | {
    configSettingID: 13;
    evictionIterator: EvictionIteratorWire;
} | {
    configSettingID: 14;
    contractParallelCompute: ConfigSettingContractParallelComputeV0Wire;
} | {
    configSettingID: 15;
    contractLedgerCostExt: ConfigSettingContractLedgerCostExtV0Wire;
} | {
    configSettingID: 16;
    contractScpTiming: ConfigSettingScpTimingWire;
} | {
    configSettingID: 17;
    frozenLedgerKeys: FrozenLedgerKeysWire;
} | {
    configSettingID: 18;
    frozenLedgerKeysDelta: FrozenLedgerKeysDeltaWire;
} | {
    configSettingID: 19;
    freezeBypassTxs: FreezeBypassTxsWire;
} | {
    configSettingID: 20;
    freezeBypassTxsDelta: FreezeBypassTxsDeltaWire;
};
export type ConfigSettingEntryVariantName = "configSettingContractMaxSizeBytes" | "configSettingContractComputeV0" | "configSettingContractLedgerCostV0" | "configSettingContractHistoricalDataV0" | "configSettingContractEventsV0" | "configSettingContractBandwidthV0" | "configSettingContractCostParamsCpuInstructions" | "configSettingContractCostParamsMemoryBytes" | "configSettingContractDataKeySizeBytes" | "configSettingContractDataEntrySizeBytes" | "configSettingStateArchival" | "configSettingContractExecutionLanes" | "configSettingLiveSorobanStateSizeWindow" | "configSettingEvictionIterator" | "configSettingContractParallelComputeV0" | "configSettingContractLedgerCostExtV0" | "configSettingScpTiming" | "configSettingFrozenLedgerKeys" | "configSettingFrozenLedgerKeysDelta" | "configSettingFreezeBypassTxs" | "configSettingFreezeBypassTxsDelta";
/**
 * ```xdr
 * union ConfigSettingEntry switch (ConfigSettingID configSettingID)
 * {
 * case CONFIG_SETTING_CONTRACT_MAX_SIZE_BYTES:
 *     uint32 contractMaxSizeBytes;
 * case CONFIG_SETTING_CONTRACT_COMPUTE_V0:
 *     ConfigSettingContractComputeV0 contractCompute;
 * case CONFIG_SETTING_CONTRACT_LEDGER_COST_V0:
 *     ConfigSettingContractLedgerCostV0 contractLedgerCost;
 * case CONFIG_SETTING_CONTRACT_HISTORICAL_DATA_V0:
 *     ConfigSettingContractHistoricalDataV0 contractHistoricalData;
 * case CONFIG_SETTING_CONTRACT_EVENTS_V0:
 *     ConfigSettingContractEventsV0 contractEvents;
 * case CONFIG_SETTING_CONTRACT_BANDWIDTH_V0:
 *     ConfigSettingContractBandwidthV0 contractBandwidth;
 * case CONFIG_SETTING_CONTRACT_COST_PARAMS_CPU_INSTRUCTIONS:
 *     ContractCostParams contractCostParamsCpuInsns;
 * case CONFIG_SETTING_CONTRACT_COST_PARAMS_MEMORY_BYTES:
 *     ContractCostParams contractCostParamsMemBytes;
 * case CONFIG_SETTING_CONTRACT_DATA_KEY_SIZE_BYTES:
 *     uint32 contractDataKeySizeBytes;
 * case CONFIG_SETTING_CONTRACT_DATA_ENTRY_SIZE_BYTES:
 *     uint32 contractDataEntrySizeBytes;
 * case CONFIG_SETTING_STATE_ARCHIVAL:
 *     StateArchivalSettings stateArchivalSettings;
 * case CONFIG_SETTING_CONTRACT_EXECUTION_LANES:
 *     ConfigSettingContractExecutionLanesV0 contractExecutionLanes;
 * case CONFIG_SETTING_LIVE_SOROBAN_STATE_SIZE_WINDOW:
 *     uint64 liveSorobanStateSizeWindow<>;
 * case CONFIG_SETTING_EVICTION_ITERATOR:
 *     EvictionIterator evictionIterator;
 * case CONFIG_SETTING_CONTRACT_PARALLEL_COMPUTE_V0:
 *     ConfigSettingContractParallelComputeV0 contractParallelCompute;
 * case CONFIG_SETTING_CONTRACT_LEDGER_COST_EXT_V0:
 *     ConfigSettingContractLedgerCostExtV0 contractLedgerCostExt;
 * case CONFIG_SETTING_SCP_TIMING:
 *     ConfigSettingSCPTiming contractSCPTiming;
 * case CONFIG_SETTING_FROZEN_LEDGER_KEYS:
 *     FrozenLedgerKeys frozenLedgerKeys;
 * case CONFIG_SETTING_FROZEN_LEDGER_KEYS_DELTA:
 *     FrozenLedgerKeysDelta frozenLedgerKeysDelta;
 * case CONFIG_SETTING_FREEZE_BYPASS_TXS:
 *     FreezeBypassTxs freezeBypassTxs;
 * case CONFIG_SETTING_FREEZE_BYPASS_TXS_DELTA:
 *     FreezeBypassTxsDelta freezeBypassTxsDelta;
 * };
 * ```
 */
declare abstract class ConfigSettingEntryBase extends XdrValue {
    abstract readonly type: ConfigSettingEntryVariantName;
    constructor();
    static readonly schema: XdrType<ConfigSettingEntryWire>;
    static configSettingContractMaxSizeBytes(contractMaxSizeBytes: number): ConfigSettingEntryContractMaxSizeBytes;
    static configSettingContractComputeV0(contractCompute: ConfigSettingContractComputeV0): ConfigSettingEntryContractComputeV0;
    static configSettingContractLedgerCostV0(contractLedgerCost: ConfigSettingContractLedgerCostV0): ConfigSettingEntryContractLedgerCostV0;
    static configSettingContractHistoricalDataV0(contractHistoricalData: ConfigSettingContractHistoricalDataV0): ConfigSettingEntryContractHistoricalDataV0;
    static configSettingContractEventsV0(contractEvents: ConfigSettingContractEventsV0): ConfigSettingEntryContractEventsV0;
    static configSettingContractBandwidthV0(contractBandwidth: ConfigSettingContractBandwidthV0): ConfigSettingEntryContractBandwidthV0;
    static configSettingContractCostParamsCpuInstructions(contractCostParamsCpuInsns: ContractCostParamEntry[]): ConfigSettingEntryContractCostParamsCpuInstructions;
    static configSettingContractCostParamsMemoryBytes(contractCostParamsMemBytes: ContractCostParamEntry[]): ConfigSettingEntryContractCostParamsMemoryBytes;
    static configSettingContractDataKeySizeBytes(contractDataKeySizeBytes: number): ConfigSettingEntryContractDataKeySizeBytes;
    static configSettingContractDataEntrySizeBytes(contractDataEntrySizeBytes: number): ConfigSettingEntryContractDataEntrySizeBytes;
    static configSettingStateArchival(stateArchivalSettings: StateArchivalSettings): ConfigSettingEntryStateArchival;
    static configSettingContractExecutionLanes(contractExecutionLanes: ConfigSettingContractExecutionLanesV0): ConfigSettingEntryContractExecutionLanes;
    static configSettingLiveSorobanStateSizeWindow(liveSorobanStateSizeWindow: bigint[]): ConfigSettingEntryLiveSorobanStateSizeWindow;
    static configSettingEvictionIterator(evictionIterator: EvictionIterator): ConfigSettingEntryEvictionIterator;
    static configSettingContractParallelComputeV0(contractParallelCompute: ConfigSettingContractParallelComputeV0): ConfigSettingEntryContractParallelComputeV0;
    static configSettingContractLedgerCostExtV0(contractLedgerCostExt: ConfigSettingContractLedgerCostExtV0): ConfigSettingEntryContractLedgerCostExtV0;
    static configSettingScpTiming(contractScpTiming: ConfigSettingScpTiming): ConfigSettingEntryScpTiming;
    static configSettingFrozenLedgerKeys(frozenLedgerKeys: FrozenLedgerKeys): ConfigSettingEntryFrozenLedgerKeys;
    static configSettingFrozenLedgerKeysDelta(frozenLedgerKeysDelta: FrozenLedgerKeysDelta): ConfigSettingEntryFrozenLedgerKeysDelta;
    static configSettingFreezeBypassTxs(freezeBypassTxs: FreezeBypassTxs): ConfigSettingEntryFreezeBypassTxs;
    static configSettingFreezeBypassTxsDelta(freezeBypassTxsDelta: FreezeBypassTxsDelta): ConfigSettingEntryFreezeBypassTxsDelta;
    static fromXdrObject(wire: ConfigSettingEntryWire): ConfigSettingEntry;
    /**
     * Type guard narrowing an unknown value to a concrete ConfigSettingEntry variant.
     * Use this instead of `instanceof ConfigSettingEntry`: the exported `ConfigSettingEntry` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ConfigSettingEntry.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ConfigSettingEntry;
    abstract toXdrObject(): ConfigSettingEntryWire;
}
export declare class ConfigSettingEntryContractMaxSizeBytes extends ConfigSettingEntryBase {
    readonly type: "configSettingContractMaxSizeBytes";
    readonly contractMaxSizeBytes: number;
    constructor(contractMaxSizeBytes: number);
    get value(): number;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 0;
    }>;
}
export declare class ConfigSettingEntryContractComputeV0 extends ConfigSettingEntryBase {
    readonly type: "configSettingContractComputeV0";
    readonly contractCompute: ConfigSettingContractComputeV0;
    constructor(contractCompute: ConfigSettingContractComputeV0);
    get value(): ConfigSettingContractComputeV0;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 1;
    }>;
}
export declare class ConfigSettingEntryContractLedgerCostV0 extends ConfigSettingEntryBase {
    readonly type: "configSettingContractLedgerCostV0";
    readonly contractLedgerCost: ConfigSettingContractLedgerCostV0;
    constructor(contractLedgerCost: ConfigSettingContractLedgerCostV0);
    get value(): ConfigSettingContractLedgerCostV0;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 2;
    }>;
}
export declare class ConfigSettingEntryContractHistoricalDataV0 extends ConfigSettingEntryBase {
    readonly type: "configSettingContractHistoricalDataV0";
    readonly contractHistoricalData: ConfigSettingContractHistoricalDataV0;
    constructor(contractHistoricalData: ConfigSettingContractHistoricalDataV0);
    get value(): ConfigSettingContractHistoricalDataV0;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 3;
    }>;
}
export declare class ConfigSettingEntryContractEventsV0 extends ConfigSettingEntryBase {
    readonly type: "configSettingContractEventsV0";
    readonly contractEvents: ConfigSettingContractEventsV0;
    constructor(contractEvents: ConfigSettingContractEventsV0);
    get value(): ConfigSettingContractEventsV0;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 4;
    }>;
}
export declare class ConfigSettingEntryContractBandwidthV0 extends ConfigSettingEntryBase {
    readonly type: "configSettingContractBandwidthV0";
    readonly contractBandwidth: ConfigSettingContractBandwidthV0;
    constructor(contractBandwidth: ConfigSettingContractBandwidthV0);
    get value(): ConfigSettingContractBandwidthV0;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 5;
    }>;
}
export declare class ConfigSettingEntryContractCostParamsCpuInstructions extends ConfigSettingEntryBase {
    readonly type: "configSettingContractCostParamsCpuInstructions";
    readonly contractCostParamsCpuInsns: ContractCostParamEntry[];
    constructor(contractCostParamsCpuInsns: ContractCostParamEntry[]);
    get value(): ContractCostParamEntry[];
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 6;
    }>;
}
export declare class ConfigSettingEntryContractCostParamsMemoryBytes extends ConfigSettingEntryBase {
    readonly type: "configSettingContractCostParamsMemoryBytes";
    readonly contractCostParamsMemBytes: ContractCostParamEntry[];
    constructor(contractCostParamsMemBytes: ContractCostParamEntry[]);
    get value(): ContractCostParamEntry[];
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 7;
    }>;
}
export declare class ConfigSettingEntryContractDataKeySizeBytes extends ConfigSettingEntryBase {
    readonly type: "configSettingContractDataKeySizeBytes";
    readonly contractDataKeySizeBytes: number;
    constructor(contractDataKeySizeBytes: number);
    get value(): number;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 8;
    }>;
}
export declare class ConfigSettingEntryContractDataEntrySizeBytes extends ConfigSettingEntryBase {
    readonly type: "configSettingContractDataEntrySizeBytes";
    readonly contractDataEntrySizeBytes: number;
    constructor(contractDataEntrySizeBytes: number);
    get value(): number;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 9;
    }>;
}
export declare class ConfigSettingEntryStateArchival extends ConfigSettingEntryBase {
    readonly type: "configSettingStateArchival";
    readonly stateArchivalSettings: StateArchivalSettings;
    constructor(stateArchivalSettings: StateArchivalSettings);
    get value(): StateArchivalSettings;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 10;
    }>;
}
export declare class ConfigSettingEntryContractExecutionLanes extends ConfigSettingEntryBase {
    readonly type: "configSettingContractExecutionLanes";
    readonly contractExecutionLanes: ConfigSettingContractExecutionLanesV0;
    constructor(contractExecutionLanes: ConfigSettingContractExecutionLanesV0);
    get value(): ConfigSettingContractExecutionLanesV0;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 11;
    }>;
}
export declare class ConfigSettingEntryLiveSorobanStateSizeWindow extends ConfigSettingEntryBase {
    readonly type: "configSettingLiveSorobanStateSizeWindow";
    readonly liveSorobanStateSizeWindow: bigint[];
    constructor(liveSorobanStateSizeWindow: bigint[]);
    get value(): bigint[];
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 12;
    }>;
}
export declare class ConfigSettingEntryEvictionIterator extends ConfigSettingEntryBase {
    readonly type: "configSettingEvictionIterator";
    readonly evictionIterator: EvictionIterator;
    constructor(evictionIterator: EvictionIterator);
    get value(): EvictionIterator;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 13;
    }>;
}
export declare class ConfigSettingEntryContractParallelComputeV0 extends ConfigSettingEntryBase {
    readonly type: "configSettingContractParallelComputeV0";
    readonly contractParallelCompute: ConfigSettingContractParallelComputeV0;
    constructor(contractParallelCompute: ConfigSettingContractParallelComputeV0);
    get value(): ConfigSettingContractParallelComputeV0;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 14;
    }>;
}
export declare class ConfigSettingEntryContractLedgerCostExtV0 extends ConfigSettingEntryBase {
    readonly type: "configSettingContractLedgerCostExtV0";
    readonly contractLedgerCostExt: ConfigSettingContractLedgerCostExtV0;
    constructor(contractLedgerCostExt: ConfigSettingContractLedgerCostExtV0);
    get value(): ConfigSettingContractLedgerCostExtV0;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 15;
    }>;
}
export declare class ConfigSettingEntryScpTiming extends ConfigSettingEntryBase {
    readonly type: "configSettingScpTiming";
    readonly contractScpTiming: ConfigSettingScpTiming;
    constructor(contractScpTiming: ConfigSettingScpTiming);
    get value(): ConfigSettingScpTiming;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 16;
    }>;
}
export declare class ConfigSettingEntryFrozenLedgerKeys extends ConfigSettingEntryBase {
    readonly type: "configSettingFrozenLedgerKeys";
    readonly frozenLedgerKeys: FrozenLedgerKeys;
    constructor(frozenLedgerKeys: FrozenLedgerKeys);
    get value(): FrozenLedgerKeys;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 17;
    }>;
}
export declare class ConfigSettingEntryFrozenLedgerKeysDelta extends ConfigSettingEntryBase {
    readonly type: "configSettingFrozenLedgerKeysDelta";
    readonly frozenLedgerKeysDelta: FrozenLedgerKeysDelta;
    constructor(frozenLedgerKeysDelta: FrozenLedgerKeysDelta);
    get value(): FrozenLedgerKeysDelta;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 18;
    }>;
}
export declare class ConfigSettingEntryFreezeBypassTxs extends ConfigSettingEntryBase {
    readonly type: "configSettingFreezeBypassTxs";
    readonly freezeBypassTxs: FreezeBypassTxs;
    constructor(freezeBypassTxs: FreezeBypassTxs);
    get value(): FreezeBypassTxs;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 19;
    }>;
}
export declare class ConfigSettingEntryFreezeBypassTxsDelta extends ConfigSettingEntryBase {
    readonly type: "configSettingFreezeBypassTxsDelta";
    readonly freezeBypassTxsDelta: FreezeBypassTxsDelta;
    constructor(freezeBypassTxsDelta: FreezeBypassTxsDelta);
    get value(): FreezeBypassTxsDelta;
    toXdrObject(): Extract<ConfigSettingEntryWire, {
        configSettingID: 20;
    }>;
}
export type ConfigSettingEntry = ConfigSettingEntryContractMaxSizeBytes | ConfigSettingEntryContractComputeV0 | ConfigSettingEntryContractLedgerCostV0 | ConfigSettingEntryContractHistoricalDataV0 | ConfigSettingEntryContractEventsV0 | ConfigSettingEntryContractBandwidthV0 | ConfigSettingEntryContractCostParamsCpuInstructions | ConfigSettingEntryContractCostParamsMemoryBytes | ConfigSettingEntryContractDataKeySizeBytes | ConfigSettingEntryContractDataEntrySizeBytes | ConfigSettingEntryStateArchival | ConfigSettingEntryContractExecutionLanes | ConfigSettingEntryLiveSorobanStateSizeWindow | ConfigSettingEntryEvictionIterator | ConfigSettingEntryContractParallelComputeV0 | ConfigSettingEntryContractLedgerCostExtV0 | ConfigSettingEntryScpTiming | ConfigSettingEntryFrozenLedgerKeys | ConfigSettingEntryFrozenLedgerKeysDelta | ConfigSettingEntryFreezeBypassTxs | ConfigSettingEntryFreezeBypassTxsDelta;
export declare const ConfigSettingEntry: typeof ConfigSettingEntryBase;
export {};
