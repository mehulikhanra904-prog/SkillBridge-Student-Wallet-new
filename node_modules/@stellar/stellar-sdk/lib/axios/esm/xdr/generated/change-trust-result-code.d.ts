import { EnumValue } from "../values/enum-value.js";
export type ChangeTrustResultCodeWire = number;
export type ChangeTrustResultCodeName = "changeTrustSuccess" | "changeTrustMalformed" | "changeTrustNoIssuer" | "changeTrustInvalidLimit" | "changeTrustLowReserve" | "changeTrustSelfNotAllowed" | "changeTrustTrustLineMissing" | "changeTrustCannotDelete" | "changeTrustNotAuthMaintainLiabilities";
/**
 * ```xdr
 * enum ChangeTrustResultCode
 * {
 *     // codes considered as "success" for the operation
 *     CHANGE_TRUST_SUCCESS = 0,
 *     // codes considered as "failure" for the operation
 *     CHANGE_TRUST_MALFORMED = -1,     // bad input
 *     CHANGE_TRUST_NO_ISSUER = -2,     // could not find issuer
 *     CHANGE_TRUST_INVALID_LIMIT = -3, // cannot drop limit below balance
 *                                      // cannot create with a limit of 0
 *     CHANGE_TRUST_LOW_RESERVE =
 *         -4, // not enough funds to create a new trust line,
 *     CHANGE_TRUST_SELF_NOT_ALLOWED = -5,   // trusting self is not allowed
 *     CHANGE_TRUST_TRUST_LINE_MISSING = -6, // Asset trustline is missing for pool
 *     CHANGE_TRUST_CANNOT_DELETE =
 *         -7, // Asset trustline is still referenced in a pool
 *     CHANGE_TRUST_NOT_AUTH_MAINTAIN_LIABILITIES =
 *         -8 // Asset trustline is deauthorized
 * };
 * ```
 */
export declare class ChangeTrustResultCode extends EnumValue<ChangeTrustResultCodeName> {
    static readonly changeTrustSuccess: ChangeTrustResultCode;
    static readonly changeTrustMalformed: ChangeTrustResultCode;
    static readonly changeTrustNoIssuer: ChangeTrustResultCode;
    static readonly changeTrustInvalidLimit: ChangeTrustResultCode;
    static readonly changeTrustLowReserve: ChangeTrustResultCode;
    static readonly changeTrustSelfNotAllowed: ChangeTrustResultCode;
    static readonly changeTrustTrustLineMissing: ChangeTrustResultCode;
    static readonly changeTrustCannotDelete: ChangeTrustResultCode;
    static readonly changeTrustNotAuthMaintainLiabilities: ChangeTrustResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly changeTrustSuccess: 0;
        readonly changeTrustMalformed: -1;
        readonly changeTrustNoIssuer: -2;
        readonly changeTrustInvalidLimit: -3;
        readonly changeTrustLowReserve: -4;
        readonly changeTrustSelfNotAllowed: -5;
        readonly changeTrustTrustLineMissing: -6;
        readonly changeTrustCannotDelete: -7;
        readonly changeTrustNotAuthMaintainLiabilities: -8;
    }>> & {
        readonly kind: "enum";
        readonly name: "ChangeTrustResultCode";
        readonly nameByValue: ReadonlyMap<number, "changeTrustSuccess" | "changeTrustMalformed" | "changeTrustNoIssuer" | "changeTrustInvalidLimit" | "changeTrustLowReserve" | "changeTrustSelfNotAllowed" | "changeTrustTrustLineMissing" | "changeTrustCannotDelete" | "changeTrustNotAuthMaintainLiabilities">;
    } & {
        readonly changeTrustSuccess: 0;
        readonly changeTrustMalformed: -1;
        readonly changeTrustNoIssuer: -2;
        readonly changeTrustInvalidLimit: -3;
        readonly changeTrustLowReserve: -4;
        readonly changeTrustSelfNotAllowed: -5;
        readonly changeTrustTrustLineMissing: -6;
        readonly changeTrustCannotDelete: -7;
        readonly changeTrustNotAuthMaintainLiabilities: -8;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ChangeTrustResultCode;
    static fromName(name: ChangeTrustResultCodeName): ChangeTrustResultCode;
    static fromXdrObject(wire: number): ChangeTrustResultCode;
}
