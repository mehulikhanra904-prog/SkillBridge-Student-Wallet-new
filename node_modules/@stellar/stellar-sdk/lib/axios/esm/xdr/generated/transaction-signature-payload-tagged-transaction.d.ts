import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Transaction, type TransactionWire } from "./transaction.js";
import { FeeBumpTransaction, type FeeBumpTransactionWire } from "./fee-bump-transaction.js";
export type TransactionSignaturePayloadTaggedTransactionWire = {
    type: 2;
    tx: TransactionWire;
} | {
    type: 5;
    feeBump: FeeBumpTransactionWire;
};
export type TransactionSignaturePayloadTaggedTransactionVariantName = "envelopeTypeTx" | "envelopeTypeTxFeeBump";
/**
 * ```xdr
 * union switch (EnvelopeType type)
 *     {
 *     // Backwards Compatibility: Use ENVELOPE_TYPE_TX to sign ENVELOPE_TYPE_TX_V0
 *     case ENVELOPE_TYPE_TX:
 *         Transaction tx;
 *     case ENVELOPE_TYPE_TX_FEE_BUMP:
 *         FeeBumpTransaction feeBump;
 *     }
 * ```
 */
declare abstract class TransactionSignaturePayloadTaggedTransactionBase extends XdrValue {
    abstract readonly type: TransactionSignaturePayloadTaggedTransactionVariantName;
    constructor();
    static readonly schema: XdrType<TransactionSignaturePayloadTaggedTransactionWire>;
    static envelopeTypeTx(tx: Transaction): TransactionSignaturePayloadTaggedTransactionTx;
    static envelopeTypeTxFeeBump(feeBump: FeeBumpTransaction): TransactionSignaturePayloadTaggedTransactionTxFeeBump;
    static fromXdrObject(wire: TransactionSignaturePayloadTaggedTransactionWire): TransactionSignaturePayloadTaggedTransaction;
    /**
     * Type guard narrowing an unknown value to a concrete TransactionSignaturePayloadTaggedTransaction variant.
     * Use this instead of `instanceof TransactionSignaturePayloadTaggedTransaction`: the exported `TransactionSignaturePayloadTaggedTransaction` value
     * is the abstract base, so `instanceof` narrows to the base (not the
     * variant union) and forces a cast. `TransactionSignaturePayloadTaggedTransaction.is(x)` narrows to the union.
     */
    static is(value: unknown): value is TransactionSignaturePayloadTaggedTransaction;
    abstract toXdrObject(): TransactionSignaturePayloadTaggedTransactionWire;
}
export declare class TransactionSignaturePayloadTaggedTransactionTx extends TransactionSignaturePayloadTaggedTransactionBase {
    readonly type: "envelopeTypeTx";
    readonly tx: Transaction;
    constructor(tx: Transaction);
    get value(): Transaction;
    toXdrObject(): Extract<TransactionSignaturePayloadTaggedTransactionWire, {
        type: 2;
    }>;
}
export declare class TransactionSignaturePayloadTaggedTransactionTxFeeBump extends TransactionSignaturePayloadTaggedTransactionBase {
    readonly type: "envelopeTypeTxFeeBump";
    readonly feeBump: FeeBumpTransaction;
    constructor(feeBump: FeeBumpTransaction);
    get value(): FeeBumpTransaction;
    toXdrObject(): Extract<TransactionSignaturePayloadTaggedTransactionWire, {
        type: 5;
    }>;
}
export type TransactionSignaturePayloadTaggedTransaction = TransactionSignaturePayloadTaggedTransactionTx | TransactionSignaturePayloadTaggedTransactionTxFeeBump;
export declare const TransactionSignaturePayloadTaggedTransaction: typeof TransactionSignaturePayloadTaggedTransactionBase;
export {};
