import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface LedgerKeyOfferWire {
    sellerId: PublicKeyWire;
    offerId: bigint;
}
/**
 * ```xdr
 * struct
 *     {
 *         AccountID sellerID;
 *         int64 offerID;
 *     }
 * ```
 */
export declare class LedgerKeyOffer extends XdrValue {
    readonly sellerId: PublicKey;
    readonly offerId: bigint;
    static readonly schema: XdrType<LedgerKeyOfferWire>;
    constructor(input: {
        sellerId: PublicKey;
        offerId: bigint;
    });
    toXdrObject(): LedgerKeyOfferWire;
    static fromXdrObject(wire: LedgerKeyOfferWire): LedgerKeyOffer;
}
