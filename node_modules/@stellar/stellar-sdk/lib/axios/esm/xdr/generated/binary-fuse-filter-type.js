import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class BinaryFuseFilterType extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("BinaryFuseFilterType", {
      binaryFuseFilter8Bit: 0,
      binaryFuseFilter16Bit: 1,
      binaryFuseFilter32Bit: 2
    }),
    "binaryFuseFilter"
  );
  static fromValue(value) {
    return enumFromValue(
      "BinaryFuseFilterType",
      BinaryFuseFilterType.schema,
      BinaryFuseFilterType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("BinaryFuseFilterType", BinaryFuseFilterType, name);
  }
  static fromXdrObject(wire) {
    return BinaryFuseFilterType.fromValue(wire);
  }
}

export { BinaryFuseFilterType };
//# sourceMappingURL=binary-fuse-filter-type.js.map
