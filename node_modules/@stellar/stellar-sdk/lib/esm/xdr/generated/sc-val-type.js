import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScValType extends EnumValue {
  static scvBool = new ScValType("scvBool", 0);
  static scvVoid = new ScValType("scvVoid", 1);
  static scvError = new ScValType("scvError", 2);
  static scvU32 = new ScValType("scvU32", 3);
  static scvI32 = new ScValType("scvI32", 4);
  static scvU64 = new ScValType("scvU64", 5);
  static scvI64 = new ScValType("scvI64", 6);
  static scvTimepoint = new ScValType("scvTimepoint", 7);
  static scvDuration = new ScValType("scvDuration", 8);
  static scvU128 = new ScValType("scvU128", 9);
  static scvI128 = new ScValType("scvI128", 10);
  static scvU256 = new ScValType("scvU256", 11);
  static scvI256 = new ScValType("scvI256", 12);
  static scvBytes = new ScValType("scvBytes", 13);
  static scvString = new ScValType("scvString", 14);
  static scvSymbol = new ScValType("scvSymbol", 15);
  static scvVec = new ScValType("scvVec", 16);
  static scvMap = new ScValType("scvMap", 17);
  static scvAddress = new ScValType("scvAddress", 18);
  static scvContractInstance = new ScValType(
    "scvContractInstance",
    19
  );
  static scvLedgerKeyContractInstance = new ScValType(
    "scvLedgerKeyContractInstance",
    20
  );
  static scvLedgerKeyNonce = new ScValType("scvLedgerKeyNonce", 21);
  static scvExecutableTag = new ScValType("scvExecutableTag", 22);
  static schema = withMemberPrefix(
    enumType("ScValType", {
      scvBool: 0,
      scvVoid: 1,
      scvError: 2,
      scvU32: 3,
      scvI32: 4,
      scvU64: 5,
      scvI64: 6,
      scvTimepoint: 7,
      scvDuration: 8,
      scvU128: 9,
      scvI128: 10,
      scvU256: 11,
      scvI256: 12,
      scvBytes: 13,
      scvString: 14,
      scvSymbol: 15,
      scvVec: 16,
      scvMap: 17,
      scvAddress: 18,
      scvContractInstance: 19,
      scvLedgerKeyContractInstance: 20,
      scvLedgerKeyNonce: 21,
      scvExecutableTag: 22
    }),
    "scv"
  );
  static fromValue(value) {
    return enumFromValue("ScValType", ScValType.schema, ScValType, value);
  }
  static fromName(name) {
    return enumFromName("ScValType", ScValType, name);
  }
  static fromXdrObject(wire) {
    return ScValType.fromValue(wire);
  }
}

export { ScValType };
//# sourceMappingURL=sc-val-type.js.map
