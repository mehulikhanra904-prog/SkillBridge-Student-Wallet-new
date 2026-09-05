import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
import { OperationMeta, type OperationMetaWire } from "./operation-meta.js";
export interface TransactionMetaV1Wire {
    txChanges: LedgerEntryChangeWire[];
    operations: OperationMetaWire[];
}
/**
 * ```xdr
 * struct TransactionMetaV1
 * {
 *     LedgerEntryChanges txChanges; // tx level changes if any
 *     OperationMeta operations<>;   // meta for each operation
 * };
 * ```
 */
export declare class TransactionMetaV1 extends XdrValue {
    readonly txChanges: LedgerEntryChange[];
    readonly operations: OperationMeta[];
    static readonly schema: XdrType<TransactionMetaV1Wire>;
    constructor(input: {
        txChanges: LedgerEntryChange[];
        operations: OperationMeta[];
    });
    toXdrObject(): TransactionMetaV1Wire;
    static fromXdrObject(wire: TransactionMetaV1Wire): TransactionMetaV1;
}
