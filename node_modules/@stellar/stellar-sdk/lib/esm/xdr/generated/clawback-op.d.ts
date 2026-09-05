import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Asset, type AssetWire } from "./asset.js";
import { MuxedAccount, type MuxedAccountWire } from "./muxed-account.js";
export interface ClawbackOpWire {
    asset: AssetWire;
    from: MuxedAccountWire;
    amount: bigint;
}
/**
 * ```xdr
 * struct ClawbackOp
 * {
 *     Asset asset;
 *     MuxedAccount from;
 *     int64 amount;
 * };
 * ```
 */
export declare class ClawbackOp extends XdrValue {
    readonly asset: Asset;
    readonly from: MuxedAccount;
    readonly amount: bigint;
    static readonly schema: XdrType<ClawbackOpWire>;
    constructor(input: {
        asset: Asset;
        from: MuxedAccount;
        amount: bigint;
    });
    toXdrObject(): ClawbackOpWire;
    static fromXdrObject(wire: ClawbackOpWire): ClawbackOp;
}
