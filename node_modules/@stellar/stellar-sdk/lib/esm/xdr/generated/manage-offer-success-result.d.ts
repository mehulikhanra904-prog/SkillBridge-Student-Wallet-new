import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ClaimAtom, type ClaimAtomWire } from "./claim-atom.js";
import { ManageOfferSuccessResultOffer, type ManageOfferSuccessResultOfferWire } from "./manage-offer-success-result-offer.js";
export interface ManageOfferSuccessResultWire {
    offersClaimed: ClaimAtomWire[];
    offer: ManageOfferSuccessResultOfferWire;
}
/**
 * ```xdr
 * struct ManageOfferSuccessResult
 * {
 *     // offers that got claimed while creating this offer
 *     ClaimAtom offersClaimed<>;
 *
 *     union switch (ManageOfferEffect effect)
 *     {
 *     case MANAGE_OFFER_CREATED:
 *     case MANAGE_OFFER_UPDATED:
 *         OfferEntry offer;
 *     case MANAGE_OFFER_DELETED:
 *         void;
 *     }
 *     offer;
 * };
 * ```
 */
export declare class ManageOfferSuccessResult extends XdrValue {
    readonly offersClaimed: ClaimAtom[];
    readonly offer: ManageOfferSuccessResultOffer;
    static readonly schema: XdrType<ManageOfferSuccessResultWire>;
    constructor(input: {
        offersClaimed: ClaimAtom[];
        offer: ManageOfferSuccessResultOffer;
    });
    toXdrObject(): ManageOfferSuccessResultWire;
    static fromXdrObject(wire: ManageOfferSuccessResultWire): ManageOfferSuccessResult;
}
