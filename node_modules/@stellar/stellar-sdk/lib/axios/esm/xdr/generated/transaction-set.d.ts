import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { TransactionEnvelope, type TransactionEnvelopeWire } from "./transaction-envelope.js";
export interface TransactionSetWire {
    previousLedgerHash: HashWire;
    txs: TransactionEnvelopeWire[];
}
/**
 * ```xdr
 * struct TransactionSet
 * {
 *     Hash previousLedgerHash;
 *     TransactionEnvelope txs<>;
 * };
 * ```
 */
export declare class TransactionSet extends XdrValue {
    readonly previousLedgerHash: Hash;
    readonly txs: TransactionEnvelope[];
    static readonly schema: XdrType<TransactionSetWire>;
    constructor(input: {
        previousLedgerHash: Hash | Uint8Array | string;
        txs: TransactionEnvelope[];
    });
    toXdrObject(): TransactionSetWire;
    static fromXdrObject(wire: TransactionSetWire): TransactionSet;
}
