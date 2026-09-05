import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { OfferEntry, type OfferEntryWire } from "./offer-entry.js";
export type ManageOfferSuccessResultOfferWire = {
    effect: 0;
    offer: OfferEntryWire;
} | {
    effect: 1;
    offer: OfferEntryWire;
} | {
    effect: 2;
};
export type ManageOfferSuccessResultOfferVariantName = "manageOfferCreated" | "manageOfferUpdated" | "manageOfferDeleted";
/**
 * ```xdr
 * union switch (ManageOfferEffect effect)
 *     {
 *     case MANAGE_OFFER_CREATED:
 *     case MANAGE_OFFER_UPDATED:
 *         OfferEntry offer;
 *     case MANAGE_OFFER_DELETED:
 *         void;
 *     }
 * ```
 */
declare abstract class ManageOfferSuccessResultOfferBase extends XdrValue {
    abstract readonly type: ManageOfferSuccessResultOfferVariantName;
    constructor();
    static readonly schema: XdrType<ManageOfferSuccessResultOfferWire>;
    static manageOfferCreated(offer: OfferEntry): ManageOfferSuccessResultOfferCreated;
    static manageOfferUpdated(offer: OfferEntry): ManageOfferSuccessResultOfferUpdated;
    static manageOfferDeleted(): ManageOfferSuccessResultOfferDeleted;
    static fromXdrObject(wire: ManageOfferSuccessResultOfferWire): ManageOfferSuccessResultOffer;
    /**
     * Type guard narrowing an unknown value to a concrete ManageOfferSuccessResultOffer variant.
     * Use this instead of `instanceof ManageOfferSuccessResultOffer`: the exported `ManageOfferSuccessResultOffer` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `ManageOfferSuccessResultOffer.is(x)` narrows to the union.
     */
    static is(value: unknown): value is ManageOfferSuccessResultOffer;
    abstract toXdrObject(): ManageOfferSuccessResultOfferWire;
}
export declare class ManageOfferSuccessResultOfferCreated extends ManageOfferSuccessResultOfferBase {
    readonly type: "manageOfferCreated";
    readonly offer: OfferEntry;
    constructor(offer: OfferEntry);
    get value(): OfferEntry;
    toXdrObject(): Extract<ManageOfferSuccessResultOfferWire, {
        effect: 0;
    }>;
}
export declare class ManageOfferSuccessResultOfferUpdated extends ManageOfferSuccessResultOfferBase {
    readonly type: "manageOfferUpdated";
    readonly offer: OfferEntry;
    constructor(offer: OfferEntry);
    get value(): OfferEntry;
    toXdrObject(): Extract<ManageOfferSuccessResultOfferWire, {
        effect: 1;
    }>;
}
export declare class ManageOfferSuccessResultOfferDeleted extends ManageOfferSuccessResultOfferBase {
    readonly type: "manageOfferDeleted";
    get value(): null;
    toXdrObject(): Extract<ManageOfferSuccessResultOfferWire, {
        effect: 2;
    }>;
}
export type ManageOfferSuccessResultOffer = ManageOfferSuccessResultOfferCreated | ManageOfferSuccessResultOfferUpdated | ManageOfferSuccessResultOfferDeleted;
export declare const ManageOfferSuccessResultOffer: typeof ManageOfferSuccessResultOfferBase;
export {};
