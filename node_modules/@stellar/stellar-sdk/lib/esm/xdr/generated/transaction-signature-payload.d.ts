import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { TransactionSignaturePayloadTaggedTransaction, type TransactionSignaturePayloadTaggedTransactionWire } from "./transaction-signature-payload-tagged-transaction.js";
export interface TransactionSignaturePayloadWire {
    networkId: HashWire;
    taggedTransaction: TransactionSignaturePayloadTaggedTransactionWire;
}
/**
 * ```xdr
 * struct TransactionSignaturePayload
 * {
 *     Hash networkId;
 *     union switch (EnvelopeType type)
 *     {
 *     // Backwards Compatibility: Use ENVELOPE_TYPE_TX to sign ENVELOPE_TYPE_TX_V0
 *     case ENVELOPE_TYPE_TX:
 *         Transaction tx;
 *     case ENVELOPE_TYPE_TX_FEE_BUMP:
 *         FeeBumpTransaction feeBump;
 *     }
 *     taggedTransaction;
 * };
 * ```
 */
export declare class TransactionSignaturePayload extends XdrValue {
    readonly networkId: Hash;
    readonly taggedTransaction: TransactionSignaturePayloadTaggedTransaction;
    static readonly schema: XdrType<TransactionSignaturePayloadWire>;
    constructor(input: {
        networkId: Hash | Uint8Array | string;
        taggedTransaction: TransactionSignaturePayloadTaggedTransaction;
    });
    toXdrObject(): TransactionSignaturePayloadWire;
    static fromXdrObject(wire: TransactionSignaturePayloadWire): TransactionSignaturePayload;
}
