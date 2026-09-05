import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AssetCode4, type AssetCode4Wire } from "./asset-code4.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface AlphaNum4Wire {
    assetCode: AssetCode4Wire;
    issuer: PublicKeyWire;
}
/**
 * ```xdr
 * struct AlphaNum4
 * {
 *     AssetCode4 assetCode;
 *     AccountID issuer;
 * };
 * ```
 */
export declare class AlphaNum4 extends XdrValue {
    readonly assetCode: AssetCode4;
    readonly issuer: PublicKey;
    static readonly schema: XdrType<AlphaNum4Wire>;
    constructor(input: {
        assetCode: AssetCode4 | Uint8Array | string;
        issuer: PublicKey;
    });
    toXdrObject(): AlphaNum4Wire;
    static fromXdrObject(wire: AlphaNum4Wire): AlphaNum4;
}
