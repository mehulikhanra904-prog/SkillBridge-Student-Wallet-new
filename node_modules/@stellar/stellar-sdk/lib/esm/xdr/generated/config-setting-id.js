import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ConfigSettingId extends EnumValue {
  static configSettingContractMaxSizeBytes = new ConfigSettingId(
    "configSettingContractMaxSizeBytes",
    0
  );
  static configSettingContractComputeV0 = new ConfigSettingId(
    "configSettingContractComputeV0",
    1
  );
  static configSettingContractLedgerCostV0 = new ConfigSettingId(
    "configSettingContractLedgerCostV0",
    2
  );
  static configSettingContractHistoricalDataV0 = new ConfigSettingId(
    "configSettingContractHistoricalDataV0",
    3
  );
  static configSettingContractEventsV0 = new ConfigSettingId(
    "configSettingContractEventsV0",
    4
  );
  static configSettingContractBandwidthV0 = new ConfigSettingId(
    "configSettingContractBandwidthV0",
    5
  );
  static configSettingContractCostParamsCpuInstructions = new ConfigSettingId("configSettingContractCostParamsCpuInstructions", 6);
  static configSettingContractCostParamsMemoryBytes = new ConfigSettingId("configSettingContractCostParamsMemoryBytes", 7);
  static configSettingContractDataKeySizeBytes = new ConfigSettingId(
    "configSettingContractDataKeySizeBytes",
    8
  );
  static configSettingContractDataEntrySizeBytes = new ConfigSettingId(
    "configSettingContractDataEntrySizeBytes",
    9
  );
  static configSettingStateArchival = new ConfigSettingId(
    "configSettingStateArchival",
    10
  );
  static configSettingContractExecutionLanes = new ConfigSettingId(
    "configSettingContractExecutionLanes",
    11
  );
  static configSettingLiveSorobanStateSizeWindow = new ConfigSettingId(
    "configSettingLiveSorobanStateSizeWindow",
    12
  );
  static configSettingEvictionIterator = new ConfigSettingId(
    "configSettingEvictionIterator",
    13
  );
  static configSettingContractParallelComputeV0 = new ConfigSettingId(
    "configSettingContractParallelComputeV0",
    14
  );
  static configSettingContractLedgerCostExtV0 = new ConfigSettingId(
    "configSettingContractLedgerCostExtV0",
    15
  );
  static configSettingScpTiming = new ConfigSettingId(
    "configSettingScpTiming",
    16
  );
  static configSettingFrozenLedgerKeys = new ConfigSettingId(
    "configSettingFrozenLedgerKeys",
    17
  );
  static configSettingFrozenLedgerKeysDelta = new ConfigSettingId(
    "configSettingFrozenLedgerKeysDelta",
    18
  );
  static configSettingFreezeBypassTxs = new ConfigSettingId(
    "configSettingFreezeBypassTxs",
    19
  );
  static configSettingFreezeBypassTxsDelta = new ConfigSettingId(
    "configSettingFreezeBypassTxsDelta",
    20
  );
  static schema = withMemberPrefix(
    enumType("ConfigSettingId", {
      configSettingContractMaxSizeBytes: 0,
      configSettingContractComputeV0: 1,
      configSettingContractLedgerCostV0: 2,
      configSettingContractHistoricalDataV0: 3,
      configSettingContractEventsV0: 4,
      configSettingContractBandwidthV0: 5,
      configSettingContractCostParamsCpuInstructions: 6,
      configSettingContractCostParamsMemoryBytes: 7,
      configSettingContractDataKeySizeBytes: 8,
      configSettingContractDataEntrySizeBytes: 9,
      configSettingStateArchival: 10,
      configSettingContractExecutionLanes: 11,
      configSettingLiveSorobanStateSizeWindow: 12,
      configSettingEvictionIterator: 13,
      configSettingContractParallelComputeV0: 14,
      configSettingContractLedgerCostExtV0: 15,
      configSettingScpTiming: 16,
      configSettingFrozenLedgerKeys: 17,
      configSettingFrozenLedgerKeysDelta: 18,
      configSettingFreezeBypassTxs: 19,
      configSettingFreezeBypassTxsDelta: 20
    }),
    "configSetting"
  );
  static fromValue(value) {
    return enumFromValue(
      "ConfigSettingId",
      ConfigSettingId.schema,
      ConfigSettingId,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ConfigSettingId", ConfigSettingId, name);
  }
  static fromXdrObject(wire) {
    return ConfigSettingId.fromValue(wire);
  }
}

export { ConfigSettingId };
//# sourceMappingURL=config-setting-id.js.map
