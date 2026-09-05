import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { BucketListType } from './bucket-list-type.js';

class BucketMetadataExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === BucketMetadataExtBase) {
      throw new TypeError(
        "new xdr.BucketMetadataExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.BucketMetadataExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "BucketMetadataExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case(
          "bucketListType",
          1,
          field("bucketListType", BucketListType.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new BucketMetadataExtV0();
  }
  static bucketListType(bucketListType) {
    return new BucketMetadataExtBucketListType(bucketListType);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new BucketMetadataExtV0();
      case 1:
        return new BucketMetadataExtBucketListType(
          BucketListType.fromXdrObject(wire.bucketListType)
        );
    }
    throw new XdrError(
      `BucketMetadataExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete BucketMetadataExt variant.
   * Use this instead of `instanceof BucketMetadataExt`: the exported `BucketMetadataExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `BucketMetadataExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof BucketMetadataExtBase;
  }
}
class BucketMetadataExtV0 extends BucketMetadataExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class BucketMetadataExtBucketListType extends BucketMetadataExtBase {
  type = "bucketListType";
  bucketListType;
  constructor(bucketListType) {
    super();
    this.bucketListType = bucketListType;
  }
  get value() {
    return this.bucketListType;
  }
  toXdrObject() {
    return { v: 1, bucketListType: this.bucketListType.toXdrObject() };
  }
}
const BucketMetadataExt = BucketMetadataExtBase;

export { BucketMetadataExt, BucketMetadataExtBucketListType, BucketMetadataExtV0 };
//# sourceMappingURL=bucket-metadata-ext.js.map
