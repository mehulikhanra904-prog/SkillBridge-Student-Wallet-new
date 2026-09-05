import { EnumValue } from "../values/enum-value.js";
export type ClaimClaimableBalanceResultCodeWire = number;
export type ClaimClaimableBalanceResultCodeName = "claimClaimableBalanceSuccess" | "claimClaimableBalanceDoesNotExist" | "claimClaimableBalanceCannotClaim" | "claimClaimableBalanceLineFull" | "claimClaimableBalanceNoTrust" | "claimClaimableBalanceNotAuthorized" | "claimClaimableBalanceTrustlineFrozen";
/**
 * ```xdr
 * enum ClaimClaimableBalanceResultCode
 * {
 *     CLAIM_CLAIMABLE_BALANCE_SUCCESS = 0,
 *     CLAIM_CLAIMABLE_BALANCE_DOES_NOT_EXIST = -1,
 *     CLAIM_CLAIMABLE_BALANCE_CANNOT_CLAIM = -2,
 *     CLAIM_CLAIMABLE_BALANCE_LINE_FULL = -3,
 *     CLAIM_CLAIMABLE_BALANCE_NO_TRUST = -4,
 *     CLAIM_CLAIMABLE_BALANCE_NOT_AUTHORIZED = -5,
 *     CLAIM_CLAIMABLE_BALANCE_TRUSTLINE_FROZEN = -6
 * };
 * ```
 */
export declare class ClaimClaimableBalanceResultCode extends EnumValue<ClaimClaimableBalanceResultCodeName> {
    static readonly claimClaimableBalanceSuccess: ClaimClaimableBalanceResultCode;
    static readonly claimClaimableBalanceDoesNotExist: ClaimClaimableBalanceResultCode;
    static readonly claimClaimableBalanceCannotClaim: ClaimClaimableBalanceResultCode;
    static readonly claimClaimableBalanceLineFull: ClaimClaimableBalanceResultCode;
    static readonly claimClaimableBalanceNoTrust: ClaimClaimableBalanceResultCode;
    static readonly claimClaimableBalanceNotAuthorized: ClaimClaimableBalanceResultCode;
    static readonly claimClaimableBalanceTrustlineFrozen: ClaimClaimableBalanceResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly claimClaimableBalanceSuccess: 0;
        readonly claimClaimableBalanceDoesNotExist: -1;
        readonly claimClaimableBalanceCannotClaim: -2;
        readonly claimClaimableBalanceLineFull: -3;
        readonly claimClaimableBalanceNoTrust: -4;
        readonly claimClaimableBalanceNotAuthorized: -5;
        readonly claimClaimableBalanceTrustlineFrozen: -6;
    }>> & {
        readonly kind: "enum";
        readonly name: "ClaimClaimableBalanceResultCode";
        readonly nameByValue: ReadonlyMap<number, "claimClaimableBalanceSuccess" | "claimClaimableBalanceDoesNotExist" | "claimClaimableBalanceCannotClaim" | "claimClaimableBalanceLineFull" | "claimClaimableBalanceNoTrust" | "claimClaimableBalanceNotAuthorized" | "claimClaimableBalanceTrustlineFrozen">;
    } & {
        readonly claimClaimableBalanceSuccess: 0;
        readonly claimClaimableBalanceDoesNotExist: -1;
        readonly claimClaimableBalanceCannotClaim: -2;
        readonly claimClaimableBalanceLineFull: -3;
        readonly claimClaimableBalanceNoTrust: -4;
        readonly claimClaimableBalanceNotAuthorized: -5;
        readonly claimClaimableBalanceTrustlineFrozen: -6;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ClaimClaimableBalanceResultCode;
    static fromName(name: ClaimClaimableBalanceResultCodeName): ClaimClaimableBalanceResultCode;
    static fromXdrObject(wire: number): ClaimClaimableBalanceResultCode;
}
