import type { XdrType } from "@stellar/js-xdr";
import { XdrValue } from "../values/xdr-value.js";
import { TimeSlicedPeerData, type TimeSlicedPeerDataWire } from "./time-sliced-peer-data.js";
import { TimeSlicedNodeData, type TimeSlicedNodeDataWire } from "./time-sliced-node-data.js";
export interface TopologyResponseBodyV2Wire {
    inboundPeers: TimeSlicedPeerDataWire[];
    outboundPeers: TimeSlicedPeerDataWire[];
    nodeData: TimeSlicedNodeDataWire;
}
/**
 * ```xdr
 * struct TopologyResponseBodyV2
 * {
 *     TimeSlicedPeerDataList inboundPeers;
 *     TimeSlicedPeerDataList outboundPeers;
 *     TimeSlicedNodeData nodeData;
 * };
 * ```
 */
export declare class TopologyResponseBodyV2 extends XdrValue {
    readonly inboundPeers: TimeSlicedPeerData[];
    readonly outboundPeers: TimeSlicedPeerData[];
    readonly nodeData: TimeSlicedNodeData;
    static readonly schema: XdrType<TopologyResponseBodyV2Wire>;
    constructor(input: {
        inboundPeers: TimeSlicedPeerData[];
        outboundPeers: TimeSlicedPeerData[];
        nodeData: TimeSlicedNodeData;
    });
    toXdrObject(): TopologyResponseBodyV2Wire;
    static fromXdrObject(wire: TopologyResponseBodyV2Wire): TopologyResponseBodyV2;
}
