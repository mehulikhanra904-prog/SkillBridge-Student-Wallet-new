import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionEnvelope, type TransactionEnvelopeWire } from "./transaction-envelope.js";
export interface TxSetComponentTxsMaybeDiscountedFeeWire {
    baseFee: bigint | null;
    txs: TransactionEnvelopeWire[];
}
/**
 * ```xdr
 * struct
 *   {
 *     int64* baseFee;
 *     TransactionEnvelope txs<>;
 *   }
 * ```
 */
export declare class TxSetComponentTxsMaybeDiscountedFee extends XdrValue {
    readonly baseFee: bigint | null;
    readonly txs: TransactionEnvelope[];
    static readonly schema: XdrType<TxSetComponentTxsMaybeDiscountedFeeWire>;
    constructor(input: {
        baseFee: bigint | null;
        txs: TransactionEnvelope[];
    });
    toXdrObject(): TxSetComponentTxsMaybeDiscountedFeeWire;
    static fromXdrObject(wire: TxSetComponentTxsMaybeDiscountedFeeWire): TxSetComponentTxsMaybeDiscountedFee;
}
