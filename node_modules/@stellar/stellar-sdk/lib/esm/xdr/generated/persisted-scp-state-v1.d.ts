import { type XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { ScpEnvelope, type ScpEnvelopeWire } from "./scp-envelope.js";
import { ScpQuorumSet, type ScpQuorumSetWire } from "./scp-quorum-set.js";
export interface PersistedScpStateV1Wire {
    scpEnvelopes: ScpEnvelopeWire[];
    quorumSets: ScpQuorumSetWire[];
}
/**
 * ```xdr
 * struct PersistedSCPStateV1
 * {
 * 	// Tx sets are saved separately
 * 	SCPEnvelope scpEnvelopes<>;
 * 	SCPQuorumSet quorumSets<>;
 * };
 * ```
 */
export declare class PersistedScpStateV1 extends XdrValue {
    readonly scpEnvelopes: ScpEnvelope[];
    readonly quorumSets: ScpQuorumSet[];
    static readonly schema: XdrType<PersistedScpStateV1Wire>;
    constructor(input: {
        scpEnvelopes: ScpEnvelope[];
        quorumSets: ScpQuorumSet[];
    });
    toXdrObject(): PersistedScpStateV1Wire;
    static fromXdrObject(wire: PersistedScpStateV1Wire): PersistedScpStateV1;
}
