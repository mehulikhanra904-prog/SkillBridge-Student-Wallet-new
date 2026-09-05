import { EnumValue } from "../values/enum-value.js";
export type AccountMergeResultCodeWire = number;
export type AccountMergeResultCodeName = "accountMergeSuccess" | "accountMergeMalformed" | "accountMergeNoAccount" | "accountMergeImmutableSet" | "accountMergeHasSubEntries" | "accountMergeSeqnumTooFar" | "accountMergeDestFull" | "accountMergeIsSponsor";
/**
 * ```xdr
 * enum AccountMergeResultCode
 * {
 *     // codes considered as "success" for the operation
 *     ACCOUNT_MERGE_SUCCESS = 0,
 *     // codes considered as "failure" for the operation
 *     ACCOUNT_MERGE_MALFORMED = -1,       // can't merge onto itself
 *     ACCOUNT_MERGE_NO_ACCOUNT = -2,      // destination does not exist
 *     ACCOUNT_MERGE_IMMUTABLE_SET = -3,   // source account has AUTH_IMMUTABLE set
 *     ACCOUNT_MERGE_HAS_SUB_ENTRIES = -4, // account has trust lines/offers
 *     ACCOUNT_MERGE_SEQNUM_TOO_FAR = -5,  // sequence number is over max allowed
 *     ACCOUNT_MERGE_DEST_FULL = -6,       // can't add source balance to
 *                                         // destination balance
 *     ACCOUNT_MERGE_IS_SPONSOR = -7       // can't merge account that is a sponsor
 * };
 * ```
 */
export declare class AccountMergeResultCode extends EnumValue<AccountMergeResultCodeName> {
    static readonly accountMergeSuccess: AccountMergeResultCode;
    static readonly accountMergeMalformed: AccountMergeResultCode;
    static readonly accountMergeNoAccount: AccountMergeResultCode;
    static readonly accountMergeImmutableSet: AccountMergeResultCode;
    static readonly accountMergeHasSubEntries: AccountMergeResultCode;
    static readonly accountMergeSeqnumTooFar: AccountMergeResultCode;
    static readonly accountMergeDestFull: AccountMergeResultCode;
    static readonly accountMergeIsSponsor: AccountMergeResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly accountMergeSuccess: 0;
        readonly accountMergeMalformed: -1;
        readonly accountMergeNoAccount: -2;
        readonly accountMergeImmutableSet: -3;
        readonly accountMergeHasSubEntries: -4;
        readonly accountMergeSeqnumTooFar: -5;
        readonly accountMergeDestFull: -6;
        readonly accountMergeIsSponsor: -7;
    }>> & {
        readonly kind: "enum";
        readonly name: "AccountMergeResultCode";
        readonly nameByValue: ReadonlyMap<number, "accountMergeSuccess" | "accountMergeMalformed" | "accountMergeNoAccount" | "accountMergeImmutableSet" | "accountMergeHasSubEntries" | "accountMergeSeqnumTooFar" | "accountMergeDestFull" | "accountMergeIsSponsor">;
    } & {
        readonly accountMergeSuccess: 0;
        readonly accountMergeMalformed: -1;
        readonly accountMergeNoAccount: -2;
        readonly accountMergeImmutableSet: -3;
        readonly accountMergeHasSubEntries: -4;
        readonly accountMergeSeqnumTooFar: -5;
        readonly accountMergeDestFull: -6;
        readonly accountMergeIsSponsor: -7;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): AccountMergeResultCode;
    static fromName(name: AccountMergeResultCodeName): AccountMergeResultCode;
    static fromXdrObject(wire: number): AccountMergeResultCode;
}
