import { EnumValue } from "../values/enum-value.js";
export type EndSponsoringFutureReservesResultCodeWire = number;
export type EndSponsoringFutureReservesResultCodeName = "endSponsoringFutureReservesSuccess" | "endSponsoringFutureReservesNotSponsored";
/**
 * ```xdr
 * enum EndSponsoringFutureReservesResultCode
 * {
 *     // codes considered as "success" for the operation
 *     END_SPONSORING_FUTURE_RESERVES_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     END_SPONSORING_FUTURE_RESERVES_NOT_SPONSORED = -1
 * };
 * ```
 */
export declare class EndSponsoringFutureReservesResultCode extends EnumValue<EndSponsoringFutureReservesResultCodeName> {
    static readonly endSponsoringFutureReservesSuccess: EndSponsoringFutureReservesResultCode;
    static readonly endSponsoringFutureReservesNotSponsored: EndSponsoringFutureReservesResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly endSponsoringFutureReservesSuccess: 0;
        readonly endSponsoringFutureReservesNotSponsored: -1;
    }>> & {
        readonly kind: "enum";
        readonly name: "EndSponsoringFutureReservesResultCode";
        readonly nameByValue: ReadonlyMap<number, "endSponsoringFutureReservesSuccess" | "endSponsoringFutureReservesNotSponsored">;
    } & {
        readonly endSponsoringFutureReservesSuccess: 0;
        readonly endSponsoringFutureReservesNotSponsored: -1;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): EndSponsoringFutureReservesResultCode;
    static fromName(name: EndSponsoringFutureReservesResultCodeName): EndSponsoringFutureReservesResultCode;
    static fromXdrObject(wire: number): EndSponsoringFutureReservesResultCode;
}
