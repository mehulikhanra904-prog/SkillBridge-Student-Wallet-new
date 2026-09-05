import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class StellarValueType extends EnumValue {
  static stellarValueBasic = new StellarValueType(
    "stellarValueBasic",
    0
  );
  static stellarValueSigned = new StellarValueType(
    "stellarValueSigned",
    1
  );
  static stellarValueEmptyTxSet = new StellarValueType(
    "stellarValueEmptyTxSet",
    2
  );
  static schema = withMemberPrefix(
    enumType("StellarValueType", {
      stellarValueBasic: 0,
      stellarValueSigned: 1,
      stellarValueEmptyTxSet: 2
    }),
    "stellarValue"
  );
  static fromValue(value) {
    return enumFromValue(
      "StellarValueType",
      StellarValueType.schema,
      StellarValueType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("StellarValueType", StellarValueType, name);
  }
  static fromXdrObject(wire) {
    return StellarValueType.fromValue(wire);
  }
}

export { StellarValueType };
//# sourceMappingURL=stellar-value-type.js.map
