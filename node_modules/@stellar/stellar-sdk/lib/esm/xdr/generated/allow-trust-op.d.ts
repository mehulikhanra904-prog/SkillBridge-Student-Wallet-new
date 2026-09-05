import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { AssetCode, type AssetCodeWire } from "./asset-code.js";
export interface AllowTrustOpWire {
    trustor: PublicKeyWire;
    asset: AssetCodeWire;
    authorize: number;
}
/**
 * ```xdr
 * struct AllowTrustOp
 * {
 *     AccountID trustor;
 *     AssetCode asset;
 *
 *     // One of 0, AUTHORIZED_FLAG, or AUTHORIZED_TO_MAINTAIN_LIABILITIES_FLAG
 *     uint32 authorize;
 * };
 * ```
 */
export declare class AllowTrustOp extends XdrValue {
    readonly trustor: PublicKey;
    readonly asset: AssetCode;
    readonly authorize: number;
    static readonly schema: XdrType<AllowTrustOpWire>;
    constructor(input: {
        trustor: PublicKey;
        asset: AssetCode;
        authorize: number;
    });
    toXdrObject(): AllowTrustOpWire;
    static fromXdrObject(wire: AllowTrustOpWire): AllowTrustOp;
}
