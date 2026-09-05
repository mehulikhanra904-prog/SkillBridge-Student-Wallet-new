import { EnumValue } from "../values/enum-value.js";
export type ClaimableBalanceIdTypeWire = number;
export type ClaimableBalanceIdTypeName = "claimableBalanceIdTypeV0";
/**
 * ```xdr
 * enum ClaimableBalanceIDType
 * {
 *     CLAIMABLE_BALANCE_ID_TYPE_V0 = 0
 * };
 * ```
 */
export declare class ClaimableBalanceIdType extends EnumValue<ClaimableBalanceIdTypeName> {
    static readonly claimableBalanceIdTypeV0: ClaimableBalanceIdType;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"ClaimableBalanceIdType", {
        readonly claimableBalanceIdTypeV0: 0;
    }>;
    static fromValue(value: number): ClaimableBalanceIdType;
    static fromName(name: ClaimableBalanceIdTypeName): ClaimableBalanceIdType;
    static fromXdrObject(wire: number): ClaimableBalanceIdType;
}
