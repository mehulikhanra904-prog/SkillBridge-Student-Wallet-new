import { EnumValue } from "../values/enum-value.js";
export type ClaimAtomTypeWire = number;
export type ClaimAtomTypeName = "claimAtomTypeV0" | "claimAtomTypeOrderBook" | "claimAtomTypeLiquidityPool";
/**
 * ```xdr
 * enum ClaimAtomType
 * {
 *     CLAIM_ATOM_TYPE_V0 = 0,
 *     CLAIM_ATOM_TYPE_ORDER_BOOK = 1,
 *     CLAIM_ATOM_TYPE_LIQUIDITY_POOL = 2
 * };
 * ```
 */
export declare class ClaimAtomType extends EnumValue<ClaimAtomTypeName> {
    static readonly claimAtomTypeV0: ClaimAtomType;
    static readonly claimAtomTypeOrderBook: ClaimAtomType;
    static readonly claimAtomTypeLiquidityPool: ClaimAtomType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly claimAtomTypeV0: 0;
        readonly claimAtomTypeOrderBook: 1;
        readonly claimAtomTypeLiquidityPool: 2;
    }>> & {
        readonly kind: "enum";
        readonly name: "ClaimAtomType";
        readonly nameByValue: ReadonlyMap<number, "claimAtomTypeV0" | "claimAtomTypeOrderBook" | "claimAtomTypeLiquidityPool">;
    } & {
        readonly claimAtomTypeV0: 0;
        readonly claimAtomTypeOrderBook: 1;
        readonly claimAtomTypeLiquidityPool: 2;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ClaimAtomType;
    static fromName(name: ClaimAtomTypeName): ClaimAtomType;
    static fromXdrObject(wire: number): ClaimAtomType;
}
