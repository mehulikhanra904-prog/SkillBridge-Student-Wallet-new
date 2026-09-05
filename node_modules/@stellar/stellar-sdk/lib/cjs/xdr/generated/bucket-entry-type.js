'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class BucketEntryType extends enumValue.EnumValue {
  static metaentry = new BucketEntryType("metaentry", -1);
  static liveentry = new BucketEntryType("liveentry", 0);
  static deadentry = new BucketEntryType("deadentry", 1);
  static initentry = new BucketEntryType("initentry", 2);
  static schema = jsXdr.enumType("BucketEntryType", {
    metaentry: -1,
    liveentry: 0,
    deadentry: 1,
    initentry: 2
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "BucketEntryType",
      BucketEntryType.schema,
      BucketEntryType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("BucketEntryType", BucketEntryType, name);
  }
  static fromXdrObject(wire) {
    return BucketEntryType.fromValue(wire);
  }
}

exports.BucketEntryType = BucketEntryType;
//# sourceMappingURL=bucket-entry-type.js.map
