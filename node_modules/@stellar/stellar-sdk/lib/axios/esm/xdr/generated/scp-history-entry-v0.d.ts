import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpQuorumSet, type ScpQuorumSetWire } from "./scp-quorum-set.js";
import { LedgerScpMessages, type LedgerScpMessagesWire } from "./ledger-scp-messages.js";
export interface ScpHistoryEntryV0Wire {
    quorumSets: ScpQuorumSetWire[];
    ledgerMessages: LedgerScpMessagesWire;
}
/**
 * ```xdr
 * struct SCPHistoryEntryV0
 * {
 *     SCPQuorumSet quorumSets<>; // additional quorum sets used by ledgerMessages
 *     LedgerSCPMessages ledgerMessages;
 * };
 * ```
 */
export declare class ScpHistoryEntryV0 extends XdrValue {
    readonly quorumSets: ScpQuorumSet[];
    readonly ledgerMessages: LedgerScpMessages;
    static readonly schema: XdrType<ScpHistoryEntryV0Wire>;
    constructor(input: {
        quorumSets: ScpQuorumSet[];
        ledgerMessages: LedgerScpMessages;
    });
    toXdrObject(): ScpHistoryEntryV0Wire;
    static fromXdrObject(wire: ScpHistoryEntryV0Wire): ScpHistoryEntryV0;
}
