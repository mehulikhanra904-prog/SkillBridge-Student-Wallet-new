import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionV1Envelope, type TransactionV1EnvelopeWire } from "./transaction-v1-envelope.js";
export type FeeBumpTransactionInnerTxWire = {
    type: 2;
    v1: TransactionV1EnvelopeWire;
};
export type FeeBumpTransactionInnerTxVariantName = "envelopeTypeTx";
/**
 * ```xdr
 * union switch (EnvelopeType type)
 *     {
 *     case ENVELOPE_TYPE_TX:
 *         TransactionV1Envelope v1;
 *     }
 * ```
 */
declare abstract class FeeBumpTransactionInnerTxBase extends XdrValue {
    abstract readonly type: FeeBumpTransactionInnerTxVariantName;
    constructor();
    static readonly schema: XdrType<FeeBumpTransactionInnerTxWire>;
    static envelopeTypeTx(v1: TransactionV1Envelope): FeeBumpTransactionInnerTxTx;
    static fromXdrObject(wire: FeeBumpTransactionInnerTxWire): FeeBumpTransactionInnerTx;
    /**
     * Type guard narrowing an unknown value to a concrete FeeBumpTransactionInnerTx variant.
     * Use this instead of `instanceof FeeBumpTransactionInnerTx`: the exported `FeeBumpTransactionInnerTx` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `FeeBumpTransactionInnerTx.is(x)` narrows to the union.
     */
    static is(value: unknown): value is FeeBumpTransactionInnerTx;
    abstract toXdrObject(): FeeBumpTransactionInnerTxWire;
}
export declare class FeeBumpTransactionInnerTxTx extends FeeBumpTransactionInnerTxBase {
    readonly type: "envelopeTypeTx";
    readonly v1: TransactionV1Envelope;
    constructor(v1: TransactionV1Envelope);
    get value(): TransactionV1Envelope;
    toXdrObject(): Extract<FeeBumpTransactionInnerTxWire, {
        type: 2;
    }>;
}
export type FeeBumpTransactionInnerTx = FeeBumpTransactionInnerTxTx;
export declare const FeeBumpTransactionInnerTx: typeof FeeBumpTransactionInnerTxBase;
export {};
