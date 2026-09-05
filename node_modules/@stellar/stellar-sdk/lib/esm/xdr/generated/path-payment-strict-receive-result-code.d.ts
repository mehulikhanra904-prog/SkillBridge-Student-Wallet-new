import { EnumValue } from "../values/enum-value.js";
export type PathPaymentStrictReceiveResultCodeWire = number;
export type PathPaymentStrictReceiveResultCodeName = "pathPaymentStrictReceiveSuccess" | "pathPaymentStrictReceiveMalformed" | "pathPaymentStrictReceiveUnderfunded" | "pathPaymentStrictReceiveSrcNoTrust" | "pathPaymentStrictReceiveSrcNotAuthorized" | "pathPaymentStrictReceiveNoDestination" | "pathPaymentStrictReceiveNoTrust" | "pathPaymentStrictReceiveNotAuthorized" | "pathPaymentStrictReceiveLineFull" | "pathPaymentStrictReceiveNoIssuer" | "pathPaymentStrictReceiveTooFewOffers" | "pathPaymentStrictReceiveOfferCrossSelf" | "pathPaymentStrictReceiveOverSendmax";
/**
 * ```xdr
 * enum PathPaymentStrictReceiveResultCode
 * {
 *     // codes considered as "success" for the operation
 *     PATH_PAYMENT_STRICT_RECEIVE_SUCCESS = 0, // success
 *
 *     // codes considered as "failure" for the operation
 *     PATH_PAYMENT_STRICT_RECEIVE_MALFORMED = -1, // bad input
 *     PATH_PAYMENT_STRICT_RECEIVE_UNDERFUNDED =
 *         -2, // not enough funds in source account
 *     PATH_PAYMENT_STRICT_RECEIVE_SRC_NO_TRUST =
 *         -3, // no trust line on source account
 *     PATH_PAYMENT_STRICT_RECEIVE_SRC_NOT_AUTHORIZED =
 *         -4, // source not authorized to transfer
 *     PATH_PAYMENT_STRICT_RECEIVE_NO_DESTINATION =
 *         -5, // destination account does not exist
 *     PATH_PAYMENT_STRICT_RECEIVE_NO_TRUST =
 *         -6, // dest missing a trust line for asset
 *     PATH_PAYMENT_STRICT_RECEIVE_NOT_AUTHORIZED =
 *         -7, // dest not authorized to hold asset
 *     PATH_PAYMENT_STRICT_RECEIVE_LINE_FULL =
 *         -8, // dest would go above their limit
 *     PATH_PAYMENT_STRICT_RECEIVE_NO_ISSUER = -9, // missing issuer on one asset
 *     PATH_PAYMENT_STRICT_RECEIVE_TOO_FEW_OFFERS =
 *         -10, // not enough offers to satisfy path
 *     PATH_PAYMENT_STRICT_RECEIVE_OFFER_CROSS_SELF =
 *         -11, // would cross one of its own offers
 *     PATH_PAYMENT_STRICT_RECEIVE_OVER_SENDMAX = -12 // could not satisfy sendmax
 * };
 * ```
 */
export declare class PathPaymentStrictReceiveResultCode extends EnumValue<PathPaymentStrictReceiveResultCodeName> {
    static readonly pathPaymentStrictReceiveSuccess: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveMalformed: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveUnderfunded: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveSrcNoTrust: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveSrcNotAuthorized: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveNoDestination: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveNoTrust: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveNotAuthorized: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveLineFull: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveNoIssuer: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveTooFewOffers: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveOfferCrossSelf: PathPaymentStrictReceiveResultCode;
    static readonly pathPaymentStrictReceiveOverSendmax: PathPaymentStrictReceiveResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly pathPaymentStrictReceiveSuccess: 0;
        readonly pathPaymentStrictReceiveMalformed: -1;
        readonly pathPaymentStrictReceiveUnderfunded: -2;
        readonly pathPaymentStrictReceiveSrcNoTrust: -3;
        readonly pathPaymentStrictReceiveSrcNotAuthorized: -4;
        readonly pathPaymentStrictReceiveNoDestination: -5;
        readonly pathPaymentStrictReceiveNoTrust: -6;
        readonly pathPaymentStrictReceiveNotAuthorized: -7;
        readonly pathPaymentStrictReceiveLineFull: -8;
        readonly pathPaymentStrictReceiveNoIssuer: -9;
        readonly pathPaymentStrictReceiveTooFewOffers: -10;
        readonly pathPaymentStrictReceiveOfferCrossSelf: -11;
        readonly pathPaymentStrictReceiveOverSendmax: -12;
    }>> & {
        readonly kind: "enum";
        readonly name: "PathPaymentStrictReceiveResultCode";
        readonly nameByValue: ReadonlyMap<number, "pathPaymentStrictReceiveSuccess" | "pathPaymentStrictReceiveMalformed" | "pathPaymentStrictReceiveUnderfunded" | "pathPaymentStrictReceiveSrcNoTrust" | "pathPaymentStrictReceiveSrcNotAuthorized" | "pathPaymentStrictReceiveNoDestination" | "pathPaymentStrictReceiveNoTrust" | "pathPaymentStrictReceiveNotAuthorized" | "pathPaymentStrictReceiveLineFull" | "pathPaymentStrictReceiveNoIssuer" | "pathPaymentStrictReceiveTooFewOffers" | "pathPaymentStrictReceiveOfferCrossSelf" | "pathPaymentStrictReceiveOverSendmax">;
    } & {
        readonly pathPaymentStrictReceiveSuccess: 0;
        readonly pathPaymentStrictReceiveMalformed: -1;
        readonly pathPaymentStrictReceiveUnderfunded: -2;
        readonly pathPaymentStrictReceiveSrcNoTrust: -3;
        readonly pathPaymentStrictReceiveSrcNotAuthorized: -4;
        readonly pathPaymentStrictReceiveNoDestination: -5;
        readonly pathPaymentStrictReceiveNoTrust: -6;
        readonly pathPaymentStrictReceiveNotAuthorized: -7;
        readonly pathPaymentStrictReceiveLineFull: -8;
        readonly pathPaymentStrictReceiveNoIssuer: -9;
        readonly pathPaymentStrictReceiveTooFewOffers: -10;
        readonly pathPaymentStrictReceiveOfferCrossSelf: -11;
        readonly pathPaymentStrictReceiveOverSendmax: -12;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): PathPaymentStrictReceiveResultCode;
    static fromName(name: PathPaymentStrictReceiveResultCodeName): PathPaymentStrictReceiveResultCode;
    static fromXdrObject(wire: number): PathPaymentStrictReceiveResultCode;
}
