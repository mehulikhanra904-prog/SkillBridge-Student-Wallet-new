import { EnumValue } from "../values/enum-value.js";
export type ManageBuyOfferResultCodeWire = number;
export type ManageBuyOfferResultCodeName = "manageBuyOfferSuccess" | "manageBuyOfferMalformed" | "manageBuyOfferSellNoTrust" | "manageBuyOfferBuyNoTrust" | "manageBuyOfferSellNotAuthorized" | "manageBuyOfferBuyNotAuthorized" | "manageBuyOfferLineFull" | "manageBuyOfferUnderfunded" | "manageBuyOfferCrossSelf" | "manageBuyOfferSellNoIssuer" | "manageBuyOfferBuyNoIssuer" | "manageBuyOfferNotFound" | "manageBuyOfferLowReserve";
/**
 * ```xdr
 * enum ManageBuyOfferResultCode
 * {
 *     // codes considered as "success" for the operation
 *     MANAGE_BUY_OFFER_SUCCESS = 0,
 *
 *     // codes considered as "failure" for the operation
 *     MANAGE_BUY_OFFER_MALFORMED = -1,     // generated offer would be invalid
 *     MANAGE_BUY_OFFER_SELL_NO_TRUST = -2, // no trust line for what we're selling
 *     MANAGE_BUY_OFFER_BUY_NO_TRUST = -3,  // no trust line for what we're buying
 *     MANAGE_BUY_OFFER_SELL_NOT_AUTHORIZED = -4, // not authorized to sell
 *     MANAGE_BUY_OFFER_BUY_NOT_AUTHORIZED = -5,  // not authorized to buy
 *     MANAGE_BUY_OFFER_LINE_FULL = -6,   // can't receive more of what it's buying
 *     MANAGE_BUY_OFFER_UNDERFUNDED = -7, // doesn't hold what it's trying to sell
 *     MANAGE_BUY_OFFER_CROSS_SELF = -8, // would cross an offer from the same user
 *     MANAGE_BUY_OFFER_SELL_NO_ISSUER = -9, // no issuer for what we're selling
 *     MANAGE_BUY_OFFER_BUY_NO_ISSUER = -10, // no issuer for what we're buying
 *
 *     // update errors
 *     MANAGE_BUY_OFFER_NOT_FOUND =
 *         -11, // offerID does not match an existing offer
 *
 *     MANAGE_BUY_OFFER_LOW_RESERVE = -12 // not enough funds to create a new Offer
 * };
 * ```
 */
export declare class ManageBuyOfferResultCode extends EnumValue<ManageBuyOfferResultCodeName> {
    static readonly manageBuyOfferSuccess: ManageBuyOfferResultCode;
    static readonly manageBuyOfferMalformed: ManageBuyOfferResultCode;
    static readonly manageBuyOfferSellNoTrust: ManageBuyOfferResultCode;
    static readonly manageBuyOfferBuyNoTrust: ManageBuyOfferResultCode;
    static readonly manageBuyOfferSellNotAuthorized: ManageBuyOfferResultCode;
    static readonly manageBuyOfferBuyNotAuthorized: ManageBuyOfferResultCode;
    static readonly manageBuyOfferLineFull: ManageBuyOfferResultCode;
    static readonly manageBuyOfferUnderfunded: ManageBuyOfferResultCode;
    static readonly manageBuyOfferCrossSelf: ManageBuyOfferResultCode;
    static readonly manageBuyOfferSellNoIssuer: ManageBuyOfferResultCode;
    static readonly manageBuyOfferBuyNoIssuer: ManageBuyOfferResultCode;
    static readonly manageBuyOfferNotFound: ManageBuyOfferResultCode;
    static readonly manageBuyOfferLowReserve: ManageBuyOfferResultCode;
    static readonly schema: import("@stellar/js-xdr").XdrType<import("@stellar/js-xdr").EnumMember<{
        readonly manageBuyOfferSuccess: 0;
        readonly manageBuyOfferMalformed: -1;
        readonly manageBuyOfferSellNoTrust: -2;
        readonly manageBuyOfferBuyNoTrust: -3;
        readonly manageBuyOfferSellNotAuthorized: -4;
        readonly manageBuyOfferBuyNotAuthorized: -5;
        readonly manageBuyOfferLineFull: -6;
        readonly manageBuyOfferUnderfunded: -7;
        readonly manageBuyOfferCrossSelf: -8;
        readonly manageBuyOfferSellNoIssuer: -9;
        readonly manageBuyOfferBuyNoIssuer: -10;
        readonly manageBuyOfferNotFound: -11;
        readonly manageBuyOfferLowReserve: -12;
    }>> & {
        readonly kind: "enum";
        readonly name: "ManageBuyOfferResultCode";
        readonly nameByValue: ReadonlyMap<number, "manageBuyOfferSuccess" | "manageBuyOfferMalformed" | "manageBuyOfferSellNoTrust" | "manageBuyOfferBuyNoTrust" | "manageBuyOfferSellNotAuthorized" | "manageBuyOfferBuyNotAuthorized" | "manageBuyOfferLineFull" | "manageBuyOfferUnderfunded" | "manageBuyOfferCrossSelf" | "manageBuyOfferSellNoIssuer" | "manageBuyOfferBuyNoIssuer" | "manageBuyOfferNotFound" | "manageBuyOfferLowReserve">;
    } & {
        readonly manageBuyOfferSuccess: 0;
        readonly manageBuyOfferMalformed: -1;
        readonly manageBuyOfferSellNoTrust: -2;
        readonly manageBuyOfferBuyNoTrust: -3;
        readonly manageBuyOfferSellNotAuthorized: -4;
        readonly manageBuyOfferBuyNotAuthorized: -5;
        readonly manageBuyOfferLineFull: -6;
        readonly manageBuyOfferUnderfunded: -7;
        readonly manageBuyOfferCrossSelf: -8;
        readonly manageBuyOfferSellNoIssuer: -9;
        readonly manageBuyOfferBuyNoIssuer: -10;
        readonly manageBuyOfferNotFound: -11;
        readonly manageBuyOfferLowReserve: -12;
    } & import("../values/enum-value.js").PrefixedEnumSchema;
    static fromValue(value: number): ManageBuyOfferResultCode;
    static fromName(name: ManageBuyOfferResultCodeName): ManageBuyOfferResultCode;
    static fromXdrObject(wire: number): ManageBuyOfferResultCode;
}
