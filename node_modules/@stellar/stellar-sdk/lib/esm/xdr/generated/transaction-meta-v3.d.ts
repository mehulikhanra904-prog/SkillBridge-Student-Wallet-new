import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
import { OperationMeta, type OperationMetaWire } from "./operation-meta.js";
import { SorobanTransactionMeta, type SorobanTransactionMetaWire } from "./soroban-transaction-meta.js";
export interface TransactionMetaV3Wire {
    ext: ExtensionPointWire;
    txChangesBefore: LedgerEntryChangeWire[];
    operations: OperationMetaWire[];
    txChangesAfter: LedgerEntryChangeWire[];
    sorobanMeta: SorobanTransactionMetaWire | null;
}
/**
 * ```xdr
 * struct TransactionMetaV3
 * {
 *     ExtensionPoint ext;
 *
 *     LedgerEntryChanges txChangesBefore;  // tx level changes before operations
 *                                          // are applied if any
 *     OperationMeta operations<>;          // meta for each operation
 *     LedgerEntryChanges txChangesAfter;   // tx level changes after operations are
 *                                          // applied if any
 *     SorobanTransactionMeta* sorobanMeta; // Soroban-specific meta (only for
 *                                          // Soroban transactions).
 * };
 * ```
 */
export declare class TransactionMetaV3 extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly txChangesBefore: LedgerEntryChange[];
    readonly operations: OperationMeta[];
    readonly txChangesAfter: LedgerEntryChange[];
    readonly sorobanMeta: SorobanTransactionMeta | null;
    static readonly schema: XdrType<TransactionMetaV3Wire>;
    constructor(input: {
        ext: ExtensionPoint;
        txChangesBefore: LedgerEntryChange[];
        operations: OperationMeta[];
        txChangesAfter: LedgerEntryChange[];
        sorobanMeta: SorobanTransactionMeta | null;
    });
    toXdrObject(): TransactionMetaV3Wire;
    static fromXdrObject(wire: TransactionMetaV3Wire): TransactionMetaV3;
}
