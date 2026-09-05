import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Asset, type AssetWire } from "./asset.js";
import { MuxedAccount, type MuxedAccountWire } from "./muxed-account.js";
export interface PathPaymentStrictSendOpWire {
    sendAsset: AssetWire;
    sendAmount: bigint;
    destination: MuxedAccountWire;
    destAsset: AssetWire;
    destMin: bigint;
    path: AssetWire[];
}
/**
 * ```xdr
 * struct PathPaymentStrictSendOp
 * {
 *     Asset sendAsset;  // asset we pay with
 *     int64 sendAmount; // amount of sendAsset to send (excluding fees)
 *
 *     MuxedAccount destination; // recipient of the payment
 *     Asset destAsset;          // what they end up with
 *     int64 destMin;            // the minimum amount of dest asset to
 *                               // be received
 *                               // The operation will fail if it can't be met
 *
 *     Asset path<5>; // additional hops it must go through to get there
 * };
 * ```
 */
export declare class PathPaymentStrictSendOp extends XdrValue {
    readonly sendAsset: Asset;
    readonly sendAmount: bigint;
    readonly destination: MuxedAccount;
    readonly destAsset: Asset;
    readonly destMin: bigint;
    readonly path: Asset[];
    static readonly schema: XdrType<PathPaymentStrictSendOpWire>;
    constructor(input: {
        sendAsset: Asset;
        sendAmount: bigint;
        destination: MuxedAccount;
        destAsset: Asset;
        destMin: bigint;
        path: Asset[];
    });
    toXdrObject(): PathPaymentStrictSendOpWire;
    static fromXdrObject(wire: PathPaymentStrictSendOpWire): PathPaymentStrictSendOp;
}
