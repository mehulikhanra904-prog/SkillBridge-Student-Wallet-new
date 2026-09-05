'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class StateArchivalSettings extends xdrValue.XdrValue {
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
  static schema = jsXdr.struct(
    "StateArchivalSettings",
    {
      maxEntryTtl: jsXdr.uint32(),
      minTemporaryTtl: jsXdr.uint32(),
      minPersistentTtl: jsXdr.uint32(),
      persistentRentRateDenominator: jsXdr.int64(),
      tempRentRateDenominator: jsXdr.int64(),
      maxEntriesToArchive: jsXdr.uint32(),
      liveSorobanStateSizeWindowSampleSize: jsXdr.uint32(),
      liveSorobanStateSizeWindowSamplePeriod: jsXdr.uint32(),
      evictionScanSize: jsXdr.uint32(),
      startingEvictionScanLevel: jsXdr.uint32()
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

exports.StateArchivalSettings = StateArchivalSettings;
//# sourceMappingURL=state-archival-settings.js.map
