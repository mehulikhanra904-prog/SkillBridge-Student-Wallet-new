import { struct, uint64, bool, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class EvictionIterator extends XdrValue {
  bucketListLevel;
  isCurrBucket;
  bucketFileOffset;
  static schema = struct(
    "EvictionIterator",
    {
      bucketListLevel: uint32(),
      isCurrBucket: bool(),
      bucketFileOffset: uint64()
    }
  );
  constructor(input) {
    super();
    this.bucketListLevel = input.bucketListLevel;
    this.isCurrBucket = input.isCurrBucket;
    this.bucketFileOffset = input.bucketFileOffset;
  }
  toXdrObject() {
    return {
      bucketListLevel: this.bucketListLevel,
      isCurrBucket: this.isCurrBucket,
      bucketFileOffset: this.bucketFileOffset
    };
  }
  static fromXdrObject(wire) {
    return new EvictionIterator({
      bucketListLevel: wire.bucketListLevel,
      isCurrBucket: wire.isCurrBucket,
      bucketFileOffset: wire.bucketFileOffset
    });
  }
}

export { EvictionIterator };
//# sourceMappingURL=eviction-iterator.js.map
