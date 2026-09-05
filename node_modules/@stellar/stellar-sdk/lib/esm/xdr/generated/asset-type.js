import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class AssetType extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("AssetType", {
      assetTypeNative: 0,
      assetTypeCreditAlphanum4: 1,
      assetTypeCreditAlphanum12: 2,
      assetTypePoolShare: 3
    }),
    "assetType"
  );
  static fromValue(value) {
    return enumFromValue("AssetType", AssetType.schema, AssetType, value);
  }
  static fromName(name) {
    return enumFromName("AssetType", AssetType, name);
  }
  static fromXdrObject(wire) {
    return AssetType.fromValue(wire);
  }
}

export { AssetType };
//# sourceMappingURL=asset-type.js.map
