import { struct, uint32, int64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class StateArchivalSettings extends XdrValue {
  maxEntryTtl;
  minTemporaryTtl;
  minPersistentTtl;
  persistentRentRateDenominator;
  tempRentRateDenominator;
  maxEntriesToArchive;
  liveSorobanStateSizeWindowSampleSize;
  liveSorobanStateSizeWindowSamplePeriod;
  evictionScanSize;
  startingEvictionScanLevel;
  static schema = struct(
    "StateArchivalSettings",
    {
      maxEntryTtl: uint32(),
      minTemporaryTtl: uint32(),
      minPersistentTtl: uint32(),
      persistentRentRateDenominator: int64(),
      tempRentRateDenominator: int64(),
      maxEntriesToArchive: uint32(),
      liveSorobanStateSizeWindowSampleSize: uint32(),
      liveSorobanStateSizeWindowSamplePeriod: uint32(),
      evictionScanSize: uint32(),
      startingEvictionScanLevel: uint32()
    }
  );
  constructor(input) {
    super();
    this.maxEntryTtl = input.maxEntryTtl;
    this.minTemporaryTtl = input.minTemporaryTtl;
    this.minPersistentTtl = input.minPersistentTtl;
    this.persistentRentRateDenominator = input.persistentRentRateDenominator;
    this.tempRentRateDenominator = input.tempRentRateDenominator;
    this.maxEntriesToArchive = input.maxEntriesToArchive;
    this.liveSorobanStateSizeWindowSampleSize = input.liveSorobanStateSizeWindowSampleSize;
    this.liveSorobanStateSizeWindowSamplePeriod = input.liveSorobanStateSizeWindowSamplePeriod;
    this.evictionScanSize = input.evictionScanSize;
    this.startingEvictionScanLevel = input.startingEvictionScanLevel;
  }
  toXdrObject() {
    return {
      maxEntryTtl: this.maxEntryTtl,
      minTemporaryTtl: this.minTemporaryTtl,
      minPersistentTtl: this.minPersistentTtl,
      persistentRentRateDenominator: this.persistentRentRateDenominator,
      tempRentRateDenominator: this.tempRentRateDenominator,
      maxEntriesToArchive: this.maxEntriesToArchive,
      liveSorobanStateSizeWindowSampleSize: this.liveSorobanStateSizeWindowSampleSize,
      liveSorobanStateSizeWindowSamplePeriod: this.liveSorobanStateSizeWindowSamplePeriod,
      evictionScanSize: this.evictionScanSize,
      startingEvictionScanLevel: this.startingEvictionScanLevel
    };
  }
  static fromXdrObject(wire) {
    return new StateArchivalSettings({
      maxEntryTtl: wire.maxEntryTtl,
      minTemporaryTtl: wire.minTemporaryTtl,
      minPersistentTtl: wire.minPersistentTtl,
      persistentRentRateDenominator: wire.persistentRentRateDenominator,
      tempRentRateDenominator: wire.tempRentRateDenominator,
      maxEntriesToArchive: wire.maxEntriesToArchive,
      liveSorobanStateSizeWindowSampleSize: wire.liveSorobanStateSizeWindowSampleSize,
      liveSorobanStateSizeWindowSamplePeriod: wire.liveSorobanStateSizeWindowSamplePeriod,
      evictionScanSize: wire.evictionScanSize,
      startingEvictionScanLevel: wire.startingEvictionScanLevel
    });
  }
}

export { StateArchivalSettings };
//# sourceMappingURL=state-archival-settings.js.map
