import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
export interface OperationMetaWire {
    changes: LedgerEntryChangeWire[];
}
/**
 * ```xdr
 * struct OperationMeta
 * {
 *     LedgerEntryChanges changes;
 * };
 * ```
 */
export declare class OperationMeta extends XdrValue {
    readonly changes: LedgerEntryChange[];
    static readonly schema: XdrType<OperationMetaWire>;
    constructor(input: {
        changes: LedgerEntryChange[];
    });
    toXdrObject(): OperationMetaWire;
    static fromXdrObject(wire: OperationMetaWire): OperationMeta;
}
