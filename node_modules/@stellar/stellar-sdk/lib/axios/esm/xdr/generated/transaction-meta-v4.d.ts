import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
import { OperationMetaV2, type OperationMetaV2Wire } from "./operation-meta-v2.js";
import { SorobanTransactionMetaV2, type SorobanTransactionMetaV2Wire } from "./soroban-transaction-meta-v2.js";
import { TransactionEvent, type TransactionEventWire } from "./transaction-event.js";
import { DiagnosticEvent, type DiagnosticEventWire } from "./diagnostic-event.js";
export interface TransactionMetaV4Wire {
    ext: ExtensionPointWire;
    txChangesBefore: LedgerEntryChangeWire[];
    operations: OperationMetaV2Wire[];
    txChangesAfter: LedgerEntryChangeWire[];
    sorobanMeta: SorobanTransactionMetaV2Wire | null;
    events: TransactionEventWire[];
    diagnosticEvents: DiagnosticEventWire[];
}
/**
 * ```xdr
 * struct TransactionMetaV4
 * {
 *     ExtensionPoint ext;
 *
 *     LedgerEntryChanges txChangesBefore;  // tx level changes before operations
 *                                          // are applied if any
 *     OperationMetaV2 operations<>;        // meta for each operation
 *     LedgerEntryChanges txChangesAfter;   // tx level changes after operations are
 *                                          // applied if any
 *     SorobanTransactionMetaV2* sorobanMeta; // Soroban-specific meta (only for
 *                                            // Soroban transactions).
 *
 *     TransactionEvent events<>; // Used for transaction-level events (like fee payment)
 *     DiagnosticEvent diagnosticEvents<>; // Used for all diagnostic information
 * };
 * ```
 */
export declare class TransactionMetaV4 extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly txChangesBefore: LedgerEntryChange[];
    readonly operations: OperationMetaV2[];
    readonly txChangesAfter: LedgerEntryChange[];
    readonly sorobanMeta: SorobanTransactionMetaV2 | null;
    readonly events: TransactionEvent[];
    readonly diagnosticEvents: DiagnosticEvent[];
    static readonly schema: XdrType<TransactionMetaV4Wire>;
    constructor(input: {
        ext: ExtensionPoint;
        txChangesBefore: LedgerEntryChange[];
        operations: OperationMetaV2[];
        txChangesAfter: LedgerEntryChange[];
        sorobanMeta: SorobanTransactionMetaV2 | null;
        events: TransactionEvent[];
        diagnosticEvents: DiagnosticEvent[];
    });
    toXdrObject(): TransactionMetaV4Wire;
    static fromXdrObject(wire: TransactionMetaV4Wire): TransactionMetaV4;
}
