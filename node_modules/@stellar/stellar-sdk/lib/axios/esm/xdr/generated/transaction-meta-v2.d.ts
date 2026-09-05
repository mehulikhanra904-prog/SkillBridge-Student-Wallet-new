import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
import { OperationMeta, type OperationMetaWire } from "./operation-meta.js";
export interface TransactionMetaV2Wire {
    txChangesBefore: LedgerEntryChangeWire[];
    operations: OperationMetaWire[];
    txChangesAfter: LedgerEntryChangeWire[];
}
/**
 * ```xdr
 * struct TransactionMetaV2
 * {
 *     LedgerEntryChanges txChangesBefore; // tx level changes before operations
 *                                         // are applied if any
 *     OperationMeta operations<>;         // meta for each operation
 *     LedgerEntryChanges txChangesAfter;  // tx level changes after operations are
 *                                         // applied if any
 * };
 * ```
 */
export declare class TransactionMetaV2 extends XdrValue {
    readonly txChangesBefore: LedgerEntryChange[];
    readonly operations: OperationMeta[];
    readonly txChangesAfter: LedgerEntryChange[];
    static readonly schema: XdrType<TransactionMetaV2Wire>;
    constructor(input: {
        txChangesBefore: LedgerEntryChange[];
        operations: OperationMeta[];
        txChangesAfter: LedgerEntryChange[];
    });
    toXdrObject(): TransactionMetaV2Wire;
    static fromXdrObject(wire: TransactionMetaV2Wire): TransactionMetaV2;
}
