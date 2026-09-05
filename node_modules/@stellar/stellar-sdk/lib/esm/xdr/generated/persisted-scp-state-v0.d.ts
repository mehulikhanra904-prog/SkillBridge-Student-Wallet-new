import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpEnvelope, type ScpEnvelopeWire } from "./scp-envelope.js";
import { ScpQuorumSet, type ScpQuorumSetWire } from "./scp-quorum-set.js";
import { StoredTransactionSet, type StoredTransactionSetWire } from "./stored-transaction-set.js";
export interface PersistedScpStateV0Wire {
    scpEnvelopes: ScpEnvelopeWire[];
    quorumSets: ScpQuorumSetWire[];
    txSets: StoredTransactionSetWire[];
}
/**
 * ```xdr
 * struct PersistedSCPStateV0
 * {
 * 	SCPEnvelope scpEnvelopes<>;
 * 	SCPQuorumSet quorumSets<>;
 * 	StoredTransactionSet txSets<>;
 * };
 * ```
 */
export declare class PersistedScpStateV0 extends XdrValue {
    readonly scpEnvelopes: ScpEnvelope[];
    readonly quorumSets: ScpQuorumSet[];
    readonly txSets: StoredTransactionSet[];
    static readonly schema: XdrType<PersistedScpStateV0Wire>;
    constructor(input: {
        scpEnvelopes: ScpEnvelope[];
        quorumSets: ScpQuorumSet[];
        txSets: StoredTransactionSet[];
    });
    toXdrObject(): PersistedScpStateV0Wire;
    static fromXdrObject(wire: PersistedScpStateV0Wire): PersistedScpStateV0;
}
