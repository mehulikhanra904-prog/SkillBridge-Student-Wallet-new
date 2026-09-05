import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class BucketEntryType extends EnumValue {
  static metaentry = new BucketEntryType("metaentry", -1);
  static liveentry = new BucketEntryType("liveentry", 0);
  static deadentry = new BucketEntryType("deadentry", 1);
  static initentry = new BucketEntryType("initentry", 2);
  static schema = enumType("BucketEntryType", {
    metaentry: -1,
    liveentry: 0,
    deadentry: 1,
    initentry: 2
  });
  static fromValue(value) {
    return enumFromValue(
      "BucketEntryType",
      BucketEntryType.schema,
      BucketEntryType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("BucketEntryType", BucketEntryType, name);
  }
  static fromXdrObject(wire) {
    return BucketEntryType.fromValue(wire);
  }
}

export { BucketEntryType };
//# sourceMappingURL=bucket-entry-type.js.map
