import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { Asset, type AssetWire } from "./asset.js";
export interface ClaimOfferAtomWire {
    sellerId: PublicKeyWire;
    offerId: bigint;
    assetSold: AssetWire;
    amountSold: bigint;
    assetBought: AssetWire;
    amountBought: bigint;
}
/**
 * ```xdr
 * struct ClaimOfferAtom
 * {
 *     // emitted to identify the offer
 *     AccountID sellerID; // Account that owns the offer
 *     int64 offerID;
 *
 *     // amount and asset taken from the owner
 *     Asset assetSold;
 *     int64 amountSold;
 *
 *     // amount and asset sent to the owner
 *     Asset assetBought;
 *     int64 amountBought;
 * };
 * ```
 */
export declare class ClaimOfferAtom extends XdrValue {
    readonly sellerId: PublicKey;
    readonly offerId: bigint;
    readonly assetSold: Asset;
    readonly amountSold: bigint;
    readonly assetBought: Asset;
    readonly amountBought: bigint;
    static readonly schema: XdrType<ClaimOfferAtomWire>;
    constructor(input: {
        sellerId: PublicKey;
        offerId: bigint;
        assetSold: Asset;
        amountSold: bigint;
        assetBought: Asset;
        amountBought: bigint;
    });
    toXdrObject(): ClaimOfferAtomWire;
    static fromXdrObject(wire: ClaimOfferAtomWire): ClaimOfferAtom;
}
