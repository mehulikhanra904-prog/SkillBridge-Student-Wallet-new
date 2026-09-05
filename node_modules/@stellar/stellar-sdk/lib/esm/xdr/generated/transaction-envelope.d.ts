import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionV0Envelope, type TransactionV0EnvelopeWire } from "./transaction-v0-envelope.js";
import { TransactionV1Envelope, type TransactionV1EnvelopeWire } from "./transaction-v1-envelope.js";
import { FeeBumpTransactionEnvelope, type FeeBumpTransactionEnvelopeWire } from "./fee-bump-transaction-envelope.js";
export type TransactionEnvelopeWire = {
    type: 0;
    v0: TransactionV0EnvelopeWire;
} | {
    type: 2;
    v1: TransactionV1EnvelopeWire;
} | {
    type: 5;
    feeBump: FeeBumpTransactionEnvelopeWire;
};
export type TransactionEnvelopeVariantName = "envelopeTypeTxV0" | "envelopeTypeTx" | "envelopeTypeTxFeeBump";
/**
 * ```xdr
 * union TransactionEnvelope switch (EnvelopeType type)
 * {
 * case ENVELOPE_TYPE_TX_V0:
 *     TransactionV0Envelope v0;
 * case ENVELOPE_TYPE_TX:
 *     TransactionV1Envelope v1;
 * case ENVELOPE_TYPE_TX_FEE_BUMP:
 *     FeeBumpTransactionEnvelope feeBump;
 * };
 * ```
 */
declare abstract class TransactionEnvelopeBase extends XdrValue {
    abstract readonly type: TransactionEnvelopeVariantName;
    constructor();
    static readonly schema: XdrType<TransactionEnvelopeWire>;
    static envelopeTypeTxV0(v0: TransactionV0Envelope): TransactionEnvelopeTxV0;
    static envelopeTypeTx(v1: TransactionV1Envelope): TransactionEnvelopeTx;
    static envelopeTypeTxFeeBump(feeBump: FeeBumpTransactionEnvelope): TransactionEnvelopeTxFeeBump;
    static fromXdrObject(wire: TransactionEnvelopeWire): TransactionEnvelope;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionEnvelope variant.
     * Use this instead of `instanceof TransactionEnvelope`: the exported `TransactionEnvelope` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionEnvelope.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionEnvelope;
    abstract toXdrObject(): TransactionEnvelopeWire;
}
export declare class TransactionEnvelopeTxV0 extends TransactionEnvelopeBase {
    readonly type: "envelopeTypeTxV0";
    readonly v0: TransactionV0Envelope;
    constructor(v0: TransactionV0Envelope);
    get value(): TransactionV0Envelope;
    toXdrObject(): Extract<TransactionEnvelopeWire, {
        type: 0;
    }>;
}
export declare class TransactionEnvelopeTx extends TransactionEnvelopeBase {
    readonly type: "envelopeTypeTx";
    readonly v1: TransactionV1Envelope;
    constructor(v1: TransactionV1Envelope);
    get value(): TransactionV1Envelope;
    toXdrObject(): Extract<TransactionEnvelopeWire, {
        type: 2;
    }>;
}
export declare class TransactionEnvelopeTxFeeBump extends TransactionEnvelopeBase {
    readonly type: "envelopeTypeTxFeeBump";
    readonly feeBump: FeeBumpTransactionEnvelope;
    constructor(feeBump: FeeBumpTransactionEnvelope);
    get value(): FeeBumpTransactionEnvelope;
    toXdrObject(): Extract<TransactionEnvelopeWire, {
        type: 5;
    }>;
}
export type TransactionEnvelope = TransactionEnvelopeTxV0 | TransactionEnvelopeTx | TransactionEnvelopeTxFeeBump;
export declare const TransactionEnvelope: typeof TransactionEnvelopeBase;
export {};
