import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Asset, type AssetWire } from "./asset.js";
import { MuxedAccount, type MuxedAccountWire } from "./muxed-account.js";
export interface PathPaymentStrictReceiveOpWire {
    sendAsset: AssetWire;
    sendMax: bigint;
    destination: MuxedAccountWire;
    destAsset: AssetWire;
    destAmount: bigint;
    path: AssetWire[];
}
/**
 * ```xdr
 * struct PathPaymentStrictReceiveOp
 * {
 *     Asset sendAsset; // asset we pay with
 *     int64 sendMax;   // the maximum amount of sendAsset to
 *                      // send (excluding fees).
 *                      // The operation will fail if can't be met
 *
 *     MuxedAccount destination; // recipient of the payment
 *     Asset destAsset;          // what they end up with
 *     int64 destAmount;         // amount they end up with
 *
 *     Asset path<5>; // additional hops it must go through to get there
 * };
 * ```
 */
export declare class PathPaymentStrictReceiveOp extends XdrValue {
    readonly sendAsset: Asset;
    readonly sendMax: bigint;
    readonly destination: MuxedAccount;
    readonly destAsset: Asset;
    readonly destAmount: bigint;
    readonly path: Asset[];
    static readonly schema: XdrType<PathPaymentStrictReceiveOpWire>;
    constructor(input: {
        sendAsset: Asset;
        sendMax: bigint;
        destination: MuxedAccount;
        destAsset: Asset;
        destAmount: bigint;
        path: Asset[];
    });
    toXdrObject(): PathPaymentStrictReceiveOpWire;
    static fromXdrObject(wire: PathPaymentStrictReceiveOpWire): PathPaymentStrictReceiveOp;
}
