import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionV0, type TransactionV0Wire } from "./transaction-v0.js";
import { DecoratedSignature, type DecoratedSignatureWire } from "./decorated-signature.js";
export interface TransactionV0EnvelopeWire {
    tx: TransactionV0Wire;
    signatures: DecoratedSignatureWire[];
}
/**
 * ```xdr
 * struct TransactionV0Envelope
 * {
 *     TransactionV0 tx;
 *     /* Each decorated signature is a signature over the SHA256 hash of
 *      * a TransactionSignaturePayload *\/
 *     DecoratedSignature signatures<20>;
 * };
 * ```
 */
export declare class TransactionV0Envelope extends XdrValue {
    readonly tx: TransactionV0;
    readonly signatures: DecoratedSignature[];
    static readonly schema: XdrType<TransactionV0EnvelopeWire>;
    constructor(input: {
        tx: TransactionV0;
        signatures: DecoratedSignature[];
    });
    toXdrObject(): TransactionV0EnvelopeWire;
    static fromXdrObject(wire: TransactionV0EnvelopeWire): TransactionV0Envelope;
}
