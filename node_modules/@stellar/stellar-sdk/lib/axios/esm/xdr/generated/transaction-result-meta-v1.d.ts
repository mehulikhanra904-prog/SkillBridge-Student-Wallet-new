import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
import { TransactionResultPair, type TransactionResultPairWire } from "./transaction-result-pair.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
import { TransactionMeta, type TransactionMetaWire } from "./transaction-meta.js";
export interface TransactionResultMetaV1Wire {
    ext: ExtensionPointWire;
    result: TransactionResultPairWire;
    feeProcessing: LedgerEntryChangeWire[];
    txApplyProcessing: TransactionMetaWire;
    postTxApplyFeeProcessing: LedgerEntryChangeWire[];
}
/**
 * ```xdr
 * struct TransactionResultMetaV1
 * {
 *     ExtensionPoint ext;
 *
 *     TransactionResultPair result;
 *     LedgerEntryChanges feeProcessing;
 *     TransactionMeta txApplyProcessing;
 *
 *     LedgerEntryChanges postTxApplyFeeProcessing;
 * };
 * ```
 */
export declare class TransactionResultMetaV1 extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly result: TransactionResultPair;
    readonly feeProcessing: LedgerEntryChange[];
    readonly txApplyProcessing: TransactionMeta;
    readonly postTxApplyFeeProcessing: LedgerEntryChange[];
    static readonly schema: XdrType<TransactionResultMetaV1Wire>;
    constructor(input: {
        ext: ExtensionPoint;
        result: TransactionResultPair;
        feeProcessing: LedgerEntryChange[];
        txApplyProcessing: TransactionMeta;
        postTxApplyFeeProcessing: LedgerEntryChange[];
    });
    toXdrObject(): TransactionResultMetaV1Wire;
    static fromXdrObject(wire: TransactionResultMetaV1Wire): TransactionResultMetaV1;
}
