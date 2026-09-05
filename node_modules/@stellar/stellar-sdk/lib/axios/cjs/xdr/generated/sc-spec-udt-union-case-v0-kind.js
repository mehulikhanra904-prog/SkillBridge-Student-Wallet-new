'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScSpecUdtUnionCaseV0Kind extends enumValue.EnumValue {
  static scSpecUdtUnionCaseVoidV0 = new ScSpecUdtUnionCaseV0Kind(
    "scSpecUdtUnionCaseVoidV0",
    0
  );
  static scSpecUdtUnionCaseTupleV0 = new ScSpecUdtUnionCaseV0Kind(
    "scSpecUdtUnionCaseTupleV0",
    1
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ScSpecUdtUnionCaseV0Kind", {
      scSpecUdtUnionCaseVoidV0: 0,
      scSpecUdtUnionCaseTupleV0: 1
    }),
    "scSpecUdtUnionCase"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ScSpecUdtUnionCaseV0Kind",
      ScSpecUdtUnionCaseV0Kind.schema,
      ScSpecUdtUnionCaseV0Kind,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "ScSpecUdtUnionCaseV0Kind",
      ScSpecUdtUnionCaseV0Kind,
      name
    );
  }
  static fromXdrObject(wire) {
    return ScSpecUdtUnionCaseV0Kind.fromValue(wire);
  }
}

exports.ScSpecUdtUnionCaseV0Kind = ScSpecUdtUnionCaseV0Kind;
//# sourceMappingURL=sc-spec-udt-union-case-v0-kind.js.map
