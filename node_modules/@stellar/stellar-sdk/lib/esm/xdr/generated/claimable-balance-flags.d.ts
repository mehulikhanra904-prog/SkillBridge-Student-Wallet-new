import { EnumValue } from "../values/enum-value.js";
export type ClaimableBalanceFlagsWire = number;
export type ClaimableBalanceFlagsName = "claimableBalanceClawbackEnabledFlag";
/**
 * ```xdr
 * enum ClaimableBalanceFlags
 * {
 *     // If set, the issuer account of the asset held by the claimable balance may
 *     // clawback the claimable balance
 *     CLAIMABLE_BALANCE_CLAWBACK_ENABLED_FLAG = 0x1
 * };
 * ```
 */
export declare class ClaimableBalanceFlags extends EnumValue<ClaimableBalanceFlagsName> {
    static readonly claimableBalanceClawbackEnabledFlag: ClaimableBalanceFlags;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"ClaimableBalanceFlags", {
        readonly claimableBalanceClawbackEnabledFlag: 1;
    }>;
    static fromValue(value: number): ClaimableBalanceFlags;
    static fromName(name: ClaimableBalanceFlagsName): ClaimableBalanceFlags;
    static fromXdrObject(wire: number): ClaimableBalanceFlags;
}
