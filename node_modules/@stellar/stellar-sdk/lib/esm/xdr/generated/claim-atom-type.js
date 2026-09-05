import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ClaimAtomType extends EnumValue {
  static claimAtomTypeV0 = new ClaimAtomType("claimAtomTypeV0", 0);
  static claimAtomTypeOrderBook = new ClaimAtomType(
    "claimAtomTypeOrderBook",
    1
  );
  static claimAtomTypeLiquidityPool = new ClaimAtomType(
    "claimAtomTypeLiquidityPool",
    2
  );
  static schema = withMemberPrefix(
    enumType("ClaimAtomType", {
      claimAtomTypeV0: 0,
      claimAtomTypeOrderBook: 1,
      claimAtomTypeLiquidityPool: 2
    }),
    "claimAtomType"
  );
  static fromValue(value) {
    return enumFromValue(
      "ClaimAtomType",
      ClaimAtomType.schema,
      ClaimAtomType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ClaimAtomType", ClaimAtomType, name);
  }
  static fromXdrObject(wire) {
    return ClaimAtomType.fromValue(wire);
  }
}

export { ClaimAtomType };
//# sourceMappingURL=claim-atom-type.js.map
