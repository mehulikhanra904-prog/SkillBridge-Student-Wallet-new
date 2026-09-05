import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ExtensionPoint, type ExtensionPointWire } from "./extension-point.js";
import { LedgerEntryChange, type LedgerEntryChangeWire } from "./ledger-entry-change.js";
import { ContractEvent, type ContractEventWire } from "./contract-event.js";
export interface OperationMetaV2Wire {
    ext: ExtensionPointWire;
    changes: LedgerEntryChangeWire[];
    events: ContractEventWire[];
}
/**
 * ```xdr
 * struct OperationMetaV2
 * {
 *     ExtensionPoint ext;
 *
 *     LedgerEntryChanges changes;
 *
 *     ContractEvent events<>;
 * };
 * ```
 */
export declare class OperationMetaV2 extends XdrValue {
    readonly ext: ExtensionPoint;
    readonly changes: LedgerEntryChange[];
    readonly events: ContractEvent[];
    static readonly schema: XdrType<OperationMetaV2Wire>;
    constructor(input: {
        ext: ExtensionPoint;
        changes: LedgerEntryChange[];
        events: ContractEvent[];
    });
    toXdrObject(): OperationMetaV2Wire;
    static fromXdrObject(wire: OperationMetaV2Wire): OperationMetaV2;
}
