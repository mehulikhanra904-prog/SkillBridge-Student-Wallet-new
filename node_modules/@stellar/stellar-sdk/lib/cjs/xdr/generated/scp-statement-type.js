'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ScpStatementType extends enumValue.EnumValue {
  static scpStPrepare = new ScpStatementType("scpStPrepare", 0);
  static scpStConfirm = new ScpStatementType("scpStConfirm", 1);
  static scpStExternalize = new ScpStatementType(
    "scpStExternalize",
    2
  );
  static scpStNominate = new ScpStatementType("scpStNominate", 3);
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ScpStatementType", {
      scpStPrepare: 0,
      scpStConfirm: 1,
      scpStExternalize: 2,
      scpStNominate: 3
    }),
    "scpSt"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ScpStatementType",
      ScpStatementType.schema,
      ScpStatementType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ScpStatementType", ScpStatementType, name);
  }
  static fromXdrObject(wire) {
    return ScpStatementType.fromValue(wire);
  }
}

exports.ScpStatementType = ScpStatementType;
//# sourceMappingURL=scp-statement-type.js.map
