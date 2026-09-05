import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class PreconditionType extends EnumValue {
  static precondNone = new PreconditionType("precondNone", 0);
  static precondTime = new PreconditionType("precondTime", 1);
  static precondV2 = new PreconditionType("precondV2", 2);
  static schema = withMemberPrefix(
    enumType("PreconditionType", {
      precondNone: 0,
      precondTime: 1,
      precondV2: 2
    }),
    "precond"
  );
  static fromValue(value) {
    return enumFromValue(
      "PreconditionType",
      PreconditionType.schema,
      PreconditionType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("PreconditionType", PreconditionType, name);
  }
  static fromXdrObject(wire) {
    return PreconditionType.fromValue(wire);
  }
}

export { PreconditionType };
//# sourceMappingURL=precondition-type.js.map
