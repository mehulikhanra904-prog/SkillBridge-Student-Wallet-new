import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { Hash, type HashWire } from "./hash.js";
import { InnerTransactionResult, type InnerTransactionResultWire } from "./inner-transaction-result.js";
export interface InnerTransactionResultPairWire {
    transactionHash: HashWire;
    result: InnerTransactionResultWire;
}
/**
 * ```xdr
 * struct InnerTransactionResultPair
 * {
 *     Hash transactionHash;          // hash of the inner transaction
 *     InnerTransactionResult result; // result for the inner transaction
 * };
 * ```
 */
export declare class InnerTransactionResultPair extends XdrValue {
    readonly transactionHash: Hash;
    readonly result: InnerTransactionResult;
    static readonly schema: XdrType<InnerTransactionResultPairWire>;
    constructor(input: {
        transactionHash: Hash | Uint8Array | string;
        result: InnerTransactionResult;
    });
    toXdrObject(): InnerTransactionResultPairWire;
    static fromXdrObject(wire: InnerTransactionResultPairWire): InnerTransactionResultPair;
}
