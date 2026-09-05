'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class HotArchiveBucketEntryType extends enumValue.EnumValue {
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
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("HotArchiveBucketEntryType", {
      hotArchiveMetaentry: -1,
      hotArchiveArchived: 0,
      hotArchiveLive: 1
    }),
    "hotArchive"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "HotArchiveBucketEntryType",
      HotArchiveBucketEntryType.schema,
      HotArchiveBucketEntryType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "HotArchiveBucketEntryType",
      HotArchiveBucketEntryType,
      name
    );
  }
  static fromXdrObject(wire) {
    return HotArchiveBucketEntryType.fromValue(wire);
  }
}

exports.HotArchiveBucketEntryType = HotArchiveBucketEntryType;
//# sourceMappingURL=hot-archive-bucket-entry-type.js.map
