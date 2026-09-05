import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { TrustLineAsset, type TrustLineAssetWire } from "./trust-line-asset.js";
export interface LedgerKeyTrustLineWire {
    accountId: PublicKeyWire;
    asset: TrustLineAssetWire;
}
/**
 * ```xdr
 * struct
 *     {
 *         AccountID accountID;
 *         TrustLineAsset asset;
 *     }
 * ```
 */
export declare class LedgerKeyTrustLine extends XdrValue {
    readonly accountId: PublicKey;
    readonly asset: TrustLineAsset;
    static readonly schema: XdrType<LedgerKeyTrustLineWire>;
    constructor(input: {
        accountId: PublicKey;
        asset: TrustLineAsset;
    });
    toXdrObject(): LedgerKeyTrustLineWire;
    static fromXdrObject(wire: LedgerKeyTrustLineWire): LedgerKeyTrustLine;
}
