import { union, case as _case, field, uint32, array, uint64, UNBOUNDED_MAX_LENGTH, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ConfigSettingId } from './config-setting-id.js';
import { ConfigSettingContractComputeV0 } from './config-setting-contract-compute-v0.js';
import { ConfigSettingContractLedgerCostV0 } from './config-setting-contract-ledger-cost-v0.js';
import { ConfigSettingContractHistoricalDataV0 } from './config-setting-contract-historical-data-v0.js';
import { ConfigSettingContractEventsV0 } from './config-setting-contract-events-v0.js';
import { ConfigSettingContractBandwidthV0 } from './config-setting-contract-bandwidth-v0.js';
import { ContractCostParamEntry } from './contract-cost-param-entry.js';
import { StateArchivalSettings } from './state-archival-settings.js';
import { ConfigSettingContractExecutionLanesV0 } from './config-setting-contract-execution-lanes-v0.js';
import { EvictionIterator } from './eviction-iterator.js';
import { ConfigSettingContractParallelComputeV0 } from './config-setting-contract-parallel-compute-v0.js';
import { ConfigSettingContractLedgerCostExtV0 } from './config-setting-contract-ledger-cost-ext-v0.js';
import { ConfigSettingScpTiming } from './config-setting-scp-timing.js';
import { FrozenLedgerKeys } from './frozen-ledger-keys.js';
import { FrozenLedgerKeysDelta } from './frozen-ledger-keys-delta.js';
import { FreezeBypassTxs } from './freeze-bypass-txs.js';
import { FreezeBypassTxsDelta } from './freeze-bypass-txs-delta.js';

class ConfigSettingEntryBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ConfigSettingEntryBase) {
      throw new TypeError(
        "new xdr.ConfigSettingEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ConfigSettingEntry.configSettingContractMaxSizeBytes(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ConfigSettingEntry",
    {
      switchOn: ConfigSettingId.schema,
      cases: [
        _case(
          "configSettingContractMaxSizeBytes",
          0,
          field("contractMaxSizeBytes", uint32())
        ),
        _case(
          "configSettingContractComputeV0",
          1,
          field("contractCompute", ConfigSettingContractComputeV0.schema)
        ),
        _case(
          "configSettingContractLedgerCostV0",
          2,
          field("contractLedgerCost", ConfigSettingContractLedgerCostV0.schema)
        ),
        _case(
          "configSettingContractHistoricalDataV0",
          3,
          field(
            "contractHistoricalData",
            ConfigSettingContractHistoricalDataV0.schema
          )
        ),
        _case(
          "configSettingContractEventsV0",
          4,
          field("contractEvents", ConfigSettingContractEventsV0.schema)
        ),
        _case(
          "configSettingContractBandwidthV0",
          5,
          field("contractBandwidth", ConfigSettingContractBandwidthV0.schema)
        ),
        _case(
          "configSettingContractCostParamsCpuInstructions",
          6,
          field(
            "contractCostParamsCpuInsns",
            array(ContractCostParamEntry.schema, 1024)
          )
        ),
        _case(
          "configSettingContractCostParamsMemoryBytes",
          7,
          field(
            "contractCostParamsMemBytes",
            array(ContractCostParamEntry.schema, 1024)
          )
        ),
        _case(
          "configSettingContractDataKeySizeBytes",
          8,
          field("contractDataKeySizeBytes", uint32())
        ),
        _case(
          "configSettingContractDataEntrySizeBytes",
          9,
          field("contractDataEntrySizeBytes", uint32())
        ),
        _case(
          "configSettingStateArchival",
          10,
          field("stateArchivalSettings", StateArchivalSettings.schema)
        ),
        _case(
          "configSettingContractExecutionLanes",
          11,
          field(
            "contractExecutionLanes",
            ConfigSettingContractExecutionLanesV0.schema
          )
        ),
        _case(
          "configSettingLiveSorobanStateSizeWindow",
          12,
          field(
            "liveSorobanStateSizeWindow",
            array(uint64(), UNBOUNDED_MAX_LENGTH)
          )
        ),
        _case(
          "configSettingEvictionIterator",
          13,
          field("evictionIterator", EvictionIterator.schema)
        ),
        _case(
          "configSettingContractParallelComputeV0",
          14,
          field(
            "contractParallelCompute",
            ConfigSettingContractParallelComputeV0.schema
          )
        ),
        _case(
          "configSettingContractLedgerCostExtV0",
          15,
          field(
            "contractLedgerCostExt",
            ConfigSettingContractLedgerCostExtV0.schema
          )
        ),
        _case(
          "configSettingScpTiming",
          16,
          field("contractScpTiming", ConfigSettingScpTiming.schema)
        ),
        _case(
          "configSettingFrozenLedgerKeys",
          17,
          field("frozenLedgerKeys", FrozenLedgerKeys.schema)
        ),
        _case(
          "configSettingFrozenLedgerKeysDelta",
          18,
          field("frozenLedgerKeysDelta", FrozenLedgerKeysDelta.schema)
        ),
        _case(
          "configSettingFreezeBypassTxs",
          19,
          field("freezeBypassTxs", FreezeBypassTxs.schema)
        ),
        _case(
          "configSettingFreezeBypassTxsDelta",
          20,
          field("freezeBypassTxsDelta", FreezeBypassTxsDelta.schema)
        )
      ],
      switchKey: "configSettingID"
    }
  );
  static configSettingContractMaxSizeBytes(contractMaxSizeBytes) {
    return new ConfigSettingEntryContractMaxSizeBytes(contractMaxSizeBytes);
  }
  static configSettingContractComputeV0(contractCompute) {
    return new ConfigSettingEntryContractComputeV0(contractCompute);
  }
  static configSettingContractLedgerCostV0(contractLedgerCost) {
    return new ConfigSettingEntryContractLedgerCostV0(contractLedgerCost);
  }
  static configSettingContractHistoricalDataV0(contractHistoricalData) {
    return new ConfigSettingEntryContractHistoricalDataV0(
      contractHistoricalData
    );
  }
  static configSettingContractEventsV0(contractEvents) {
    return new ConfigSettingEntryContractEventsV0(contractEvents);
  }
  static configSettingContractBandwidthV0(contractBandwidth) {
    return new ConfigSettingEntryContractBandwidthV0(contractBandwidth);
  }
  static configSettingContractCostParamsCpuInstructions(contractCostParamsCpuInsns) {
    return new ConfigSettingEntryContractCostParamsCpuInstructions(
      contractCostParamsCpuInsns
    );
  }
  static configSettingContractCostParamsMemoryBytes(contractCostParamsMemBytes) {
    return new ConfigSettingEntryContractCostParamsMemoryBytes(
      contractCostParamsMemBytes
    );
  }
  static configSettingContractDataKeySizeBytes(contractDataKeySizeBytes) {
    return new ConfigSettingEntryContractDataKeySizeBytes(
      contractDataKeySizeBytes
    );
  }
  static configSettingContractDataEntrySizeBytes(contractDataEntrySizeBytes) {
    return new ConfigSettingEntryContractDataEntrySizeBytes(
      contractDataEntrySizeBytes
    );
  }
  static configSettingStateArchival(stateArchivalSettings) {
    return new ConfigSettingEntryStateArchival(stateArchivalSettings);
  }
  static configSettingContractExecutionLanes(contractExecutionLanes) {
    return new ConfigSettingEntryContractExecutionLanes(contractExecutionLanes);
  }
  static configSettingLiveSorobanStateSizeWindow(liveSorobanStateSizeWindow) {
    return new ConfigSettingEntryLiveSorobanStateSizeWindow(
      liveSorobanStateSizeWindow
    );
  }
  static configSettingEvictionIterator(evictionIterator) {
    return new ConfigSettingEntryEvictionIterator(evictionIterator);
  }
  static configSettingContractParallelComputeV0(contractParallelCompute) {
    return new ConfigSettingEntryContractParallelComputeV0(
      contractParallelCompute
    );
  }
  static configSettingContractLedgerCostExtV0(contractLedgerCostExt) {
    return new ConfigSettingEntryContractLedgerCostExtV0(contractLedgerCostExt);
  }
  static configSettingScpTiming(contractScpTiming) {
    return new ConfigSettingEntryScpTiming(contractScpTiming);
  }
  static configSettingFrozenLedgerKeys(frozenLedgerKeys) {
    return new ConfigSettingEntryFrozenLedgerKeys(frozenLedgerKeys);
  }
  static configSettingFrozenLedgerKeysDelta(frozenLedgerKeysDelta) {
    return new ConfigSettingEntryFrozenLedgerKeysDelta(frozenLedgerKeysDelta);
  }
  static configSettingFreezeBypassTxs(freezeBypassTxs) {
    return new ConfigSettingEntryFreezeBypassTxs(freezeBypassTxs);
  }
  static configSettingFreezeBypassTxsDelta(freezeBypassTxsDelta) {
    return new ConfigSettingEntryFreezeBypassTxsDelta(freezeBypassTxsDelta);
  }
  static fromXdrObject(wire) {
    switch (wire.configSettingID) {
      case 0:
        return new ConfigSettingEntryContractMaxSizeBytes(
          wire.contractMaxSizeBytes
        );
      case 1:
        return new ConfigSettingEntryContractComputeV0(
          ConfigSettingContractComputeV0.fromXdrObject(wire.contractCompute)
        );
      case 2:
        return new ConfigSettingEntryContractLedgerCostV0(
          ConfigSettingContractLedgerCostV0.fromXdrObject(
            wire.contractLedgerCost
          )
        );
      case 3:
        return new ConfigSettingEntryContractHistoricalDataV0(
          ConfigSettingContractHistoricalDataV0.fromXdrObject(
            wire.contractHistoricalData
          )
        );
      case 4:
        return new ConfigSettingEntryContractEventsV0(
          ConfigSettingContractEventsV0.fromXdrObject(wire.contractEvents)
        );
      case 5:
        return new ConfigSettingEntryContractBandwidthV0(
          ConfigSettingContractBandwidthV0.fromXdrObject(
            wire.contractBandwidth
          )
        );
      case 6:
        return new ConfigSettingEntryContractCostParamsCpuInstructions(
          wire.contractCostParamsCpuInsns.map(
            (w) => ContractCostParamEntry.fromXdrObject(w)
          )
        );
      case 7:
        return new ConfigSettingEntryContractCostParamsMemoryBytes(
          wire.contractCostParamsMemBytes.map(
            (w) => ContractCostParamEntry.fromXdrObject(w)
          )
        );
      case 8:
        return new ConfigSettingEntryContractDataKeySizeBytes(
          wire.contractDataKeySizeBytes
        );
      case 9:
        return new ConfigSettingEntryContractDataEntrySizeBytes(
          wire.contractDataEntrySizeBytes
        );
      case 10:
        return new ConfigSettingEntryStateArchival(
          StateArchivalSettings.fromXdrObject(wire.stateArchivalSettings)
        );
      case 11:
        return new ConfigSettingEntryContractExecutionLanes(
          ConfigSettingContractExecutionLanesV0.fromXdrObject(
            wire.contractExecutionLanes
          )
        );
      case 12:
        return new ConfigSettingEntryLiveSorobanStateSizeWindow(
          wire.liveSorobanStateSizeWindow
        );
      case 13:
        return new ConfigSettingEntryEvictionIterator(
          EvictionIterator.fromXdrObject(wire.evictionIterator)
        );
      case 14:
        return new ConfigSettingEntryContractParallelComputeV0(
          ConfigSettingContractParallelComputeV0.fromXdrObject(
            wire.contractParallelCompute
          )
        );
      case 15:
        return new ConfigSettingEntryContractLedgerCostExtV0(
          ConfigSettingContractLedgerCostExtV0.fromXdrObject(
            wire.contractLedgerCostExt
          )
        );
      case 16:
        return new ConfigSettingEntryScpTiming(
          ConfigSettingScpTiming.fromXdrObject(wire.contractScpTiming)
        );
      case 17:
        return new ConfigSettingEntryFrozenLedgerKeys(
          FrozenLedgerKeys.fromXdrObject(wire.frozenLedgerKeys)
        );
      case 18:
        return new ConfigSettingEntryFrozenLedgerKeysDelta(
          FrozenLedgerKeysDelta.fromXdrObject(wire.frozenLedgerKeysDelta)
        );
      case 19:
        return new ConfigSettingEntryFreezeBypassTxs(
          FreezeBypassTxs.fromXdrObject(wire.freezeBypassTxs)
        );
      case 20:
        return new ConfigSettingEntryFreezeBypassTxsDelta(
          FreezeBypassTxsDelta.fromXdrObject(wire.freezeBypassTxsDelta)
        );
    }
    throw new XdrError(
      `ConfigSettingEntry: unknown configSettingID ${wire.configSettingID}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ConfigSettingEntry variant.
   * Use this instead of `instanceof ConfigSettingEntry`: the exported `ConfigSettingEntry` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ConfigSettingEntry.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ConfigSettingEntryBase;
  }
}
class ConfigSettingEntryContractMaxSizeBytes extends ConfigSettingEntryBase {
  type = "configSettingContractMaxSizeBytes";
  contractMaxSizeBytes;
  constructor(contractMaxSizeBytes) {
    super();
    this.contractMaxSizeBytes = contractMaxSizeBytes;
  }
  get value() {
    return this.contractMaxSizeBytes;
  }
  toXdrObject() {
    return {
      configSettingID: 0,
      contractMaxSizeBytes: this.contractMaxSizeBytes
    };
  }
}
class ConfigSettingEntryContractComputeV0 extends ConfigSettingEntryBase {
  type = "configSettingContractComputeV0";
  contractCompute;
  constructor(contractCompute) {
    super();
    this.contractCompute = contractCompute;
  }
  get value() {
    return this.contractCompute;
  }
  toXdrObject() {
    return {
      configSettingID: 1,
      contractCompute: this.contractCompute.toXdrObject()
    };
  }
}
class ConfigSettingEntryContractLedgerCostV0 extends ConfigSettingEntryBase {
  type = "configSettingContractLedgerCostV0";
  contractLedgerCost;
  constructor(contractLedgerCost) {
    super();
    this.contractLedgerCost = contractLedgerCost;
  }
  get value() {
    return this.contractLedgerCost;
  }
  toXdrObject() {
    return {
      configSettingID: 2,
      contractLedgerCost: this.contractLedgerCost.toXdrObject()
    };
  }
}
class ConfigSettingEntryContractHistoricalDataV0 extends ConfigSettingEntryBase {
  type = "configSettingContractHistoricalDataV0";
  contractHistoricalData;
  constructor(contractHistoricalData) {
    super();
    this.contractHistoricalData = contractHistoricalData;
  }
  get value() {
    return this.contractHistoricalData;
  }
  toXdrObject() {
    return {
      configSettingID: 3,
      contractHistoricalData: this.contractHistoricalData.toXdrObject()
    };
  }
}
class ConfigSettingEntryContractEventsV0 extends ConfigSettingEntryBase {
  type = "configSettingContractEventsV0";
  contractEvents;
  constructor(contractEvents) {
    super();
    this.contractEvents = contractEvents;
  }
  get value() {
    return this.contractEvents;
  }
  toXdrObject() {
    return {
      configSettingID: 4,
      contractEvents: this.contractEvents.toXdrObject()
    };
  }
}
class ConfigSettingEntryContractBandwidthV0 extends ConfigSettingEntryBase {
  type = "configSettingContractBandwidthV0";
  contractBandwidth;
  constructor(contractBandwidth) {
    super();
    this.contractBandwidth = contractBandwidth;
  }
  get value() {
    return this.contractBandwidth;
  }
  toXdrObject() {
    return {
      configSettingID: 5,
      contractBandwidth: this.contractBandwidth.toXdrObject()
    };
  }
}
class ConfigSettingEntryContractCostParamsCpuInstructions extends ConfigSettingEntryBase {
  type = "configSettingContractCostParamsCpuInstructions";
  contractCostParamsCpuInsns;
  constructor(contractCostParamsCpuInsns) {
    super();
    this.contractCostParamsCpuInsns = contractCostParamsCpuInsns;
  }
  get value() {
    return this.contractCostParamsCpuInsns;
  }
  toXdrObject() {
    return {
      configSettingID: 6,
      contractCostParamsCpuInsns: this.contractCostParamsCpuInsns.map(
        (v) => v.toXdrObject()
      )
    };
  }
}
class ConfigSettingEntryContractCostParamsMemoryBytes extends ConfigSettingEntryBase {
  type = "configSettingContractCostParamsMemoryBytes";
  contractCostParamsMemBytes;
  constructor(contractCostParamsMemBytes) {
    super();
    this.contractCostParamsMemBytes = contractCostParamsMemBytes;
  }
  get value() {
    return this.contractCostParamsMemBytes;
  }
  toXdrObject() {
    return {
      configSettingID: 7,
      contractCostParamsMemBytes: this.contractCostParamsMemBytes.map(
        (v) => v.toXdrObject()
      )
    };
  }
}
class ConfigSettingEntryContractDataKeySizeBytes extends ConfigSettingEntryBase {
  type = "configSettingContractDataKeySizeBytes";
  contractDataKeySizeBytes;
  constructor(contractDataKeySizeBytes) {
    super();
    this.contractDataKeySizeBytes = contractDataKeySizeBytes;
  }
  get value() {
    return this.contractDataKeySizeBytes;
  }
  toXdrObject() {
    return {
      configSettingID: 8,
      contractDataKeySizeBytes: this.contractDataKeySizeBytes
    };
  }
}
class ConfigSettingEntryContractDataEntrySizeBytes extends ConfigSettingEntryBase {
  type = "configSettingContractDataEntrySizeBytes";
  contractDataEntrySizeBytes;
  constructor(contractDataEntrySizeBytes) {
    super();
    this.contractDataEntrySizeBytes = contractDataEntrySizeBytes;
  }
  get value() {
    return this.contractDataEntrySizeBytes;
  }
  toXdrObject() {
    return {
      configSettingID: 9,
      contractDataEntrySizeBytes: this.contractDataEntrySizeBytes
    };
  }
}
class ConfigSettingEntryStateArchival extends ConfigSettingEntryBase {
  type = "configSettingStateArchival";
  stateArchivalSettings;
  constructor(stateArchivalSettings) {
    super();
    this.stateArchivalSettings = stateArchivalSettings;
  }
  get value() {
    return this.stateArchivalSettings;
  }
  toXdrObject() {
    return {
      configSettingID: 10,
      stateArchivalSettings: this.stateArchivalSettings.toXdrObject()
    };
  }
}
class ConfigSettingEntryContractExecutionLanes extends ConfigSettingEntryBase {
  type = "configSettingContractExecutionLanes";
  contractExecutionLanes;
  constructor(contractExecutionLanes) {
    super();
    this.contractExecutionLanes = contractExecutionLanes;
  }
  get value() {
    return this.contractExecutionLanes;
  }
  toXdrObject() {
    return {
      configSettingID: 11,
      contractExecutionLanes: this.contractExecutionLanes.toXdrObject()
    };
  }
}
class ConfigSettingEntryLiveSorobanStateSizeWindow extends ConfigSettingEntryBase {
  type = "configSettingLiveSorobanStateSizeWindow";
  liveSorobanStateSizeWindow;
  constructor(liveSorobanStateSizeWindow) {
    super();
    this.liveSorobanStateSizeWindow = liveSorobanStateSizeWindow;
  }
  get value() {
    return this.liveSorobanStateSizeWindow;
  }
  toXdrObject() {
    return {
      configSettingID: 12,
      liveSorobanStateSizeWindow: this.liveSorobanStateSizeWindow
    };
  }
}
class ConfigSettingEntryEvictionIterator extends ConfigSettingEntryBase {
  type = "configSettingEvictionIterator";
  evictionIterator;
  constructor(evictionIterator) {
    super();
    this.evictionIterator = evictionIterator;
  }
  get value() {
    return this.evictionIterator;
  }
  toXdrObject() {
    return {
      configSettingID: 13,
      evictionIterator: this.evictionIterator.toXdrObject()
    };
  }
}
class ConfigSettingEntryContractParallelComputeV0 extends ConfigSettingEntryBase {
  type = "configSettingContractParallelComputeV0";
  contractParallelCompute;
  constructor(contractParallelCompute) {
    super();
    this.contractParallelCompute = contractParallelCompute;
  }
  get value() {
    return this.contractParallelCompute;
  }
  toXdrObject() {
    return {
      configSettingID: 14,
      contractParallelCompute: this.contractParallelCompute.toXdrObject()
    };
  }
}
class ConfigSettingEntryContractLedgerCostExtV0 extends ConfigSettingEntryBase {
  type = "configSettingContractLedgerCostExtV0";
  contractLedgerCostExt;
  constructor(contractLedgerCostExt) {
    super();
    this.contractLedgerCostExt = contractLedgerCostExt;
  }
  get value() {
    return this.contractLedgerCostExt;
  }
  toXdrObject() {
    return {
      configSettingID: 15,
      contractLedgerCostExt: this.contractLedgerCostExt.toXdrObject()
    };
  }
}
class ConfigSettingEntryScpTiming extends ConfigSettingEntryBase {
  type = "configSettingScpTiming";
  contractScpTiming;
  constructor(contractScpTiming) {
    super();
    this.contractScpTiming = contractScpTiming;
  }
  get value() {
    return this.contractScpTiming;
  }
  toXdrObject() {
    return {
      configSettingID: 16,
      contractScpTiming: this.contractScpTiming.toXdrObject()
    };
  }
}
class ConfigSettingEntryFrozenLedgerKeys extends ConfigSettingEntryBase {
  type = "configSettingFrozenLedgerKeys";
  frozenLedgerKeys;
  constructor(frozenLedgerKeys) {
    super();
    this.frozenLedgerKeys = frozenLedgerKeys;
  }
  get value() {
    return this.frozenLedgerKeys;
  }
  toXdrObject() {
    return {
      configSettingID: 17,
      frozenLedgerKeys: this.frozenLedgerKeys.toXdrObject()
    };
  }
}
class ConfigSettingEntryFrozenLedgerKeysDelta extends ConfigSettingEntryBase {
  type = "configSettingFrozenLedgerKeysDelta";
  frozenLedgerKeysDelta;
  constructor(frozenLedgerKeysDelta) {
    super();
    this.frozenLedgerKeysDelta = frozenLedgerKeysDelta;
  }
  get value() {
    return this.frozenLedgerKeysDelta;
  }
  toXdrObject() {
    return {
      configSettingID: 18,
      frozenLedgerKeysDelta: this.frozenLedgerKeysDelta.toXdrObject()
    };
  }
}
class ConfigSettingEntryFreezeBypassTxs extends ConfigSettingEntryBase {
  type = "configSettingFreezeBypassTxs";
  freezeBypassTxs;
  constructor(freezeBypassTxs) {
    super();
    this.freezeBypassTxs = freezeBypassTxs;
  }
  get value() {
    return this.freezeBypassTxs;
  }
  toXdrObject() {
    return {
      configSettingID: 19,
      freezeBypassTxs: this.freezeBypassTxs.toXdrObject()
    };
  }
}
class ConfigSettingEntryFreezeBypassTxsDelta extends ConfigSettingEntryBase {
  type = "configSettingFreezeBypassTxsDelta";
  freezeBypassTxsDelta;
  constructor(freezeBypassTxsDelta) {
    super();
    this.freezeBypassTxsDelta = freezeBypassTxsDelta;
  }
  get value() {
    return this.freezeBypassTxsDelta;
  }
  toXdrObject() {
    return {
      configSettingID: 20,
      freezeBypassTxsDelta: this.freezeBypassTxsDelta.toXdrObject()
    };
  }
}
const ConfigSettingEntry = ConfigSettingEntryBase;

export { ConfigSettingEntry, ConfigSettingEntryContractBandwidthV0, ConfigSettingEntryContractComputeV0, ConfigSettingEntryContractCostParamsCpuInstructions, ConfigSettingEntryContractCostParamsMemoryBytes, ConfigSettingEntryContractDataEntrySizeBytes, ConfigSettingEntryContractDataKeySizeBytes, ConfigSettingEntryContractEventsV0, ConfigSettingEntryContractExecutionLanes, ConfigSettingEntryContractHistoricalDataV0, ConfigSettingEntryContractLedgerCostExtV0, ConfigSettingEntryContractLedgerCostV0, ConfigSettingEntryContractMaxSizeBytes, ConfigSettingEntryContractParallelComputeV0, ConfigSettingEntryEvictionIterator, ConfigSettingEntryFreezeBypassTxs, ConfigSettingEntryFreezeBypassTxsDelta, ConfigSettingEntryFrozenLedgerKeys, ConfigSettingEntryFrozenLedgerKeysDelta, ConfigSettingEntryLiveSorobanStateSizeWindow, ConfigSettingEntryScpTiming, ConfigSettingEntryStateArchival };
//# sourceMappingURL=config-setting-entry.js.map
