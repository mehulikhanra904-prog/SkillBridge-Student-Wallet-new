import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { TransactionResult, type TransactionResultWire } from "./transaction-result.js";
export interface TransactionResultPairWire {
    transactionHash: HashWire;
    result: TransactionResultWire;
}
/**
 * ```xdr
 * struct TransactionResultPair
 * {
 *     Hash transactionHash;
 *     TransactionResult result; // result for the transaction
 * };
 * ```
 */
export declare class TransactionResultPair extends XdrValue {
    readonly transactionHash: Hash;
    readonly result: TransactionResult;
    static readonly schema: XdrType<TransactionResultPairWire>;
    constructor(input: {
        transactionHash: Hash | Uint8Array | string;
        result: TransactionResult;
    });
    toXdrObject(): TransactionResultPairWire;
    static fromXdrObject(wire: TransactionResultPairWire): TransactionResultPair;
}
