import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class HotArchiveBucketEntryType extends EnumValue {
  static hotArchiveMetaentry = new HotArchiveBucketEntryType(
    "hotArchiveMetaentry",
    -1
  );
  static hotArchiveArchived = new HotArchiveBucketEntryType(
    "hotArchiveArchived",
    0
  );
  static hotArchiveLive = new HotArchiveBucketEntryType(
    "hotArchiveLive",
    1
  );
  static schema = withMemberPrefix(
    enumType("HotArchiveBucketEntryType", {
      hotArchiveMetaentry: -1,
      hotArchiveArchived: 0,
      hotArchiveLive: 1
    }),
    "hotArchive"
  );
  static fromValue(value) {
    return enumFromValue(
      "HotArchiveBucketEntryType",
      HotArchiveBucketEntryType.schema,
      HotArchiveBucketEntryType,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "HotArchiveBucketEntryType",
      HotArchiveBucketEntryType,
      name
    );
  }
  static fromXdrObject(wire) {
    return HotArchiveBucketEntryType.fromValue(wire);
  }
}

export { HotArchiveBucketEntryType };
//# sourceMappingURL=hot-archive-bucket-entry-type.js.map
