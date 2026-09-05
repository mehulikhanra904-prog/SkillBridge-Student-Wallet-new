import { EnumValue } from "../values/enum-value.js";
export type AllowTrustResultCodeWire = number;
export type AllowTrustResultCodeName = "allowTrustSuccess" | "allowTrustMalformed" | "allowTrustNoTrustLine" | "allowTrustTrustNotRequired" | "allowTrustCantRevoke" | "allowTrustSelfNotAllowed" | "allowTrustLowReserve";
/**
 * ```xdr
 * enum AllowTrustResultCode
 * {
 *     // codes considered as "success" for the operation
 *     ALLOW_TRUST_SUCCESS = 0,
 *     // codes considered as "failure" for the operation
 *     ALLOW_TRUST_MALFORMED = -1,     // asset is not ASSET_TYPE_ALPHANUM
 *     ALLOW_TRUST_NO_TRUST_LINE = -2, // trustor does not have a trustline
 *                                     // source account does not require trust
 *     ALLOW_TRUST_TRUST_NOT_REQUIRED = -3,
 *     ALLOW_TRUST_CANT_REVOKE = -4,      // source account can't revoke trust,
 *     ALLOW_TRUST_SELF_NOT_ALLOWED = -5, // trusting self is not allowed
 *     ALLOW_TRUST_LOW_RESERVE = -6       // claimable balances can't be created
 *                                        // on revoke due to low reserves
 * };
 * ```
 */
export declare class AllowTrustResultCode extends EnumValue<AllowTrustResultCodeName> {
    static readonly allowTrustSuccess: AllowTrustResultCode;
    static readonly allowTrustMalformed: AllowTrustResultCode;
    static readonly allowTrustNoTrustLine: AllowTrustResultCode;
    static readonly allowTrustTrustNotRequired: AllowTrustResultCode;
    static readonly allowTrustCantRevoke: AllowTrustResultCode;
    static readonly allowTrustSelfNotAllowed: AllowTrustResultCode;
    static readonly allowTrustLowReserve: AllowTrustResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly allowTrustSuccess: 0;
        readonly allowTrustMalformed: -1;
        readonly allowTrustNoTrustLine: -2;
        readonly allowTrustTrustNotRequired: -3;
        readonly allowTrustCantRevoke: -4;
        readonly allowTrustSelfNotAllowed: -5;
        readonly allowTrustLowReserve: -6;
    }>> & {
        readonly kind: "enum";
        readonly name: "AllowTrustResultCode";
        readonly nameByValue: ReadonlyMap<number, "allowTrustSuccess" | "allowTrustMalformed" | "allowTrustNoTrustLine" | "allowTrustTrustNotRequired" | "allowTrustCantRevoke" | "allowTrustSelfNotAllowed" | "allowTrustLowReserve">;
    } & {
        readonly allowTrustSuccess: 0;
        readonly allowTrustMalformed: -1;
        readonly allowTrustNoTrustLine: -2;
        readonly allowTrustTrustNotRequired: -3;
        readonly allowTrustCantRevoke: -4;
        readonly allowTrustSelfNotAllowed: -5;
        readonly allowTrustLowReserve: -6;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): AllowTrustResultCode;
    static fromName(name: AllowTrustResultCodeName): AllowTrustResultCode;
    static fromXdrObject(wire: number): AllowTrustResultCode;
}
