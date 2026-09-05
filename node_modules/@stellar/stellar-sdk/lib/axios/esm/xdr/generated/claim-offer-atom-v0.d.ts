import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Uint256Bytes, type Uint256BytesWire } from "./uint256-bytes.js";
import { Asset, type AssetWire } from "./asset.js";
export interface ClaimOfferAtomV0Wire {
    sellerEd25519: Uint256BytesWire;
    offerId: bigint;
    assetSold: AssetWire;
    amountSold: bigint;
    assetBought: AssetWire;
    amountBought: bigint;
}
/**
 * ```xdr
 * struct ClaimOfferAtomV0
 * {
 *     // emitted to identify the offer
 *     uint256 sellerEd25519; // Account that owns the offer
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
export declare class ClaimOfferAtomV0 extends XdrValue {
    readonly sellerEd25519: Uint256Bytes;
    readonly offerId: bigint;
    readonly assetSold: Asset;
    readonly amountSold: bigint;
    readonly assetBought: Asset;
    readonly amountBought: bigint;
    static readonly schema: XdrType<ClaimOfferAtomV0Wire>;
    constructor(input: {
        sellerEd25519: Uint256Bytes | Uint8Array | string;
        offerId: bigint;
        assetSold: Asset;
        amountSold: bigint;
        assetBought: Asset;
        amountBought: bigint;
    });
    toXdrObject(): ClaimOfferAtomV0Wire;
    static fromXdrObject(wire: ClaimOfferAtomV0Wire): ClaimOfferAtomV0;
}
