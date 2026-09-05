import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { SorobanTransactionMetaExt, type SorobanTransactionMetaExtWire } from "./soroban-transaction-meta-ext.js";
import { ContractEvent, type ContractEventWire } from "./contract-event.js";
import { ScVal, type ScValWire } from "./sc-val.js";
import { DiagnosticEvent, type DiagnosticEventWire } from "./diagnostic-event.js";
export interface SorobanTransactionMetaWire {
    ext: SorobanTransactionMetaExtWire;
    events: ContractEventWire[];
    returnValue: ScValWire;
    diagnosticEvents: DiagnosticEventWire[];
}
/**
 * ```xdr
 * struct SorobanTransactionMeta
 * {
 *     SorobanTransactionMetaExt ext;
 *
 *     ContractEvent events<>;             // custom events populated by the
 *                                         // contracts themselves.
 *     SCVal returnValue;                  // return value of the host fn invocation
 *
 *     // Diagnostics events that are not hashed.
 *     // This will contain all contract and diagnostic events. Even ones
 *     // that were emitted in a failed contract call.
 *     DiagnosticEvent diagnosticEvents<>;
 * };
 * ```
 */
export declare class SorobanTransactionMeta extends XdrValue {
    readonly ext: SorobanTransactionMetaExt;
    readonly events: ContractEvent[];
    readonly returnValue: ScVal;
    readonly diagnosticEvents: DiagnosticEvent[];
    static readonly schema: XdrType<SorobanTransactionMetaWire>;
    constructor(input: {
        ext: SorobanTransactionMetaExt;
        events: ContractEvent[];
        returnValue: ScVal;
        diagnosticEvents: DiagnosticEvent[];
    });
    toXdrObject(): SorobanTransactionMetaWire;
    static fromXdrObject(wire: SorobanTransactionMetaWire): SorobanTransactionMeta;
}
