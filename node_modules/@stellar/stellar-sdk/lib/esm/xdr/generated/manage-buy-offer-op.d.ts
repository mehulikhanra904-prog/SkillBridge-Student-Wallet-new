import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Asset, type AssetWire } from "./asset.js";
import { Price, type PriceWire } from "./price.js";
export interface ManageBuyOfferOpWire {
    selling: AssetWire;
    buying: AssetWire;
    buyAmount: bigint;
    price: PriceWire;
    offerId: bigint;
}
/**
 * ```xdr
 * struct ManageBuyOfferOp
 * {
 *     Asset selling;
 *     Asset buying;
 *     int64 buyAmount; // amount being bought. if set to 0, delete the offer
 *     Price price;     // price of thing being bought in terms of what you are
 *                      // selling
 *
 *     // 0=create a new offer, otherwise edit an existing offer
 *     int64 offerID;
 * };
 * ```
 */
export declare class ManageBuyOfferOp extends XdrValue {
    readonly selling: Asset;
    readonly buying: Asset;
    readonly buyAmount: bigint;
    readonly price: Price;
    readonly offerId: bigint;
    static readonly schema: XdrType<ManageBuyOfferOpWire>;
    constructor(input: {
        selling: Asset;
        buying: Asset;
        buyAmount: bigint;
        price: Price;
        offerId: bigint;
    });
    toXdrObject(): ManageBuyOfferOpWire;
    static fromXdrObject(wire: ManageBuyOfferOpWire): ManageBuyOfferOp;
}
