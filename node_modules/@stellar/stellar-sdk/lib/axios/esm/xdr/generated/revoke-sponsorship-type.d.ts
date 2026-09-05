import { EnumValue } from "../values/enum-value.js";
export type RevokeSponsorshipTypeWire = number;
export type RevokeSponsorshipTypeName = "revokeSponsorshipLedgerEntry" | "revokeSponsorshipSigner";
/**
 * ```xdr
 * enum RevokeSponsorshipType
 * {
 *     REVOKE_SPONSORSHIP_LEDGER_ENTRY = 0,
 *     REVOKE_SPONSORSHIP_SIGNER = 1
 * };
 * ```
 */
export declare class RevokeSponsorshipType extends EnumValue<RevokeSponsorshipTypeName> {
    static readonly revokeSponsorshipLedgerEntry: RevokeSponsorshipType;
    static readonly revokeSponsorshipSigner: RevokeSponsorshipType;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly revokeSponsorshipLedgerEntry: 0;
        readonly revokeSponsorshipSigner: 1;
    }>> & {
        readonly kind: "enum";
        readonly name: "RevokeSponsorshipType";
        readonly nameByValue: ReadonlyMap<number, "revokeSponsorshipLedgerEntry" | "revokeSponsorshipSigner">;
    } & {
        readonly revokeSponsorshipLedgerEntry: 0;
        readonly revokeSponsorshipSigner: 1;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): RevokeSponsorshipType;
    static fromName(name: RevokeSponsorshipTypeName): RevokeSponsorshipType;
    static fromXdrObject(wire: number): RevokeSponsorshipType;
}
