import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ContractEvent, type ContractEventWire } from "./contract-event.js";
export interface DiagnosticEventWire {
    inSuccessfulContractCall: boolean;
    event: ContractEventWire;
}
/**
 * ```xdr
 * struct DiagnosticEvent
 * {
 *     bool inSuccessfulContractCall;
 *     ContractEvent event;
 * };
 * ```
 */
export declare class DiagnosticEvent extends XdrValue {
    readonly inSuccessfulContractCall: boolean;
    readonly event: ContractEvent;
    static readonly schema: XdrType<DiagnosticEventWire>;
    constructor(input: {
        inSuccessfulContractCall: boolean;
        event: ContractEvent;
    });
    toXdrObject(): DiagnosticEventWire;
    static fromXdrObject(wire: DiagnosticEventWire): DiagnosticEvent;
}
