'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class BinaryFuseFilterType extends enumValue.EnumValue {
  static binaryFuseFilter8Bit = new BinaryFuseFilterType(
    "binaryFuseFilter8Bit",
    0
  );
  static binaryFuseFilter16Bit = new BinaryFuseFilterType(
    "binaryFuseFilter16Bit",
    1
  );
  static binaryFuseFilter32Bit = new BinaryFuseFilterType(
    "binaryFuseFilter32Bit",
    2
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("BinaryFuseFilterType", {
      binaryFuseFilter8Bit: 0,
      binaryFuseFilter16Bit: 1,
      binaryFuseFilter32Bit: 2
    }),
    "binaryFuseFilter"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "BinaryFuseFilterType",
      BinaryFuseFilterType.schema,
      BinaryFuseFilterType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("BinaryFuseFilterType", BinaryFuseFilterType, name);
  }
  static fromXdrObject(wire) {
    return BinaryFuseFilterType.fromValue(wire);
  }
}

exports.BinaryFuseFilterType = BinaryFuseFilterType;
//# sourceMappingURL=binary-fuse-filter-type.js.map
