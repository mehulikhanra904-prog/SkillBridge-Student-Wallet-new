import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
export interface TimeSlicedNodeDataWire {
    addedAuthenticatedPeers: number;
    droppedAuthenticatedPeers: number;
    totalInboundPeerCount: number;
    totalOutboundPeerCount: number;
    p75ScpFirstToSelfLatencyMs: number;
    p75ScpSelfToOtherLatencyMs: number;
    lostSyncCount: number;
    isValidator: boolean;
    maxInboundPeerCount: number;
    maxOutboundPeerCount: number;
}
/**
 * ```xdr
 * struct TimeSlicedNodeData
 * {
 *     uint32 addedAuthenticatedPeers;
 *     uint32 droppedAuthenticatedPeers;
 *     uint32 totalInboundPeerCount;
 *     uint32 totalOutboundPeerCount;
 *
 *     // SCP stats
 *     uint32 p75SCPFirstToSelfLatencyMs;
 *     uint32 p75SCPSelfToOtherLatencyMs;
 *
 *     // How many times the node lost sync in the time slice
 *     uint32 lostSyncCount;
 *
 *     // Config data
 *     bool isValidator;
 *     uint32 maxInboundPeerCount;
 *     uint32 maxOutboundPeerCount;
 * };
 * ```
 */
export declare class TimeSlicedNodeData extends XdrValue {
    readonly addedAuthenticatedPeers: number;
    readonly droppedAuthenticatedPeers: number;
    readonly totalInboundPeerCount: number;
    readonly totalOutboundPeerCount: number;
    readonly p75ScpFirstToSelfLatencyMs: number;
    readonly p75ScpSelfToOtherLatencyMs: number;
    readonly lostSyncCount: number;
    readonly isValidator: boolean;
    readonly maxInboundPeerCount: number;
    readonly maxOutboundPeerCount: number;
    static readonly schema: XdrType<TimeSlicedNodeDataWire>;
    constructor(input: {
        addedAuthenticatedPeers: number;
        droppedAuthenticatedPeers: number;
        totalInboundPeerCount: number;
        totalOutboundPeerCount: number;
        p75ScpFirstToSelfLatencyMs: number;
        p75ScpSelfToOtherLatencyMs: number;
        lostSyncCount: number;
        isValidator: boolean;
        maxInboundPeerCount: number;
        maxOutboundPeerCount: number;
    });
    toXdrObject(): TimeSlicedNodeDataWire;
    static fromXdrObject(wire: TimeSlicedNodeDataWire): TimeSlicedNodeData;
}
