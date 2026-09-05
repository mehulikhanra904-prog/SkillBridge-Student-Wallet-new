import { struct, uint32, bool } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class TimeSlicedNodeData extends XdrValue {
  addedAuthenticatedPeers;
  droppedAuthenticatedPeers;
  totalInboundPeerCount;
  totalOutboundPeerCount;
  p75ScpFirstToSelfLatencyMs;
  p75ScpSelfToOtherLatencyMs;
  lostSyncCount;
  isValidator;
  maxInboundPeerCount;
  maxOutboundPeerCount;
  static schema = struct(
    "TimeSlicedNodeData",
    {
      addedAuthenticatedPeers: uint32(),
      droppedAuthenticatedPeers: uint32(),
      totalInboundPeerCount: uint32(),
      totalOutboundPeerCount: uint32(),
      p75ScpFirstToSelfLatencyMs: uint32(),
      p75ScpSelfToOtherLatencyMs: uint32(),
      lostSyncCount: uint32(),
      isValidator: bool(),
      maxInboundPeerCount: uint32(),
      maxOutboundPeerCount: uint32()
    }
  );
  constructor(input) {
    super();
    this.addedAuthenticatedPeers = input.addedAuthenticatedPeers;
    this.droppedAuthenticatedPeers = input.droppedAuthenticatedPeers;
    this.totalInboundPeerCount = input.totalInboundPeerCount;
    this.totalOutboundPeerCount = input.totalOutboundPeerCount;
    this.p75ScpFirstToSelfLatencyMs = input.p75ScpFirstToSelfLatencyMs;
    this.p75ScpSelfToOtherLatencyMs = input.p75ScpSelfToOtherLatencyMs;
    this.lostSyncCount = input.lostSyncCount;
    this.isValidator = input.isValidator;
    this.maxInboundPeerCount = input.maxInboundPeerCount;
    this.maxOutboundPeerCount = input.maxOutboundPeerCount;
  }
  toXdrObject() {
    return {
      addedAuthenticatedPeers: this.addedAuthenticatedPeers,
      droppedAuthenticatedPeers: this.droppedAuthenticatedPeers,
      totalInboundPeerCount: this.totalInboundPeerCount,
      totalOutboundPeerCount: this.totalOutboundPeerCount,
      p75ScpFirstToSelfLatencyMs: this.p75ScpFirstToSelfLatencyMs,
      p75ScpSelfToOtherLatencyMs: this.p75ScpSelfToOtherLatencyMs,
      lostSyncCount: this.lostSyncCount,
      isValidator: this.isValidator,
      maxInboundPeerCount: this.maxInboundPeerCount,
      maxOutboundPeerCount: this.maxOutboundPeerCount
    };
  }
  static fromXdrObject(wire) {
    return new TimeSlicedNodeData({
      addedAuthenticatedPeers: wire.addedAuthenticatedPeers,
      droppedAuthenticatedPeers: wire.droppedAuthenticatedPeers,
      totalInboundPeerCount: wire.totalInboundPeerCount,
      totalOutboundPeerCount: wire.totalOutboundPeerCount,
      p75ScpFirstToSelfLatencyMs: wire.p75ScpFirstToSelfLatencyMs,
      p75ScpSelfToOtherLatencyMs: wire.p75ScpSelfToOtherLatencyMs,
      lostSyncCount: wire.lostSyncCount,
      isValidator: wire.isValidator,
      maxInboundPeerCount: wire.maxInboundPeerCount,
      maxOutboundPeerCount: wire.maxOutboundPeerCount
    });
  }
}

export { TimeSlicedNodeData };
//# sourceMappingURL=time-sliced-node-data.js.map
