import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionResultPair, type TransactionResultPairWire } from "./transaction-result-pair.js";
export interface TransactionResultSetWire {
    results: TransactionResultPairWire[];
}
/**
 * ```xdr
 * struct TransactionResultSet
 * {
 *     TransactionResultPair results<>;
 * };
 * ```
 */
export declare class TransactionResultSet extends XdrValue {
    readonly results: TransactionResultPair[];
    static readonly schema: XdrType<TransactionResultSetWire>;
    constructor(input: {
        results: TransactionResultPair[];
    });
    toXdrObject(): TransactionResultSetWire;
    static fromXdrObject(wire: TransactionResultSetWire): TransactionResultSet;
}
