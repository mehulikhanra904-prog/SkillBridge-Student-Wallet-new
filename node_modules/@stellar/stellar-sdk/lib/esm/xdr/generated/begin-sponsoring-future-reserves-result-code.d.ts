import { EnumValue } from "../values/enum-value.js";
export type BeginSponsoringFutureReservesResultCodeWire = number;
export type BeginSponsoringFutureReservesResultCodeName = "beginSponsoringFutureReservesSuccess" | "beginSponsoringFutureReservesMalformed" | "beginSponsoringFutureReservesAlreadySponsored" | "beginSponsoringFutureReservesRecursive";
/**
 * ```xdr
 * enum BeginSponsoringFutureReservesResultCode
 * {
 *     // codes considered as "success" for the operation
 *     BEGIN_SPONSORING_FUTURE_RESERVES_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     BEGIN_SPONSORING_FUTURE_RESERVES_MALFORMED = -1,
 *     BEGIN_SPONSORING_FUTURE_RESERVES_ALREADY_SPONSORED = -2,
 *     BEGIN_SPONSORING_FUTURE_RESERVES_RECURSIVE = -3
 * };
 * ```
 */
export declare class BeginSponsoringFutureReservesResultCode extends EnumValue<BeginSponsoringFutureReservesResultCodeName> {
    static readonly beginSponsoringFutureReservesSuccess: BeginSponsoringFutureReservesResultCode;
    static readonly beginSponsoringFutureReservesMalformed: BeginSponsoringFutureReservesResultCode;
    static readonly beginSponsoringFutureReservesAlreadySponsored: BeginSponsoringFutureReservesResultCode;
    static readonly beginSponsoringFutureReservesRecursive: BeginSponsoringFutureReservesResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly beginSponsoringFutureReservesSuccess: 0;
        readonly beginSponsoringFutureReservesMalformed: -1;
        readonly beginSponsoringFutureReservesAlreadySponsored: -2;
        readonly beginSponsoringFutureReservesRecursive: -3;
    }>> & {
        readonly kind: "enum";
        readonly name: "BeginSponsoringFutureReservesResultCode";
        readonly nameByValue: ReadonlyMap<number, "beginSponsoringFutureReservesSuccess" | "beginSponsoringFutureReservesMalformed" | "beginSponsoringFutureReservesAlreadySponsored" | "beginSponsoringFutureReservesRecursive">;
    } & {
        readonly beginSponsoringFutureReservesSuccess: 0;
        readonly beginSponsoringFutureReservesMalformed: -1;
        readonly beginSponsoringFutureReservesAlreadySponsored: -2;
        readonly beginSponsoringFutureReservesRecursive: -3;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): BeginSponsoringFutureReservesResultCode;
    static fromName(name: BeginSponsoringFutureReservesResultCodeName): BeginSponsoringFutureReservesResultCode;
    static fromXdrObject(wire: number): BeginSponsoringFutureReservesResultCode;
}
