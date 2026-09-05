import { EnumValue } from "../values/enum-value.js";
export type ManageSellOfferResultCodeWire = number;
export type ManageSellOfferResultCodeName = "manageSellOfferSuccess" | "manageSellOfferMalformed" | "manageSellOfferSellNoTrust" | "manageSellOfferBuyNoTrust" | "manageSellOfferSellNotAuthorized" | "manageSellOfferBuyNotAuthorized" | "manageSellOfferLineFull" | "manageSellOfferUnderfunded" | "manageSellOfferCrossSelf" | "manageSellOfferSellNoIssuer" | "manageSellOfferBuyNoIssuer" | "manageSellOfferNotFound" | "manageSellOfferLowReserve";
/**
 * ```xdr
 * enum ManageSellOfferResultCode
 * {
 *     // codes considered as "success" for the operation
 *     MANAGE_SELL_OFFER_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     MANAGE_SELL_OFFER_MALFORMED = -1, // generated offer would be invalid
 *     MANAGE_SELL_OFFER_SELL_NO_TRUST =
 *         -2,                              // no trust line for what we're selling
 *     MANAGE_SELL_OFFER_BUY_NO_TRUST = -3, // no trust line for what we're buying
 *     MANAGE_SELL_OFFER_SELL_NOT_AUTHORIZED = -4, // not authorized to sell
 *     MANAGE_SELL_OFFER_BUY_NOT_AUTHORIZED = -5,  // not authorized to buy
 *     MANAGE_SELL_OFFER_LINE_FULL = -6, // can't receive more of what it's buying
 *     MANAGE_SELL_OFFER_UNDERFUNDED = -7, // doesn't hold what it's trying to sell
 *     MANAGE_SELL_OFFER_CROSS_SELF =
 *         -8, // would cross an offer from the same user
 *     MANAGE_SELL_OFFER_SELL_NO_ISSUER = -9, // no issuer for what we're selling
 *     MANAGE_SELL_OFFER_BUY_NO_ISSUER = -10, // no issuer for what we're buying
 *
 *     // update errors
 *     MANAGE_SELL_OFFER_NOT_FOUND =
 *         -11, // offerID does not match an existing offer
 *
 *     MANAGE_SELL_OFFER_LOW_RESERVE =
 *         -12 // not enough funds to create a new Offer
 * };
 * ```
 */
export declare class ManageSellOfferResultCode extends EnumValue<ManageSellOfferResultCodeName> {
    static readonly manageSellOfferSuccess: ManageSellOfferResultCode;
    static readonly manageSellOfferMalformed: ManageSellOfferResultCode;
    static readonly manageSellOfferSellNoTrust: ManageSellOfferResultCode;
    static readonly manageSellOfferBuyNoTrust: ManageSellOfferResultCode;
    static readonly manageSellOfferSellNotAuthorized: ManageSellOfferResultCode;
    static readonly manageSellOfferBuyNotAuthorized: ManageSellOfferResultCode;
    static readonly manageSellOfferLineFull: ManageSellOfferResultCode;
    static readonly manageSellOfferUnderfunded: ManageSellOfferResultCode;
    static readonly manageSellOfferCrossSelf: ManageSellOfferResultCode;
    static readonly manageSellOfferSellNoIssuer: ManageSellOfferResultCode;
    static readonly manageSellOfferBuyNoIssuer: ManageSellOfferResultCode;
    static readonly manageSellOfferNotFound: ManageSellOfferResultCode;
    static readonly manageSellOfferLowReserve: ManageSellOfferResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly manageSellOfferSuccess: 0;
        readonly manageSellOfferMalformed: -1;
        readonly manageSellOfferSellNoTrust: -2;
        readonly manageSellOfferBuyNoTrust: -3;
        readonly manageSellOfferSellNotAuthorized: -4;
        readonly manageSellOfferBuyNotAuthorized: -5;
        readonly manageSellOfferLineFull: -6;
        readonly manageSellOfferUnderfunded: -7;
        readonly manageSellOfferCrossSelf: -8;
        readonly manageSellOfferSellNoIssuer: -9;
        readonly manageSellOfferBuyNoIssuer: -10;
        readonly manageSellOfferNotFound: -11;
        readonly manageSellOfferLowReserve: -12;
    }>> & {
        readonly kind: "enum";
        readonly name: "ManageSellOfferResultCode";
        readonly nameByValue: ReadonlyMap<number, "manageSellOfferSuccess" | "manageSellOfferMalformed" | "manageSellOfferSellNoTrust" | "manageSellOfferBuyNoTrust" | "manageSellOfferSellNotAuthorized" | "manageSellOfferBuyNotAuthorized" | "manageSellOfferLineFull" | "manageSellOfferUnderfunded" | "manageSellOfferCrossSelf" | "manageSellOfferSellNoIssuer" | "manageSellOfferBuyNoIssuer" | "manageSellOfferNotFound" | "manageSellOfferLowReserve">;
    } & {
        readonly manageSellOfferSuccess: 0;
        readonly manageSellOfferMalformed: -1;
        readonly manageSellOfferSellNoTrust: -2;
        readonly manageSellOfferBuyNoTrust: -3;
        readonly manageSellOfferSellNotAuthorized: -4;
        readonly manageSellOfferBuyNotAuthorized: -5;
        readonly manageSellOfferLineFull: -6;
        readonly manageSellOfferUnderfunded: -7;
        readonly manageSellOfferCrossSelf: -8;
        readonly manageSellOfferSellNoIssuer: -9;
        readonly manageSellOfferBuyNoIssuer: -10;
        readonly manageSellOfferNotFound: -11;
        readonly manageSellOfferLowReserve: -12;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ManageSellOfferResultCode;
    static fromName(name: ManageSellOfferResultCodeName): ManageSellOfferResultCode;
    static fromXdrObject(wire: number): ManageSellOfferResultCode;
}
