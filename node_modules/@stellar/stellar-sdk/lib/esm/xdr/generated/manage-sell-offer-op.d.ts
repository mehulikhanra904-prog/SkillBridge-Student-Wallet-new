import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Asset, type AssetWire } from "./asset.js";
import { Price, type PriceWire } from "./price.js";
export interface ManageSellOfferOpWire {
    selling: AssetWire;
    buying: AssetWire;
    amount: bigint;
    price: PriceWire;
    offerId: bigint;
}
/**
 * ```xdr
 * struct ManageSellOfferOp
 * {
 *     Asset selling;
 *     Asset buying;
 *     int64 amount; // amount being sold. if set to 0, delete the offer
 *     Price price;  // price of thing being sold in terms of what you are buying
 *
 *     // 0=create a new offer, otherwise edit an existing offer
 *     int64 offerID;
 * };
 * ```
 */
export declare class ManageSellOfferOp extends XdrValue {
    readonly selling: Asset;
    readonly buying: Asset;
    readonly amount: bigint;
    readonly price: Price;
    readonly offerId: bigint;
    static readonly schema: XdrType<ManageSellOfferOpWire>;
    constructor(input: {
        selling: Asset;
        buying: Asset;
        amount: bigint;
        price: Price;
        offerId: bigint;
    });
    toXdrObject(): ManageSellOfferOpWire;
    static fromXdrObject(wire: ManageSellOfferOpWire): ManageSellOfferOp;
}
