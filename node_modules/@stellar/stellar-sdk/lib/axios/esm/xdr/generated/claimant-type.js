import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class ClaimantType extends EnumValue {
  static claimantTypeV0 = new ClaimantType("claimantTypeV0", 0);
  static schema = enumType("ClaimantType", {
    claimantTypeV0: 0
  });
  static fromValue(value) {
    return enumFromValue(
      "ClaimantType",
      ClaimantType.schema,
      ClaimantType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ClaimantType", ClaimantType, name);
  }
  static fromXdrObject(wire) {
    return ClaimantType.fromValue(wire);
  }
}

export { ClaimantType };
//# sourceMappingURL=claimant-type.js.map
