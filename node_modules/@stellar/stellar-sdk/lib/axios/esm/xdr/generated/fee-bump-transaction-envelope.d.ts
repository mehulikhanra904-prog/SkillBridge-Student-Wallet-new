import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { FeeBumpTransaction, type FeeBumpTransactionWire } from "./fee-bump-transaction.js";
import { DecoratedSignature, type DecoratedSignatureWire } from "./decorated-signature.js";
export interface FeeBumpTransactionEnvelopeWire {
    tx: FeeBumpTransactionWire;
    signatures: DecoratedSignatureWire[];
}
/**
 * ```xdr
 * struct FeeBumpTransactionEnvelope
 * {
 *     FeeBumpTransaction tx;
 *     /* Each decorated signature is a signature over the SHA256 hash of
 *      * a TransactionSignaturePayload *\/
 *     DecoratedSignature signatures<20>;
 * };
 * ```
 */
export declare class FeeBumpTransactionEnvelope extends XdrValue {
    readonly tx: FeeBumpTransaction;
    readonly signatures: DecoratedSignature[];
    static readonly schema: XdrType<FeeBumpTransactionEnvelopeWire>;
    constructor(input: {
        tx: FeeBumpTransaction;
        signatures: DecoratedSignature[];
    });
    toXdrObject(): FeeBumpTransactionEnvelopeWire;
    static fromXdrObject(wire: FeeBumpTransactionEnvelopeWire): FeeBumpTransactionEnvelope;
}
