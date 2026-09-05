'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class EvictionIterator extends xdrValue.XdrValue {
  bucketListLevel;
  isCurrBucket;
  bucketFileOffset;
  static schema = jsXdr.struct(
    "EvictionIterator",
    {
      bucketListLevel: jsXdr.uint32(),
      isCurrBucket: jsXdr.bool(),
      bucketFileOffset: jsXdr.uint64()
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

exports.EvictionIterator = EvictionIterator;
//# sourceMappingURL=eviction-iterator.js.map
