import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { MuxedAccount, type MuxedAccountWire } from "./muxed-account.js";
import { Asset, type AssetWire } from "./asset.js";
export interface PaymentOpWire {
    destination: MuxedAccountWire;
    asset: AssetWire;
    amount: bigint;
}
/**
 * ```xdr
 * struct PaymentOp
 * {
 *     MuxedAccount destination; // recipient of the payment
 *     Asset asset;              // what they end up with
 *     int64 amount;             // amount they end up with
 * };
 * ```
 */
export declare class PaymentOp extends XdrValue {
    readonly destination: MuxedAccount;
    readonly asset: Asset;
    readonly amount: bigint;
    static readonly schema: XdrType<PaymentOpWire>;
    constructor(input: {
        destination: MuxedAccount;
        asset: Asset;
        amount: bigint;
    });
    toXdrObject(): PaymentOpWire;
    static fromXdrObject(wire: PaymentOpWire): PaymentOp;
}
