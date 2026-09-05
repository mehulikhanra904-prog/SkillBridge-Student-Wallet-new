import { EnumValue } from "../values/enum-value.js";
export type ScAddressTypeWire = number;
export type ScAddressTypeName = "scAddressTypeAccount" | "scAddressTypeContract" | "scAddressTypeMuxedAccount" | "scAddressTypeClaimableBalance" | "scAddressTypeLiquidityPool";
/**
 * ```xdr
 * enum SCAddressType
 * {
 *     SC_ADDRESS_TYPE_ACCOUNT = 0,
 *     SC_ADDRESS_TYPE_CONTRACT = 1,
 *     SC_ADDRESS_TYPE_MUXED_ACCOUNT = 2,
 *     SC_ADDRESS_TYPE_CLAIMABLE_BALANCE = 3,
 *     SC_ADDRESS_TYPE_LIQUIDITY_POOL = 4
 * #ifdef CAP_0084_MUXED_CONTRACT
 *     ,
 *     SC_ADDRESS_TYPE_MUXED_CONTRACT = 5
 * #endif
 * };
 * ```
 */
export declare class ScAddressType extends EnumValue<ScAddressTypeName> {
    static readonly scAddressTypeAccount: ScAddressType;
    static readonly scAddressTypeContract: ScAddressType;
    static readonly scAddressTypeMuxedAccount: ScAddressType;
    static readonly scAddressTypeClaimableBalance: ScAddressType;
    static readonly scAddressTypeLiquidityPool: ScAddressType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly scAddressTypeAccount: 0;
        readonly scAddressTypeContract: 1;
        readonly scAddressTypeMuxedAccount: 2;
        readonly scAddressTypeClaimableBalance: 3;
        readonly scAddressTypeLiquidityPool: 4;
    }>> & {
        readonly kind: "enum";
        readonly name: "ScAddressType";
        readonly nameByValue: ReadonlyMap<number, "scAddressTypeAccount" | "scAddressTypeContract" | "scAddressTypeMuxedAccount" | "scAddressTypeClaimableBalance" | "scAddressTypeLiquidityPool">;
    } & {
        readonly scAddressTypeAccount: 0;
        readonly scAddressTypeContract: 1;
        readonly scAddressTypeMuxedAccount: 2;
        readonly scAddressTypeClaimableBalance: 3;
        readonly scAddressTypeLiquidityPool: 4;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ScAddressType;
    static fromName(name: ScAddressTypeName): ScAddressType;
    static fromXdrObject(wire: number): ScAddressType;
}
