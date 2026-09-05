import { EnumValue } from "../values/enum-value.js";
export type TrustLineFlagsWire = number;
export type TrustLineFlagsName = "authorizedFlag" | "authorizedToMaintainLiabilitiesFlag" | "trustlineClawbackEnabledFlag";
/**
 * ```xdr
 * enum TrustLineFlags
 * {
 *     // issuer has authorized account to perform transactions with its credit
 *     AUTHORIZED_FLAG = 1,
 *     // issuer has authorized account to maintain and reduce liabilities for its
 *     // credit
 *     AUTHORIZED_TO_MAINTAIN_LIABILITIES_FLAG = 2,
 *     // issuer has specified that it may clawback its credit, and that claimable
 *     // balances created with its credit may also be clawed back
 *     TRUSTLINE_CLAWBACK_ENABLED_FLAG = 4
 * };
 * ```
 */
export declare class TrustLineFlags extends EnumValue<TrustLineFlagsName> {
    static readonly authorizedFlag: TrustLineFlags;
    static readonly authorizedToMaintainLiabilitiesFlag: TrustLineFlags;
    static readonly trustlineClawbackEnabledFlag: TrustLineFlags;
    static readonly schema: import("@stellar/js-xdr").EnumSchema<"TrustLineFlags", {
        readonly authorizedFlag: 1;
        readonly authorizedToMaintainLiabilitiesFlag: 2;
        readonly trustlineClawbackEnabledFlag: 4;
    }>;
    static fromValue(value: number): TrustLineFlags;
    static fromName(name: TrustLineFlagsName): TrustLineFlags;
    static fromXdrObject(wire: number): TrustLineFlags;
}
