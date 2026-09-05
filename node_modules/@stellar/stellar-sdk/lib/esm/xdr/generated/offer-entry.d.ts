import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { Asset, type AssetWire } from "./asset.js";
import { Price, type PriceWire } from "./price.js";
import { OfferEntryExt, type OfferEntryExtWire } from "./offer-entry-ext.js";
export interface OfferEntryWire {
    sellerId: PublicKeyWire;
    offerId: bigint;
    selling: AssetWire;
    buying: AssetWire;
    amount: bigint;
    price: PriceWire;
    flags: number;
    ext: OfferEntryExtWire;
}
/**
 * ```xdr
 * struct OfferEntry
 * {
 *     AccountID sellerID;
 *     int64 offerID;
 *     Asset selling; // A
 *     Asset buying;  // B
 *     int64 amount;  // amount of A
 *
 *     /* price for this offer:
 *         price of A in terms of B
 *         price=AmountB/AmountA=priceNumerator/priceDenominator
 *         price is after fees
 *     *\/
 *     Price price;
 *     uint32 flags; // see OfferEntryFlags
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class OfferEntry extends XdrValue {
    readonly sellerId: PublicKey;
    readonly offerId: bigint;
    readonly selling: Asset;
    readonly buying: Asset;
    readonly amount: bigint;
    readonly price: Price;
    readonly flags: number;
    readonly ext: OfferEntryExt;
    static readonly schema: XdrType<OfferEntryWire>;
    constructor(input: {
        sellerId: PublicKey;
        offerId: bigint;
        selling: Asset;
        buying: Asset;
        amount: bigint;
        price: Price;
        flags: number;
        ext: OfferEntryExt;
    });
    toXdrObject(): OfferEntryWire;
    static fromXdrObject(wire: OfferEntryWire): OfferEntry;
}
