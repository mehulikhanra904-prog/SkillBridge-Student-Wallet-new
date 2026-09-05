import { EnumValue } from "../values/enum-value.js";
export type BinaryFuseFilterTypeWire = number;
export type BinaryFuseFilterTypeName = "binaryFuseFilter8Bit" | "binaryFuseFilter16Bit" | "binaryFuseFilter32Bit";
/**
 * ```xdr
 * enum BinaryFuseFilterType
 * {
 *     BINARY_FUSE_FILTER_8_BIT = 0,
 *     BINARY_FUSE_FILTER_16_BIT = 1,
 *     BINARY_FUSE_FILTER_32_BIT = 2
 * };
 * ```
 */
export declare class BinaryFuseFilterType extends EnumValue<BinaryFuseFilterTypeName> {
    static readonly binaryFuseFilter8Bit: BinaryFuseFilterType;
    static readonly binaryFuseFilter16Bit: BinaryFuseFilterType;
    static readonly binaryFuseFilter32Bit: BinaryFuseFilterType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly binaryFuseFilter8Bit: 0;
        readonly binaryFuseFilter16Bit: 1;
        readonly binaryFuseFilter32Bit: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "BinaryFuseFilterType";
        readonly nameByValue: ReadonlyMap<number, "binaryFuseFilter8Bit" | "binaryFuseFilter16Bit" | "binaryFuseFilter32Bit">;
    } & {
        readonly binaryFuseFilter8Bit: 0;
        readonly binaryFuseFilter16Bit: 1;
        readonly binaryFuseFilter32Bit: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): BinaryFuseFilterType;
    static fromName(name: BinaryFuseFilterTypeName): BinaryFuseFilterType;
    static fromXdrObject(wire: number): BinaryFuseFilterType;
}
