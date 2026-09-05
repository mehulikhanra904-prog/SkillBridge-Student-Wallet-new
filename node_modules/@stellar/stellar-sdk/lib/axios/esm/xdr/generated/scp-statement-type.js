import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScpStatementType extends EnumValue {
  static scpStPrepare = new ScpStatementType("scpStPrepare", 0);
  static scpStConfirm = new ScpStatementType("scpStConfirm", 1);
  static scpStExternalize = new ScpStatementType(
    "scpStExternalize",
    2
  );
  static scpStNominate = new ScpStatementType("scpStNominate", 3);
  static schema = withMemberPrefix(
    enumType("ScpStatementType", {
      scpStPrepare: 0,
      scpStConfirm: 1,
      scpStExternalize: 2,
      scpStNominate: 3
    }),
    "scpSt"
  );
  static fromValue(value) {
    return enumFromValue(
      "ScpStatementType",
      ScpStatementType.schema,
      ScpStatementType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ScpStatementType", ScpStatementType, name);
  }
  static fromXdrObject(wire) {
    return ScpStatementType.fromValue(wire);
  }
}

export { ScpStatementType };
//# sourceMappingURL=scp-statement-type.js.map
