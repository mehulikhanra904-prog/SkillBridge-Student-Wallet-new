import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PublicKey, type PublicKeyWire } from "./public-key.js";
import { Asset, type AssetWire } from "./asset.js";
export interface SimplePaymentResultWire {
    destination: PublicKeyWire;
    asset: AssetWire;
    amount: bigint;
}
/**
 * ```xdr
 * struct SimplePaymentResult
 * {
 *     AccountID destination;
 *     Asset asset;
 *     int64 amount;
 * };
 * ```
 */
export declare class SimplePaymentResult extends XdrValue {
    readonly destination: PublicKey;
    readonly asset: Asset;
    readonly amount: bigint;
    static readonly schema: XdrType<SimplePaymentResultWire>;
    constructor(input: {
        destination: PublicKey;
        asset: Asset;
        amount: bigint;
    });
    toXdrObject(): SimplePaymentResultWire;
    static fromXdrObject(wire: SimplePaymentResultWire): SimplePaymentResult;
}
