import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionResultSet, type TransactionResultSetWire } from "./transaction-result-set.js";
import { TransactionHistoryResultEntryExt, type TransactionHistoryResultEntryExtWire } from "./transaction-history-result-entry-ext.js";
export interface TransactionHistoryResultEntryWire {
    ledgerSeq: number;
    txResultSet: TransactionResultSetWire;
    ext: TransactionHistoryResultEntryExtWire;
}
/**
 * ```xdr
 * struct TransactionHistoryResultEntry
 * {
 *     uint32 ledgerSeq;
 *     TransactionResultSet txResultSet;
 *
 *     // reserved for future use
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class TransactionHistoryResultEntry extends XdrValue {
    readonly ledgerSeq: number;
    readonly txResultSet: TransactionResultSet;
    readonly ext: TransactionHistoryResultEntryExt;
    static readonly schema: XdrType<TransactionHistoryResultEntryWire>;
    constructor(input: {
        ledgerSeq: number;
        txResultSet: TransactionResultSet;
        ext: TransactionHistoryResultEntryExt;
    });
    toXdrObject(): TransactionHistoryResultEntryWire;
    static fromXdrObject(wire: TransactionHistoryResultEntryWire): TransactionHistoryResultEntry;
}
