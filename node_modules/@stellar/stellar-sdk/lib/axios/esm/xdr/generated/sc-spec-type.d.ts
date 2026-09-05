import { EnumValue } from "../values/enum-value.js";
export type ScSpecTypeWire = number;
export type ScSpecTypeName = "scSpecTypeVal" | "scSpecTypeBool" | "scSpecTypeVoid" | "scSpecTypeError" | "scSpecTypeU32" | "scSpecTypeI32" | "scSpecTypeU64" | "scSpecTypeI64" | "scSpecTypeTimepoint" | "scSpecTypeDuration" | "scSpecTypeU128" | "scSpecTypeI128" | "scSpecTypeU256" | "scSpecTypeI256" | "scSpecTypeBytes" | "scSpecTypeString" | "scSpecTypeSymbol" | "scSpecTypeAddress" | "scSpecTypeMuxedAddress" | "scSpecTypeOption" | "scSpecTypeResult" | "scSpecTypeVec" | "scSpecTypeMap" | "scSpecTypeTuple" | "scSpecTypeBytesN" | "scSpecTypeUdt";
/**
 * ```xdr
 * enum SCSpecType
 * {
 *     SC_SPEC_TYPE_VAL = 0,
 *
 *     // Types with no parameters.
 *     SC_SPEC_TYPE_BOOL = 1,
 *     SC_SPEC_TYPE_VOID = 2,
 *     SC_SPEC_TYPE_ERROR = 3,
 *     SC_SPEC_TYPE_U32 = 4,
 *     SC_SPEC_TYPE_I32 = 5,
 *     SC_SPEC_TYPE_U64 = 6,
 *     SC_SPEC_TYPE_I64 = 7,
 *     SC_SPEC_TYPE_TIMEPOINT = 8,
 *     SC_SPEC_TYPE_DURATION = 9,
 *     SC_SPEC_TYPE_U128 = 10,
 *     SC_SPEC_TYPE_I128 = 11,
 *     SC_SPEC_TYPE_U256 = 12,
 *     SC_SPEC_TYPE_I256 = 13,
 *     SC_SPEC_TYPE_BYTES = 14,
 *     SC_SPEC_TYPE_STRING = 16,
 *     SC_SPEC_TYPE_SYMBOL = 17,
 *     SC_SPEC_TYPE_ADDRESS = 19,
 *     SC_SPEC_TYPE_MUXED_ADDRESS = 20,
 *
 *     // Types with parameters.
 *     SC_SPEC_TYPE_OPTION = 1000,
 *     SC_SPEC_TYPE_RESULT = 1001,
 *     SC_SPEC_TYPE_VEC = 1002,
 *     SC_SPEC_TYPE_MAP = 1004,
 *     SC_SPEC_TYPE_TUPLE = 1005,
 *     SC_SPEC_TYPE_BYTES_N = 1006,
 *
 *     // User defined types.
 *     SC_SPEC_TYPE_UDT = 2000
 * };
 * ```
 */
export declare class ScSpecType extends EnumValue<ScSpecTypeName> {
    static readonly scSpecTypeVal: ScSpecType;
    static readonly scSpecTypeBool: ScSpecType;
    static readonly scSpecTypeVoid: ScSpecType;
    static readonly scSpecTypeError: ScSpecType;
    static readonly scSpecTypeU32: ScSpecType;
    static readonly scSpecTypeI32: ScSpecType;
    static readonly scSpecTypeU64: ScSpecType;
    static readonly scSpecTypeI64: ScSpecType;
    static readonly scSpecTypeTimepoint: ScSpecType;
    static readonly scSpecTypeDuration: ScSpecType;
    static readonly scSpecTypeU128: ScSpecType;
    static readonly scSpecTypeI128: ScSpecType;
    static readonly scSpecTypeU256: ScSpecType;
    static readonly scSpecTypeI256: ScSpecType;
    static readonly scSpecTypeBytes: ScSpecType;
    static readonly scSpecTypeString: ScSpecType;
    static readonly scSpecTypeSymbol: ScSpecType;
    static readonly scSpecTypeAddress: ScSpecType;
    static readonly scSpecTypeMuxedAddress: ScSpecType;
    static readonly scSpecTypeOption: ScSpecType;
    static readonly scSpecTypeResult: ScSpecType;
    static readonly scSpecTypeVec: ScSpecType;
    static readonly scSpecTypeMap: ScSpecType;
    static readonly scSpecTypeTuple: ScSpecType;
    static readonly scSpecTypeBytesN: ScSpecType;
    static readonly scSpecTypeUdt: ScSpecType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scSpecTypeVal: 0;
        readonly scSpecTypeBool: 1;
        readonly scSpecTypeVoid: 2;
        readonly scSpecTypeError: 3;
        readonly scSpecTypeU32: 4;
        readonly scSpecTypeI32: 5;
        readonly scSpecTypeU64: 6;
        readonly scSpecTypeI64: 7;
        readonly scSpecTypeTimepoint: 8;
        readonly scSpecTypeDuration: 9;
        readonly scSpecTypeU128: 10;
        readonly scSpecTypeI128: 11;
        readonly scSpecTypeU256: 12;
        readonly scSpecTypeI256: 13;
        readonly scSpecTypeBytes: 14;
        readonly scSpecTypeString: 16;
        readonly scSpecTypeSymbol: 17;
        readonly scSpecTypeAddress: 19;
        readonly scSpecTypeMuxedAddress: 20;
        readonly scSpecTypeOption: 1000;
        readonly scSpecTypeResult: 1001;
        readonly scSpecTypeVec: 1002;
        readonly scSpecTypeMap: 1004;
        readonly scSpecTypeTuple: 1005;
        readonly scSpecTypeBytesN: 1006;
        readonly scSpecTypeUdt: 2000;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScSpecType";
        readonly nameByValue: ReadonlyMap<number, "scSpecTypeVal" | "scSpecTypeBool" | "scSpecTypeVoid" | "scSpecTypeError" | "scSpecTypeU32" | "scSpecTypeI32" | "scSpecTypeU64" | "scSpecTypeI64" | "scSpecTypeTimepoint" | "scSpecTypeDuration" | "scSpecTypeU128" | "scSpecTypeI128" | "scSpecTypeU256" | "scSpecTypeI256" | "scSpecTypeBytes" | "scSpecTypeString" | "scSpecTypeSymbol" | "scSpecTypeAddress" | "scSpecTypeMuxedAddress" | "scSpecTypeOption" | "scSpecTypeResult" | "scSpecTypeVec" | "scSpecTypeMap" | "scSpecTypeTuple" | "scSpecTypeBytesN" | "scSpecTypeUdt">;
    } & {
        readonly scSpecTypeVal: 0;
        readonly scSpecTypeBool: 1;
        readonly scSpecTypeVoid: 2;
        readonly scSpecTypeError: 3;
        readonly scSpecTypeU32: 4;
        readonly scSpecTypeI32: 5;
        readonly scSpecTypeU64: 6;
        readonly scSpecTypeI64: 7;
        readonly scSpecTypeTimepoint: 8;
        readonly scSpecTypeDuration: 9;
        readonly scSpecTypeU128: 10;
        readonly scSpecTypeI128: 11;
        readonly scSpecTypeU256: 12;
        readonly scSpecTypeI256: 13;
        readonly scSpecTypeBytes: 14;
        readonly scSpecTypeString: 16;
        readonly scSpecTypeSymbol: 17;
        readonly scSpecTypeAddress: 19;
        readonly scSpecTypeMuxedAddress: 20;
        readonly scSpecTypeOption: 1000;
        readonly scSpecTypeResult: 1001;
        readonly scSpecTypeVec: 1002;
        readonly scSpecTypeMap: 1004;
        readonly scSpecTypeTuple: 1005;
        readonly scSpecTypeBytesN: 1006;
        readonly scSpecTypeUdt: 2000;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScSpecType;
    static fromName(name: ScSpecTypeName): ScSpecType;
    static fromXdrObject(wire: number): ScSpecType;
}
