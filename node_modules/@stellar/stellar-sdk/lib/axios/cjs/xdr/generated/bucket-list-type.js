'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class BucketListType extends enumValue.EnumValue {
  static live = new BucketListType("live", 0);
  static hotArchive = new BucketListType("hotArchive", 1);
  static schema = jsXdr.enumType("BucketListType", {
    live: 0,
    hotArchive: 1
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "BucketListType",
      BucketListType.schema,
      BucketListType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("BucketListType", BucketListType, name);
  }
  static fromXdrObject(wire) {
    return BucketListType.fromValue(wire);
  }
}

exports.BucketListType = BucketListType;
//# sourceMappingURL=bucket-list-type.js.map
