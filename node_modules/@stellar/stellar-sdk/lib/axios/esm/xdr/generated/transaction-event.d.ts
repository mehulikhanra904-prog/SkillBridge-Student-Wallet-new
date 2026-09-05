import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TransactionEventStage, type TransactionEventStageWire } from "./transaction-event-stage.js";
import { ContractEvent, type ContractEventWire } from "./contract-event.js";
export interface TransactionEventWire {
    stage: TransactionEventStageWire;
    event: ContractEventWire;
}
/**
 * ```xdr
 * struct TransactionEvent {
 *     TransactionEventStage stage;  // Stage at which an event has occurred.
 *     ContractEvent event;  // The contract event that has occurred.
 * };
 * ```
 */
export declare class TransactionEvent extends XdrValue {
    readonly stage: TransactionEventStage;
    readonly event: ContractEvent;
    static readonly schema: XdrType<TransactionEventWire>;
    constructor(input: {
        stage: TransactionEventStage;
        event: ContractEvent;
    });
    toXdrObject(): TransactionEventWire;
    static fromXdrObject(wire: TransactionEventWire): TransactionEvent;
}
