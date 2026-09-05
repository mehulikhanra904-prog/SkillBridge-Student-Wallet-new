import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Asset, type AssetWire } from "./asset.js";
import { Price, type PriceWire } from "./price.js";
export interface CreatePassiveSellOfferOpWire {
    selling: AssetWire;
    buying: AssetWire;
    amount: bigint;
    price: PriceWire;
}
/**
 * ```xdr
 * struct CreatePassiveSellOfferOp
 * {
 *     Asset selling; // A
 *     Asset buying;  // B
 *     int64 amount;  // amount taker gets
 *     Price price;   // cost of A in terms of B
 * };
 * ```
 */
export declare class CreatePassiveSellOfferOp extends XdrValue {
    readonly selling: Asset;
    readonly buying: Asset;
    readonly amount: bigint;
    readonly price: Price;
    static readonly schema: XdrType<CreatePassiveSellOfferOpWire>;
    constructor(input: {
        selling: Asset;
        buying: Asset;
        amount: bigint;
        price: Price;
    });
    toXdrObject(): CreatePassiveSellOfferOpWire;
    static fromXdrObject(wire: CreatePassiveSellOfferOpWire): CreatePassiveSellOfferOp;
}
