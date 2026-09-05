import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { AssetCode12, type AssetCode12Wire } from "./asset-code12.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
export interface AlphaNum12Wire {
    assetCode: AssetCode12Wire;
    issuer: PublicKeyWire;
}
/**
 * ```xdr
 * struct AlphaNum12
 * {
 *     AssetCode12 assetCode;
 *     AccountID issuer;
 * };
 * ```
 */
export declare class AlphaNum12 extends XdrValue {
    readonly assetCode: AssetCode12;
    readonly issuer: PublicKey;
    static readonly schema: XdrType<AlphaNum12Wire>;
    constructor(input: {
        assetCode: AssetCode12 | Uint8Array | string;
        issuer: PublicKey;
    });
    toXdrObject(): AlphaNum12Wire;
    static fromXdrObject(wire: AlphaNum12Wire): AlphaNum12;
}
