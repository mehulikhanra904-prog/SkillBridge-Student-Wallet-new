import { EnumValue } from "../values/enum-value.js";
export type PathPaymentStrictSendResultCodeWire = number;
export type PathPaymentStrictSendResultCodeName = "pathPaymentStrictSendSuccess" | "pathPaymentStrictSendMalformed" | "pathPaymentStrictSendUnderfunded" | "pathPaymentStrictSendSrcNoTrust" | "pathPaymentStrictSendSrcNotAuthorized" | "pathPaymentStrictSendNoDestination" | "pathPaymentStrictSendNoTrust" | "pathPaymentStrictSendNotAuthorized" | "pathPaymentStrictSendLineFull" | "pathPaymentStrictSendNoIssuer" | "pathPaymentStrictSendTooFewOffers" | "pathPaymentStrictSendOfferCrossSelf" | "pathPaymentStrictSendUnderDestmin";
/**
 * ```xdr
 * enum PathPaymentStrictSendResultCode
 * {
 *     // codes considered as "success" for the operation
 *     PATH_PAYMENT_STRICT_SEND_SUCCESS = 0, // success
 *
 *     // codes considered as "failure" for the operation
 *     PATH_PAYMENT_STRICT_SEND_MALFORMED = -1, // bad input
 *     PATH_PAYMENT_STRICT_SEND_UNDERFUNDED =
 *         -2, // not enough funds in source account
 *     PATH_PAYMENT_STRICT_SEND_SRC_NO_TRUST =
 *         -3, // no trust line on source account
 *     PATH_PAYMENT_STRICT_SEND_SRC_NOT_AUTHORIZED =
 *         -4, // source not authorized to transfer
 *     PATH_PAYMENT_STRICT_SEND_NO_DESTINATION =
 *         -5, // destination account does not exist
 *     PATH_PAYMENT_STRICT_SEND_NO_TRUST =
 *         -6, // dest missing a trust line for asset
 *     PATH_PAYMENT_STRICT_SEND_NOT_AUTHORIZED =
 *         -7, // dest not authorized to hold asset
 *     PATH_PAYMENT_STRICT_SEND_LINE_FULL = -8, // dest would go above their limit
 *     PATH_PAYMENT_STRICT_SEND_NO_ISSUER = -9, // missing issuer on one asset
 *     PATH_PAYMENT_STRICT_SEND_TOO_FEW_OFFERS =
 *         -10, // not enough offers to satisfy path
 *     PATH_PAYMENT_STRICT_SEND_OFFER_CROSS_SELF =
 *         -11, // would cross one of its own offers
 *     PATH_PAYMENT_STRICT_SEND_UNDER_DESTMIN = -12 // could not satisfy destMin
 * };
 * ```
 */
export declare class PathPaymentStrictSendResultCode extends EnumValue<PathPaymentStrictSendResultCodeName> {
    static readonly pathPaymentStrictSendSuccess: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendMalformed: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendUnderfunded: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendSrcNoTrust: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendSrcNotAuthorized: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendNoDestination: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendNoTrust: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendNotAuthorized: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendLineFull: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendNoIssuer: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendTooFewOffers: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendOfferCrossSelf: PathPaymentStrictSendResultCode;
    static readonly pathPaymentStrictSendUnderDestmin: PathPaymentStrictSendResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly pathPaymentStrictSendSuccess: 0;
        readonly pathPaymentStrictSendMalformed: -1;
        readonly pathPaymentStrictSendUnderfunded: -2;
        readonly pathPaymentStrictSendSrcNoTrust: -3;
        readonly pathPaymentStrictSendSrcNotAuthorized: -4;
        readonly pathPaymentStrictSendNoDestination: -5;
        readonly pathPaymentStrictSendNoTrust: -6;
        readonly pathPaymentStrictSendNotAuthorized: -7;
        readonly pathPaymentStrictSendLineFull: -8;
        readonly pathPaymentStrictSendNoIssuer: -9;
        readonly pathPaymentStrictSendTooFewOffers: -10;
        readonly pathPaymentStrictSendOfferCrossSelf: -11;
        readonly pathPaymentStrictSendUnderDestmin: -12;
    }>> & {
        readonly kind: "enum";
        readonly name: "PathPaymentStrictSendResultCode";
        readonly nameByValue: ReadonlyMap<number, "pathPaymentStrictSendSuccess" | "pathPaymentStrictSendMalformed" | "pathPaymentStrictSendUnderfunded" | "pathPaymentStrictSendSrcNoTrust" | "pathPaymentStrictSendSrcNotAuthorized" | "pathPaymentStrictSendNoDestination" | "pathPaymentStrictSendNoTrust" | "pathPaymentStrictSendNotAuthorized" | "pathPaymentStrictSendLineFull" | "pathPaymentStrictSendNoIssuer" | "pathPaymentStrictSendTooFewOffers" | "pathPaymentStrictSendOfferCrossSelf" | "pathPaymentStrictSendUnderDestmin">;
    } & {
        readonly pathPaymentStrictSendSuccess: 0;
        readonly pathPaymentStrictSendMalformed: -1;
        readonly pathPaymentStrictSendUnderfunded: -2;
        readonly pathPaymentStrictSendSrcNoTrust: -3;
        readonly pathPaymentStrictSendSrcNotAuthorized: -4;
        readonly pathPaymentStrictSendNoDestination: -5;
        readonly pathPaymentStrictSendNoTrust: -6;
        readonly pathPaymentStrictSendNotAuthorized: -7;
        readonly pathPaymentStrictSendLineFull: -8;
        readonly pathPaymentStrictSendNoIssuer: -9;
        readonly pathPaymentStrictSendTooFewOffers: -10;
        readonly pathPaymentStrictSendOfferCrossSelf: -11;
        readonly pathPaymentStrictSendUnderDestmin: -12;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): PathPaymentStrictSendResultCode;
    static fromName(name: PathPaymentStrictSendResultCodeName): PathPaymentStrictSendResultCode;
    static fromXdrObject(wire: number): PathPaymentStrictSendResultCode;
}
