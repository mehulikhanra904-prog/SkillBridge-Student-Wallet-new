export { XdrError, BaseType } from "@stellar/js-xdr";
export type { XdrType, DecodeOptions, EncodeOptions } from "@stellar/js-xdr";
export { XdrValue, encodeBytes, decodeBytes, decodeStream, encodeArray, decodeArray, type XdrArrayOptions, type XdrFormat, type JsonValue, type XdrValueConstructor, } from "./values/xdr-value.js";
export { BytesValue, type BytesEncoding } from "./values/bytes-value.js";
export { EnumValue } from "./values/enum-value.js";
export { XdrString, xdrString } from "./values/xdr-string.js";
export { BigIntValue, bigIntTo128Parts, partsTo128BigInt, bigIntTo256Parts, partsTo256BigInt, type Int128Parts as Int128PartsLegacy, type Int256Parts as Int256PartsLegacy, } from "./values/bigint-value.js";
export * from "./generated/index.js";
export { Int128 } from "./dx/int128.js";
export { Uint128 } from "./dx/uint128.js";
export { Int256 } from "./dx/int256.js";
export { Uint256 } from "./dx/uint256.js";
export type Int64 = bigint;
export declare const Int64: {
    (v: bigint | number | string | (bigint | number | string)[]): bigint;
    fromXdr(input: Uint8Array | string, format?: "raw" | "hex" | "base64"): bigint;
    fromString(s: string): bigint;
    MAX_VALUE: bigint;
    MIN_VALUE: bigint;
};
export type Uint64 = bigint;
export declare const Uint64: {
    (v: bigint | number | string | (bigint | number | string)[]): bigint;
    fromXdr(input: Uint8Array | string, format?: "raw" | "hex" | "base64"): bigint;
    fromString(s: string): bigint;
    MAX_VALUE: bigint;
    MIN_VALUE: bigint;
};
export type Int32 = number;
export declare const Int32: {
    (v: number | string): number;
    fromXdr(input: Uint8Array | string, format?: "raw" | "hex" | "base64"): number;
    fromString(s: string): number;
    MAX_VALUE: number;
    MIN_VALUE: number;
};
export type Uint32 = number;
export declare const Uint32: {
    (v: number | string): number;
    fromXdr(input: Uint8Array | string, format?: "raw" | "hex" | "base64"): number;
    fromString(s: string): number;
    MAX_VALUE: number;
    MIN_VALUE: number;
};
export { expectUnionVariant, isUnionVariant } from "./util.js";
