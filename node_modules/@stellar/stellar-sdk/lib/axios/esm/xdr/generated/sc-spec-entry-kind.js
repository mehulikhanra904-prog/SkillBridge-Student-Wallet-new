import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScSpecEntryKind extends EnumValue {
  static scSpecEntryFunctionV0 = new ScSpecEntryKind(
    "scSpecEntryFunctionV0",
    0
  );
  static scSpecEntryUdtStructV0 = new ScSpecEntryKind(
    "scSpecEntryUdtStructV0",
    1
  );
  static scSpecEntryUdtUnionV0 = new ScSpecEntryKind(
    "scSpecEntryUdtUnionV0",
    2
  );
  static scSpecEntryUdtEnumV0 = new ScSpecEntryKind(
    "scSpecEntryUdtEnumV0",
    3
  );
  static scSpecEntryUdtErrorEnumV0 = new ScSpecEntryKind(
    "scSpecEntryUdtErrorEnumV0",
    4
  );
  static scSpecEntryEventV0 = new ScSpecEntryKind(
    "scSpecEntryEventV0",
    5
  );
  static schema = withMemberPrefix(
    enumType("ScSpecEntryKind", {
      scSpecEntryFunctionV0: 0,
      scSpecEntryUdtStructV0: 1,
      scSpecEntryUdtUnionV0: 2,
      scSpecEntryUdtEnumV0: 3,
      scSpecEntryUdtErrorEnumV0: 4,
      scSpecEntryEventV0: 5
    }),
    "scSpecEntry"
  );
  static fromValue(value) {
    return enumFromValue(
      "ScSpecEntryKind",
      ScSpecEntryKind.schema,
      ScSpecEntryKind,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ScSpecEntryKind", ScSpecEntryKind, name);
  }
  static fromXdrObject(wire) {
    return ScSpecEntryKind.fromValue(wire);
  }
}

export { ScSpecEntryKind };
//# sourceMappingURL=sc-spec-entry-kind.js.map
