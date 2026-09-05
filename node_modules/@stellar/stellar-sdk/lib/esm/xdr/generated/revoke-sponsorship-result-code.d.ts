import { EnumValue } from "../values/enum-value.js";
export type RevokeSponsorshipResultCodeWire = number;
export type RevokeSponsorshipResultCodeName = "revokeSponsorshipSuccess" | "revokeSponsorshipDoesNotExist" | "revokeSponsorshipNotSponsor" | "revokeSponsorshipLowReserve" | "revokeSponsorshipOnlyTransferable" | "revokeSponsorshipMalformed";
/**
 * ```xdr
 * enum RevokeSponsorshipResultCode
 * {
 *     // codes considered as "success" for the operation
 *     REVOKE_SPONSORSHIP_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     REVOKE_SPONSORSHIP_DOES_NOT_EXIST = -1,
 *     REVOKE_SPONSORSHIP_NOT_SPONSOR = -2,
 *     REVOKE_SPONSORSHIP_LOW_RESERVE = -3,
 *     REVOKE_SPONSORSHIP_ONLY_TRANSFERABLE = -4,
 *     REVOKE_SPONSORSHIP_MALFORMED = -5
 * };
 * ```
 */
export declare class RevokeSponsorshipResultCode extends EnumValue<RevokeSponsorshipResultCodeName> {
    static readonly revokeSponsorshipSuccess: RevokeSponsorshipResultCode;
    static readonly revokeSponsorshipDoesNotExist: RevokeSponsorshipResultCode;
    static readonly revokeSponsorshipNotSponsor: RevokeSponsorshipResultCode;
    static readonly revokeSponsorshipLowReserve: RevokeSponsorshipResultCode;
    static readonly revokeSponsorshipOnlyTransferable: RevokeSponsorshipResultCode;
    static readonly revokeSponsorshipMalformed: RevokeSponsorshipResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly revokeSponsorshipSuccess: 0;
        readonly revokeSponsorshipDoesNotExist: -1;
        readonly revokeSponsorshipNotSponsor: -2;
        readonly revokeSponsorshipLowReserve: -3;
        readonly revokeSponsorshipOnlyTransferable: -4;
        readonly revokeSponsorshipMalformed: -5;
    }>> & {
        readonly kind: "enum";
        readonly name: "RevokeSponsorshipResultCode";
        readonly nameByValue: ReadonlyMap<number, "revokeSponsorshipSuccess" | "revokeSponsorshipDoesNotExist" | "revokeSponsorshipNotSponsor" | "revokeSponsorshipLowReserve" | "revokeSponsorshipOnlyTransferable" | "revokeSponsorshipMalformed">;
    } & {
        readonly revokeSponsorshipSuccess: 0;
        readonly revokeSponsorshipDoesNotExist: -1;
        readonly revokeSponsorshipNotSponsor: -2;
        readonly revokeSponsorshipLowReserve: -3;
        readonly revokeSponsorshipOnlyTransferable: -4;
        readonly revokeSponsorshipMalformed: -5;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): RevokeSponsorshipResultCode;
    static fromName(name: RevokeSponsorshipResultCodeName): RevokeSponsorshipResultCode;
    static fromXdrObject(wire: number): RevokeSponsorshipResultCode;
}
