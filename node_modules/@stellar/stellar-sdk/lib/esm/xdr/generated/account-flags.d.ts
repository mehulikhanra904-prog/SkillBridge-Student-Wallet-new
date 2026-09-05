import { EnumValue } from "../values/enum-value.js";
export type AccountFlagsWire = number;
export type AccountFlagsName = "authRequiredFlag" | "authRevocableFlag" | "authImmutableFlag" | "authClawbackEnabledFlag";
/**
 * ```xdr
 * enum AccountFlags
 * { // masks for each flag
 *
 *     // Flags set on issuer accounts
 *     // TrustLines are created with authorized set to "false" requiring
 *     // the issuer to set it for each TrustLine
 *     AUTH_REQUIRED_FLAG = 0x1,
 *     // If set, the authorized flag in TrustLines can be cleared
 *     // otherwise, authorization cannot be revoked
 *     AUTH_REVOCABLE_FLAG = 0x2,
 *     // Once set, causes all AUTH_* flags to be read-only
 *     AUTH_IMMUTABLE_FLAG = 0x4,
 *     // Trustlines are created with clawback enabled set to "true",
 *     // and claimable balances created from those trustlines are created
 *     // with clawback enabled set to "true"
 *     AUTH_CLAWBACK_ENABLED_FLAG = 0x8
 * };
 * ```
 */
export declare class AccountFlags extends EnumValue<AccountFlagsName> {
    static readonly authRequiredFlag: AccountFlags;
    static readonly authRevocableFlag: AccountFlags;
    static readonly authImmutableFlag: AccountFlags;
    static readonly authClawbackEnabledFlag: AccountFlags;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly authRequiredFlag: 1;
        readonly authRevocableFlag: 2;
        readonly authImmutableFlag: 4;
        readonly authClawbackEnabledFlag: 8;
    }>> & {
        readonly kind: "enum";
        readonly name: "AccountFlags";
        readonly nameByValue: ReadonlyMap<number, "authRequiredFlag" | "authRevocableFlag" | "authImmutableFlag" | "authClawbackEnabledFlag">;
    } & {
        readonly authRequiredFlag: 1;
        readonly authRevocableFlag: 2;
        readonly authImmutableFlag: 4;
        readonly authClawbackEnabledFlag: 8;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): AccountFlags;
    static fromName(name: AccountFlagsName): AccountFlags;
    static fromXdrObject(wire: number): AccountFlags;
}
