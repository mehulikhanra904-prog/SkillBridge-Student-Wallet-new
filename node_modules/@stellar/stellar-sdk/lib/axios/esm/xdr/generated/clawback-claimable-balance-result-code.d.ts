import { EnumValue } from "../values/enum-value.js";
export type ClawbackClaimableBalanceResultCodeWire = number;
export type ClawbackClaimableBalanceResultCodeName = "clawbackClaimableBalanceSuccess" | "clawbackClaimableBalanceDoesNotExist" | "clawbackClaimableBalanceNotIssuer" | "clawbackClaimableBalanceNotClawbackEnabled";
/**
 * ```xdr
 * enum ClawbackClaimableBalanceResultCode
 * {
 *     // codes considered as "success" for the operation
 *     CLAWBACK_CLAIMABLE_BALANCE_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     CLAWBACK_CLAIMABLE_BALANCE_DOES_NOT_EXIST = -1,
 *     CLAWBACK_CLAIMABLE_BALANCE_NOT_ISSUER = -2,
 *     CLAWBACK_CLAIMABLE_BALANCE_NOT_CLAWBACK_ENABLED = -3
 * };
 * ```
 */
export declare class ClawbackClaimableBalanceResultCode extends EnumValue<ClawbackClaimableBalanceResultCodeName> {
    static readonly clawbackClaimableBalanceSuccess: ClawbackClaimableBalanceResultCode;
    static readonly clawbackClaimableBalanceDoesNotExist: ClawbackClaimableBalanceResultCode;
    static readonly clawbackClaimableBalanceNotIssuer: ClawbackClaimableBalanceResultCode;
    static readonly clawbackClaimableBalanceNotClawbackEnabled: ClawbackClaimableBalanceResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly clawbackClaimableBalanceSuccess: 0;
        readonly clawbackClaimableBalanceDoesNotExist: -1;
        readonly clawbackClaimableBalanceNotIssuer: -2;
        readonly clawbackClaimableBalanceNotClawbackEnabled: -3;
    }>> & {
        readonly kind: "enum";
        readonly name: "ClawbackClaimableBalanceResultCode";
        readonly nameByValue: ReadonlyMap<number, "clawbackClaimableBalanceSuccess" | "clawbackClaimableBalanceDoesNotExist" | "clawbackClaimableBalanceNotIssuer" | "clawbackClaimableBalanceNotClawbackEnabled">;
    } & {
        readonly clawbackClaimableBalanceSuccess: 0;
        readonly clawbackClaimableBalanceDoesNotExist: -1;
        readonly clawbackClaimableBalanceNotIssuer: -2;
        readonly clawbackClaimableBalanceNotClawbackEnabled: -3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ClawbackClaimableBalanceResultCode;
    static fromName(name: ClawbackClaimableBalanceResultCodeName): ClawbackClaimableBalanceResultCode;
    static fromXdrObject(wire: number): ClawbackClaimableBalanceResultCode;
}
