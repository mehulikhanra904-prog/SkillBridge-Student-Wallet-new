import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TxSetComponentTxsMaybeDiscountedFee, type TxSetComponentTxsMaybeDiscountedFeeWire } from "./tx-set-component-txs-maybe-discounted-fee.js";
export type TxSetComponentWire = {
    type: 0;
    txsMaybeDiscountedFee: TxSetComponentTxsMaybeDiscountedFeeWire;
};
export type TxSetComponentVariantName = "txsetCompTxsMaybeDiscountedFee";
/**
 * ```xdr
 * union TxSetComponent switch (TxSetComponentType type)
 * {
 * case TXSET_COMP_TXS_MAYBE_DISCOUNTED_FEE:
 *   struct
 *   {
 *     int64* baseFee;
 *     TransactionEnvelope txs<>;
 *   } txsMaybeDiscountedFee;
 * };
 * ```
 */
declare abstract class TxSetComponentBase extends XdrValue {
    abstract readonly type: TxSetComponentVariantName;
    constructor();
    static readonly schema: XdrType<TxSetComponentWire>;
    static txsetCompTxsMaybeDiscountedFee(txsMaybeDiscountedFee: TxSetComponentTxsMaybeDiscountedFee): TxSetComponentTxsetCompTxsMaybeDiscountedFee;
    static fromXdrObject(wire: TxSetComponentWire): TxSetComponent;
    /**
     * Type guard narrowing an unknown value to a concrete TxSetComponent variant.
     * Use this instead of `instanceof TxSetComponent`: the exported `TxSetComponent` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TxSetComponent.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TxSetComponent;
    abstract toXdrObject(): TxSetComponentWire;
}
export declare class TxSetComponentTxsetCompTxsMaybeDiscountedFee extends TxSetComponentBase {
    readonly type: "txsetCompTxsMaybeDiscountedFee";
    readonly txsMaybeDiscountedFee: TxSetComponentTxsMaybeDiscountedFee;
    constructor(txsMaybeDiscountedFee: TxSetComponentTxsMaybeDiscountedFee);
    get value(): TxSetComponentTxsMaybeDiscountedFee;
    toXdrObject(): Extract<TxSetComponentWire, {
        type: 0;
    }>;
}
export type TxSetComponent = TxSetComponentTxsetCompTxsMaybeDiscountedFee;
export declare const TxSetComponent: typeof TxSetComponentBase;
export {};
