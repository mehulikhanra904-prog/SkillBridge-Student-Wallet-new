'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var binaryFuseFilterType = require('./binary-fuse-filter-type.js');
var shortHashSeed = require('./short-hash-seed.js');

class SerializedBinaryFuseFilter extends xdrValue.XdrValue {
  type;
  inputHashSeed;
  filterSeed;
  segmentLength;
  segementLengthMask;
  segmentCount;
  segmentCountLength;
  fingerprintLength;
  fingerprints;
  static schema = jsXdr.struct(
    "SerializedBinaryFuseFilter",
    {
      type: binaryFuseFilterType.BinaryFuseFilterType.schema,
      inputHashSeed: shortHashSeed.ShortHashSeed.schema,
      filterSeed: shortHashSeed.ShortHashSeed.schema,
      segmentLength: jsXdr.uint32(),
      segementLengthMask: jsXdr.uint32(),
      segmentCount: jsXdr.uint32(),
      segmentCountLength: jsXdr.uint32(),
      fingerprintLength: jsXdr.uint32(),
      fingerprints: jsXdr.varOpaque(jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.type = input.type;
    this.inputHashSeed = input.inputHashSeed;
    this.filterSeed = input.filterSeed;
    this.segmentLength = input.segmentLength;
    this.segementLengthMask = input.segementLengthMask;
    this.segmentCount = input.segmentCount;
    this.segmentCountLength = input.segmentCountLength;
    this.fingerprintLength = input.fingerprintLength;
    this.fingerprints = input.fingerprints;
  }
  toXdrObject() {
    return {
      type: this.type.toXdrObject(),
      inputHashSeed: this.inputHashSeed.toXdrObject(),
      filterSeed: this.filterSeed.toXdrObject(),
      segmentLength: this.segmentLength,
      segementLengthMask: this.segementLengthMask,
      segmentCount: this.segmentCount,
      segmentCountLength: this.segmentCountLength,
      fingerprintLength: this.fingerprintLength,
      fingerprints: this.fingerprints
    };
  }
  static fromXdrObject(wire) {
    return new SerializedBinaryFuseFilter({
      type: binaryFuseFilterType.BinaryFuseFilterType.fromXdrObject(wire.type),
      inputHashSeed: shortHashSeed.ShortHashSeed.fromXdrObject(wire.inputHashSeed),
      filterSeed: shortHashSeed.ShortHashSeed.fromXdrObject(wire.filterSeed),
      segmentLength: wire.segmentLength,
      segementLengthMask: wire.segementLengthMask,
      segmentCount: wire.segmentCount,
      segmentCountLength: wire.segmentCountLength,
      fingerprintLength: wire.fingerprintLength,
      fingerprints: wire.fingerprints
    });
  }
}

exports.SerializedBinaryFuseFilter = SerializedBinaryFuseFilter;
//# sourceMappingURL=serialized-binary-fuse-filter.js.map
