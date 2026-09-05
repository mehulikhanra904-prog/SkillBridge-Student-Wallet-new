import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ScSpecType extends EnumValue {
  static scSpecTypeVal = new ScSpecType("scSpecTypeVal", 0);
  static scSpecTypeBool = new ScSpecType("scSpecTypeBool", 1);
  static scSpecTypeVoid = new ScSpecType("scSpecTypeVoid", 2);
  static scSpecTypeError = new ScSpecType("scSpecTypeError", 3);
  static scSpecTypeU32 = new ScSpecType("scSpecTypeU32", 4);
  static scSpecTypeI32 = new ScSpecType("scSpecTypeI32", 5);
  static scSpecTypeU64 = new ScSpecType("scSpecTypeU64", 6);
  static scSpecTypeI64 = new ScSpecType("scSpecTypeI64", 7);
  static scSpecTypeTimepoint = new ScSpecType(
    "scSpecTypeTimepoint",
    8
  );
  static scSpecTypeDuration = new ScSpecType("scSpecTypeDuration", 9);
  static scSpecTypeU128 = new ScSpecType("scSpecTypeU128", 10);
  static scSpecTypeI128 = new ScSpecType("scSpecTypeI128", 11);
  static scSpecTypeU256 = new ScSpecType("scSpecTypeU256", 12);
  static scSpecTypeI256 = new ScSpecType("scSpecTypeI256", 13);
  static scSpecTypeBytes = new ScSpecType("scSpecTypeBytes", 14);
  static scSpecTypeString = new ScSpecType("scSpecTypeString", 16);
  static scSpecTypeSymbol = new ScSpecType("scSpecTypeSymbol", 17);
  static scSpecTypeAddress = new ScSpecType("scSpecTypeAddress", 19);
  static scSpecTypeMuxedAddress = new ScSpecType(
    "scSpecTypeMuxedAddress",
    20
  );
  static scSpecTypeOption = new ScSpecType("scSpecTypeOption", 1e3);
  static scSpecTypeResult = new ScSpecType("scSpecTypeResult", 1001);
  static scSpecTypeVec = new ScSpecType("scSpecTypeVec", 1002);
  static scSpecTypeMap = new ScSpecType("scSpecTypeMap", 1004);
  static scSpecTypeTuple = new ScSpecType("scSpecTypeTuple", 1005);
  static scSpecTypeBytesN = new ScSpecType("scSpecTypeBytesN", 1006);
  static scSpecTypeUdt = new ScSpecType("scSpecTypeUdt", 2e3);
  static schema = withMemberPrefix(
    enumType("ScSpecType", {
      scSpecTypeVal: 0,
      scSpecTypeBool: 1,
      scSpecTypeVoid: 2,
      scSpecTypeError: 3,
      scSpecTypeU32: 4,
      scSpecTypeI32: 5,
      scSpecTypeU64: 6,
      scSpecTypeI64: 7,
      scSpecTypeTimepoint: 8,
      scSpecTypeDuration: 9,
      scSpecTypeU128: 10,
      scSpecTypeI128: 11,
      scSpecTypeU256: 12,
      scSpecTypeI256: 13,
      scSpecTypeBytes: 14,
      scSpecTypeString: 16,
      scSpecTypeSymbol: 17,
      scSpecTypeAddress: 19,
      scSpecTypeMuxedAddress: 20,
      scSpecTypeOption: 1e3,
      scSpecTypeResult: 1001,
      scSpecTypeVec: 1002,
      scSpecTypeMap: 1004,
      scSpecTypeTuple: 1005,
      scSpecTypeBytesN: 1006,
      scSpecTypeUdt: 2e3
    }),
    "scSpecType"
  );
  static fromValue(value) {
    return enumFromValue("ScSpecType", ScSpecType.schema, ScSpecType, value);
  }
  static fromName(name) {
    return enumFromName("ScSpecType", ScSpecType, name);
  }
  static fromXdrObject(wire) {
    return ScSpecType.fromValue(wire);
  }
}

export { ScSpecType };
//# sourceMappingURL=sc-spec-type.js.map
