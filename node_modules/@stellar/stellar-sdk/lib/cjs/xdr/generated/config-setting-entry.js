'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var configSettingId = require('./config-setting-id.js');
var configSettingContractComputeV0 = require('./config-setting-contract-compute-v0.js');
var configSettingContractLedgerCostV0 = require('./config-setting-contract-ledger-cost-v0.js');
var configSettingContractHistoricalDataV0 = require('./config-setting-contract-historical-data-v0.js');
var configSettingContractEventsV0 = require('./config-setting-contract-events-v0.js');
var configSettingContractBandwidthV0 = require('./config-setting-contract-bandwidth-v0.js');
var contractCostParamEntry = require('./contract-cost-param-entry.js');
var stateArchivalSettings = require('./state-archival-settings.js');
var configSettingContractExecutionLanesV0 = require('./config-setting-contract-execution-lanes-v0.js');
var evictionIterator = require('./eviction-iterator.js');
var configSettingContractParallelComputeV0 = require('./config-setting-contract-parallel-compute-v0.js');
var configSettingContractLedgerCostExtV0 = require('./config-setting-contract-ledger-cost-ext-v0.js');
var configSettingScpTiming = require('./config-setting-scp-timing.js');
var frozenLedgerKeys = require('./frozen-ledger-keys.js');
var frozenLedgerKeysDelta = require('./frozen-ledger-keys-delta.js');
var freezeBypassTxs = require('./freeze-bypass-txs.js');
var freezeBypassTxsDelta = require('./freeze-bypass-txs-delta.js');

class ConfigSettingEntryBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ConfigSettingEntryBase) {
      throw new TypeError(
        "new xdr.ConfigSettingEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ConfigSettingEntry.configSettingContractMaxSizeBytes(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ConfigSettingEntry",
    {
      switchOn: configSettingId.ConfigSettingId.schema,
      cases: [
        jsXdr.case(
          "configSettingContractMaxSizeBytes",
          0,
          jsXdr.field("contractMaxSizeBytes", jsXdr.uint32())
        ),
        jsXdr.case(
          "configSettingContractComputeV0",
          1,
          jsXdr.field("contractCompute", configSettingContractComputeV0.ConfigSettingContractComputeV0.schema)
        ),
        jsXdr.case(
          "configSettingContractLedgerCostV0",
          2,
          jsXdr.field("contractLedgerCost", configSettingContractLedgerCostV0.ConfigSettingContractLedgerCostV0.schema)
        ),
        jsXdr.case(
          "configSettingContractHistoricalDataV0",
          3,
          jsXdr.field(
            "contractHistoricalData",
            configSettingContractHistoricalDataV0.ConfigSettingContractHistoricalDataV0.schema
          )
        ),
        jsXdr.case(
          "configSettingContractEventsV0",
          4,
          jsXdr.field("contractEvents", configSettingContractEventsV0.ConfigSettingContractEventsV0.schema)
        ),
        jsXdr.case(
          "configSettingContractBandwidthV0",
          5,
          jsXdr.field("contractBandwidth", configSettingContractBandwidthV0.ConfigSettingContractBandwidthV0.schema)
        ),
        jsXdr.case(
          "configSettingContractCostParamsCpuInstructions",
          6,
          jsXdr.field(
            "contractCostParamsCpuInsns",
            jsXdr.array(contractCostParamEntry.ContractCostParamEntry.schema, 1024)
          )
        ),
        jsXdr.case(
          "configSettingContractCostParamsMemoryBytes",
          7,
          jsXdr.field(
            "contractCostParamsMemBytes",
            jsXdr.array(contractCostParamEntry.ContractCostParamEntry.schema, 1024)
          )
        ),
        jsXdr.case(
          "configSettingContractDataKeySizeBytes",
          8,
          jsXdr.field("contractDataKeySizeBytes", jsXdr.uint32())
        ),
        jsXdr.case(
          "configSettingContractDataEntrySizeBytes",
          9,
          jsXdr.field("contractDataEntrySizeBytes", jsXdr.uint32())
        ),
        jsXdr.case(
          "configSettingStateArchival",
          10,
          jsXdr.field("stateArchivalSettings", stateArchivalSettings.StateArchivalSettings.schema)
        ),
        jsXdr.case(
          "configSettingContractExecutionLanes",
          11,
          jsXdr.field(
            "contractExecutionLanes",
            configSettingContractExecutionLanesV0.ConfigSettingContractExecutionLanesV0.schema
          )
        ),
        jsXdr.case(
          "configSettingLiveSorobanStateSizeWindow",
          12,
          jsXdr.field(
            "liveSorobanStateSizeWindow",
            jsXdr.array(jsXdr.uint64(), jsXdr.UNBOUNDED_MAX_LENGTH)
          )
        ),
        jsXdr.case(
          "configSettingEvictionIterator",
          13,
          jsXdr.field("evictionIterator", evictionIterator.EvictionIterator.schema)
        ),
        jsXdr.case(
          "configSettingContractParallelComputeV0",
          14,
          jsXdr.field(
            "contractParallelCompute",
            configSettingContractParallelComputeV0.ConfigSettingContractParallelComputeV0.schema
          )
        ),
        jsXdr.case(
          "configSettingContractLedgerCostExtV0",
          15,
          jsXdr.field(
            "contractLedgerCostExt",
            configSettingContractLedgerCostExtV0.ConfigSettingContractLedgerCostExtV0.schema
          )
        ),
        jsXdr.case(
          "configSettingScpTiming",
          16,
          jsXdr.field("contractScpTiming", configSettingScpTiming.ConfigSettingScpTiming.schema)
        ),
        jsXdr.case(
          "configSettingFrozenLedgerKeys",
          17,
          jsXdr.field("frozenLedgerKeys", frozenLedgerKeys.FrozenLedgerKeys.schema)
        ),
        jsXdr.case(
          "configSettingFrozenLedgerKeysDelta",
          18,
          jsXdr.field("frozenLedgerKeysDelta", frozenLedgerKeysDelta.FrozenLedgerKeysDelta.schema)
        ),
        jsXdr.case(
          "configSettingFreezeBypassTxs",
          19,
          jsXdr.field("freezeBypassTxs", freezeBypassTxs.FreezeBypassTxs.schema)
        ),
        jsXdr.case(
          "configSettingFreezeBypassTxsDelta",
          20,
          jsXdr.field("freezeBypassTxsDelta", freezeBypassTxsDelta.FreezeBypassTxsDelta.schema)
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
          configSettingContractComputeV0.ConfigSettingContractComputeV0.fromXdrObject(wire.contractCompute)
        );
      case 2:
        return new ConfigSettingEntryContractLedgerCostV0(
          configSettingContractLedgerCostV0.ConfigSettingContractLedgerCostV0.fromXdrObject(
            wire.contractLedgerCost
          )
        );
      case 3:
        return new ConfigSettingEntryContractHistoricalDataV0(
          configSettingContractHistoricalDataV0.ConfigSettingContractHistoricalDataV0.fromXdrObject(
            wire.contractHistoricalData
          )
        );
      case 4:
        return new ConfigSettingEntryContractEventsV0(
          configSettingContractEventsV0.ConfigSettingContractEventsV0.fromXdrObject(wire.contractEvents)
        );
      case 5:
        return new ConfigSettingEntryContractBandwidthV0(
          configSettingContractBandwidthV0.ConfigSettingContractBandwidthV0.fromXdrObject(
            wire.contractBandwidth
          )
        );
      case 6:
        return new ConfigSettingEntryContractCostParamsCpuInstructions(
          wire.contractCostParamsCpuInsns.map(
            (w) => contractCostParamEntry.ContractCostParamEntry.fromXdrObject(w)
          )
        );
      case 7:
        return new ConfigSettingEntryContractCostParamsMemoryBytes(
          wire.contractCostParamsMemBytes.map(
            (w) => contractCostParamEntry.ContractCostParamEntry.fromXdrObject(w)
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
          stateArchivalSettings.StateArchivalSettings.fromXdrObject(wire.stateArchivalSettings)
        );
      case 11:
        return new ConfigSettingEntryContractExecutionLanes(
          configSettingContractExecutionLanesV0.ConfigSettingContractExecutionLanesV0.fromXdrObject(
            wire.contractExecutionLanes
          )
        );
      case 12:
        return new ConfigSettingEntryLiveSorobanStateSizeWindow(
          wire.liveSorobanStateSizeWindow
        );
      case 13:
        return new ConfigSettingEntryEvictionIterator(
          evictionIterator.EvictionIterator.fromXdrObject(wire.evictionIterator)
        );
      case 14:
        return new ConfigSettingEntryContractParallelComputeV0(
          configSettingContractParallelComputeV0.ConfigSettingContractParallelComputeV0.fromXdrObject(
            wire.contractParallelCompute
          )
        );
      case 15:
        return new ConfigSettingEntryContractLedgerCostExtV0(
          configSettingContractLedgerCostExtV0.ConfigSettingContractLedgerCostExtV0.fromXdrObject(
            wire.contractLedgerCostExt
          )
        );
      case 16:
        return new ConfigSettingEntryScpTiming(
          configSettingScpTiming.ConfigSettingScpTiming.fromXdrObject(wire.contractScpTiming)
        );
      case 17:
        return new ConfigSettingEntryFrozenLedgerKeys(
          frozenLedgerKeys.FrozenLedgerKeys.fromXdrObject(wire.frozenLedgerKeys)
        );
      case 18:
        return new ConfigSettingEntryFrozenLedgerKeysDelta(
          frozenLedgerKeysDelta.FrozenLedgerKeysDelta.fromXdrObject(wire.frozenLedgerKeysDelta)
        );
      case 19:
        return new ConfigSettingEntryFreezeBypassTxs(
          freezeBypassTxs.FreezeBypassTxs.fromXdrObject(wire.freezeBypassTxs)
        );
      case 20:
        return new ConfigSettingEntryFreezeBypassTxsDelta(
          freezeBypassTxsDelta.FreezeBypassTxsDelta.fromXdrObject(wire.freezeBypassTxsDelta)
        );
    }
    throw new jsXdr.XdrError(
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

exports.ConfigSettingEntry = ConfigSettingEntry;
exports.ConfigSettingEntryContractBandwidthV0 = ConfigSettingEntryContractBandwidthV0;
exports.ConfigSettingEntryContractComputeV0 = ConfigSettingEntryContractComputeV0;
exports.ConfigSettingEntryContractCostParamsCpuInstructions = ConfigSettingEntryContractCostParamsCpuInstructions;
exports.ConfigSettingEntryContractCostParamsMemoryBytes = ConfigSettingEntryContractCostParamsMemoryBytes;
exports.ConfigSettingEntryContractDataEntrySizeBytes = ConfigSettingEntryContractDataEntrySizeBytes;
exports.ConfigSettingEntryContractDataKeySizeBytes = ConfigSettingEntryContractDataKeySizeBytes;
exports.ConfigSettingEntryContractEventsV0 = ConfigSettingEntryContractEventsV0;
exports.ConfigSettingEntryContractExecutionLanes = ConfigSettingEntryContractExecutionLanes;
exports.ConfigSettingEntryContractHistoricalDataV0 = ConfigSettingEntryContractHistoricalDataV0;
exports.ConfigSettingEntryContractLedgerCostExtV0 = ConfigSettingEntryContractLedgerCostExtV0;
exports.ConfigSettingEntryContractLedgerCostV0 = ConfigSettingEntryContractLedgerCostV0;
exports.ConfigSettingEntryContractMaxSizeBytes = ConfigSettingEntryContractMaxSizeBytes;
exports.ConfigSettingEntryContractParallelComputeV0 = ConfigSettingEntryContractParallelComputeV0;
exports.ConfigSettingEntryEvictionIterator = ConfigSettingEntryEvictionIterator;
exports.ConfigSettingEntryFreezeBypassTxs = ConfigSettingEntryFreezeBypassTxs;
exports.ConfigSettingEntryFreezeBypassTxsDelta = ConfigSettingEntryFreezeBypassTxsDelta;
exports.ConfigSettingEntryFrozenLedgerKeys = ConfigSettingEntryFrozenLedgerKeys;
exports.ConfigSettingEntryFrozenLedgerKeysDelta = ConfigSettingEntryFrozenLedgerKeysDelta;
exports.ConfigSettingEntryLiveSorobanStateSizeWindow = ConfigSettingEntryLiveSorobanStateSizeWindow;
exports.ConfigSettingEntryScpTiming = ConfigSettingEntryScpTiming;
exports.ConfigSettingEntryStateArchival = ConfigSettingEntryStateArchival;
//# sourceMappingURL=config-setting-entry.js.map
