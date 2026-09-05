import { struct, varOpaque, UNBOUNDED_MAX_LENGTH, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { BinaryFuseFilterType } from './binary-fuse-filter-type.js';
import { ShortHashSeed } from './short-hash-seed.js';

class SerializedBinaryFuseFilter extends XdrValue {
  type;
  inputHashSeed;
  filterSeed;
  segmentLength;
  segementLengthMask;
  segmentCount;
  segmentCountLength;
  fingerprintLength;
  fingerprints;
  static schema = struct(
    "SerializedBinaryFuseFilter",
    {
      type: BinaryFuseFilterType.schema,
      inputHashSeed: ShortHashSeed.schema,
      filterSeed: ShortHashSeed.schema,
      segmentLength: uint32(),
      segementLengthMask: uint32(),
      segmentCount: uint32(),
      segmentCountLength: uint32(),
      fingerprintLength: uint32(),
      fingerprints: varOpaque(UNBOUNDED_MAX_LENGTH)
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
      type: BinaryFuseFilterType.fromXdrObject(wire.type),
      inputHashSeed: ShortHashSeed.fromXdrObject(wire.inputHashSeed),
      filterSeed: ShortHashSeed.fromXdrObject(wire.filterSeed),
      segmentLength: wire.segmentLength,
      segementLengthMask: wire.segementLengthMask,
      segmentCount: wire.segmentCount,
      segmentCountLength: wire.segmentCountLength,
      fingerprintLength: wire.fingerprintLength,
      fingerprints: wire.fingerprints
    });
  }
}

export { SerializedBinaryFuseFilter };
//# sourceMappingURL=serialized-binary-fuse-filter.js.map
