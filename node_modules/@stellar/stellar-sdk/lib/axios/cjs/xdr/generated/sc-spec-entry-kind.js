'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScSpecEntryKind extends enumValue.EnumValue {
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
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ScSpecEntryKind", {
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
    return enumValue.enumFromValue(
      "ScSpecEntryKind",
      ScSpecEntryKind.schema,
      ScSpecEntryKind,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ScSpecEntryKind", ScSpecEntryKind, name);
  }
  static fromXdrObject(wire) {
    return ScSpecEntryKind.fromValue(wire);
  }
}

exports.ScSpecEntryKind = ScSpecEntryKind;
//# sourceMappingURL=sc-spec-entry-kind.js.map
