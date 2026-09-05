import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionSet, type TransactionSetWire } from "./transaction-set.js";
import { TransactionHistoryEntryExt, type TransactionHistoryEntryExtWire } from "./transaction-history-entry-ext.js";
export interface TransactionHistoryEntryWire {
    ledgerSeq: number;
    txSet: TransactionSetWire;
    ext: TransactionHistoryEntryExtWire;
}
/**
 * ```xdr
 * struct TransactionHistoryEntry
 * {
 *     uint32 ledgerSeq;
 *     TransactionSet txSet;
 *
 *     // when v != 0, txSet must be empty
 *     union switch (int v)
 *     {
 *     case 0:
 *         void;
 *     case 1:
 *         GeneralizedTransactionSet generalizedTxSet;
 *     }
 *     ext;
 * };
 * ```
 */
export declare class TransactionHistoryEntry extends XdrValue {
    readonly ledgerSeq: number;
    readonly txSet: TransactionSet;
    readonly ext: TransactionHistoryEntryExt;
    static readonly schema: XdrType<TransactionHistoryEntryWire>;
    constructor(input: {
        ledgerSeq: number;
        txSet: TransactionSet;
        ext: TransactionHistoryEntryExt;
    });
    toXdrObject(): TransactionHistoryEntryWire;
    static fromXdrObject(wire: TransactionHistoryEntryWire): TransactionHistoryEntry;
}
