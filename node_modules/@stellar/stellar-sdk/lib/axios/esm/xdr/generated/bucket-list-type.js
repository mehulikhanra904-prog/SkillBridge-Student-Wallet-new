import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class BucketListType extends EnumValue {
  static live = new BucketListType("live", 0);
  static hotArchive = new BucketListType("hotArchive", 1);
  static schema = enumType("BucketListType", {
    live: 0,
    hotArchive: 1
  });
  static fromValue(value) {
    return enumFromValue(
      "BucketListType",
      BucketListType.schema,
      BucketListType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("BucketListType", BucketListType, name);
  }
  static fromXdrObject(wire) {
    return BucketListType.fromValue(wire);
  }
}

export { BucketListType };
//# sourceMappingURL=bucket-list-type.js.map
