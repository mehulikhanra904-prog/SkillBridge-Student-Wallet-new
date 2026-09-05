import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { Asset, type AssetWire } from "./asset.js";
export interface SetTrustLineFlagsOpWire {
    trustor: PublicKeyWire;
    asset: AssetWire;
    clearFlags: number;
    setFlags: number;
}
/**
 * ```xdr
 * struct SetTrustLineFlagsOp
 * {
 *     AccountID trustor;
 *     Asset asset;
 *
 *     uint32 clearFlags; // which flags to clear
 *     uint32 setFlags;   // which flags to set
 * };
 * ```
 */
export declare class SetTrustLineFlagsOp extends XdrValue {
    readonly trustor: PublicKey;
    readonly asset: Asset;
    readonly clearFlags: number;
    readonly setFlags: number;
    static readonly schema: XdrType<SetTrustLineFlagsOpWire>;
    constructor(input: {
        trustor: PublicKey;
        asset: Asset;
        clearFlags: number;
        setFlags: number;
    });
    toXdrObject(): SetTrustLineFlagsOpWire;
    static fromXdrObject(wire: SetTrustLineFlagsOpWire): SetTrustLineFlagsOp;
}
