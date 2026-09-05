import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Transaction, type TransactionWire } from "./transaction.js";
import { DecoratedSignature, type DecoratedSignatureWire } from "./decorated-signature.js";
export interface TransactionV1EnvelopeWire {
    tx: TransactionWire;
    signatures: DecoratedSignatureWire[];
}
/**
 * ```xdr
 * struct TransactionV1Envelope
 * {
 *     Transaction tx;
 *     /* Each decorated signature is a signature over the SHA256 hash of
 *      * a TransactionSignaturePayload *\/
 *     DecoratedSignature signatures<20>;
 * };
 * ```
 */
export declare class TransactionV1Envelope extends XdrValue {
    readonly tx: Transaction;
    readonly signatures: DecoratedSignature[];
    static readonly schema: XdrType<TransactionV1EnvelopeWire>;
    constructor(input: {
        tx: Transaction;
        signatures: DecoratedSignature[];
    });
    toXdrObject(): TransactionV1EnvelopeWire;
    static fromXdrObject(wire: TransactionV1EnvelopeWire): TransactionV1Envelope;
}
