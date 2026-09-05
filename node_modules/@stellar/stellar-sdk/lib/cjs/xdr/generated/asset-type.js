'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class AssetType extends enumValue.EnumValue {
  static assetTypeNative = new AssetType("assetTypeNative", 0);
  static assetTypeCreditAlphanum4 = new AssetType(
    "assetTypeCreditAlphanum4",
    1
  );
  static assetTypeCreditAlphanum12 = new AssetType(
    "assetTypeCreditAlphanum12",
    2
  );
  static assetTypePoolShare = new AssetType("assetTypePoolShare", 3);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("AssetType", {
      assetTypeNative: 0,
      assetTypeCreditAlphanum4: 1,
      assetTypeCreditAlphanum12: 2,
      assetTypePoolShare: 3
    }),
    "assetType"
  );
  static fromValue(value) {
    return enumValue.enumFromValue("AssetType", AssetType.schema, AssetType, value);
  }
  static fromName(name) {
    return enumValue.enumFromName("AssetType", AssetType, name);
  }
  static fromXdrObject(wire) {
    return AssetType.fromValue(wire);
  }
}

exports.AssetType = AssetType;
//# sourceMappingURL=asset-type.js.map
