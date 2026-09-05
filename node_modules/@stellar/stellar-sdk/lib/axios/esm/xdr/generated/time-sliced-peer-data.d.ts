import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { PeerStats, type PeerStatsWire } from "./peer-stats.js";
export interface TimeSlicedPeerDataWire {
    peerStats: PeerStatsWire;
    averageLatencyMs: number;
}
/**
 * ```xdr
 * struct TimeSlicedPeerData
 * {
 *     PeerStats peerStats;
 *     uint32 averageLatencyMs;
 * };
 * ```
 */
export declare class TimeSlicedPeerData extends XdrValue {
    readonly peerStats: PeerStats;
    readonly averageLatencyMs: number;
    static readonly schema: XdrType<TimeSlicedPeerDataWire>;
    constructor(input: {
        peerStats: PeerStats;
        averageLatencyMs: number;
    });
    toXdrObject(): TimeSlicedPeerDataWire;
    static fromXdrObject(wire: TimeSlicedPeerDataWire): TimeSlicedPeerData;
}
