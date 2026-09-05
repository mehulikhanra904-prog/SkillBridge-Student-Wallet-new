import { EnumValue } from "../values/enum-value.js";
export type StellarValueTypeWire = number;
export type StellarValueTypeName = "stellarValueBasic" | "stellarValueSigned" | "stellarValueEmptyTxSet";
/**
 * ```xdr
 * enum StellarValueType
 * {
 *     STELLAR_VALUE_BASIC = 0,
 *     STELLAR_VALUE_SIGNED = 1,
 *     STELLAR_VALUE_EMPTY_TX_SET = 2
 * };
 * ```
 */
export declare class StellarValueType extends EnumValue<StellarValueTypeName> {
    static readonly stellarValueBasic: StellarValueType;
    static readonly stellarValueSigned: StellarValueType;
    static readonly stellarValueEmptyTxSet: StellarValueType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly stellarValueBasic: 0;
        readonly stellarValueSigned: 1;
        readonly stellarValueEmptyTxSet: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "StellarValueType";
        readonly nameByValue: ReadonlyMap<number, "stellarValueBasic" | "stellarValueSigned" | "stellarValueEmptyTxSet">;
    } & {
        readonly stellarValueBasic: 0;
        readonly stellarValueSigned: 1;
        readonly stellarValueEmptyTxSet: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): StellarValueType;
    static fromName(name: StellarValueTypeName): StellarValueType;
    static fromXdrObject(wire: number): StellarValueType;
}
