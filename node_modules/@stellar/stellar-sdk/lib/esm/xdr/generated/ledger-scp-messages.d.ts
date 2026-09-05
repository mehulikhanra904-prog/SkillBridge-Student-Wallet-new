import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpEnvelope, type ScpEnvelopeWire } from "./scp-envelope.js";
export interface LedgerScpMessagesWire {
    ledgerSeq: number;
    messages: ScpEnvelopeWire[];
}
/**
 * ```xdr
 * struct LedgerSCPMessages
 * {
 *     uint32 ledgerSeq;
 *     SCPEnvelope messages<>;
 * };
 * ```
 */
export declare class LedgerScpMessages extends XdrValue {
    readonly ledgerSeq: number;
    readonly messages: ScpEnvelope[];
    static readonly schema: XdrType<LedgerScpMessagesWire>;
    constructor(input: {
        ledgerSeq: number;
        messages: ScpEnvelope[];
    });
    toXdrObject(): LedgerScpMessagesWire;
    static fromXdrObject(wire: LedgerScpMessagesWire): LedgerScpMessages;
}
