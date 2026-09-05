import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionResultPair, type TransactionResultPairWire } from "./transaction-result-pair.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
import { TransactionMeta, type TransactionMetaWire } from "./transaction-meta.js";
export interface TransactionResultMetaWire {
    result: TransactionResultPairWire;
    feeProcessing: LedgerEntryChangeWire[];
    txApplyProcessing: TransactionMetaWire;
}
/**
 * ```xdr
 * struct TransactionResultMeta
 * {
 *     TransactionResultPair result;
 *     LedgerEntryChanges feeProcessing;
 *     TransactionMeta txApplyProcessing;
 * };
 * ```
 */
export declare class TransactionResultMeta extends XdrValue {
    readonly result: TransactionResultPair;
    readonly feeProcessing: LedgerEntryChange[];
    readonly txApplyProcessing: TransactionMeta;
    static readonly schema: XdrType<TransactionResultMetaWire>;
    constructor(input: {
        result: TransactionResultPair;
        feeProcessing: LedgerEntryChange[];
        txApplyProcessing: TransactionMeta;
    });
    toXdrObject(): TransactionResultMetaWire;
    static fromXdrObject(wire: TransactionResultMetaWire): TransactionResultMeta;
}
