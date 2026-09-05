import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScSpecUdtUnionCaseV0Kind extends EnumValue {
  static scSpecUdtUnionCaseVoidV0 = new ScSpecUdtUnionCaseV0Kind(
    "scSpecUdtUnionCaseVoidV0",
    0
  );
  static scSpecUdtUnionCaseTupleV0 = new ScSpecUdtUnionCaseV0Kind(
    "scSpecUdtUnionCaseTupleV0",
    1
  );
  static schema = withMemberPrefix(
    enumType("ScSpecUdtUnionCaseV0Kind", {
      scSpecUdtUnionCaseVoidV0: 0,
      scSpecUdtUnionCaseTupleV0: 1
    }),
    "scSpecUdtUnionCase"
  );
  static fromValue(value) {
    return enumFromValue(
      "ScSpecUdtUnionCaseV0Kind",
      ScSpecUdtUnionCaseV0Kind.schema,
      ScSpecUdtUnionCaseV0Kind,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "ScSpecUdtUnionCaseV0Kind",
      ScSpecUdtUnionCaseV0Kind,
      name
    );
  }
  static fromXdrObject(wire) {
    return ScSpecUdtUnionCaseV0Kind.fromValue(wire);
  }
}

export { ScSpecUdtUnionCaseV0Kind };
//# sourceMappingURL=sc-spec-udt-union-case-v0-kind.js.map
