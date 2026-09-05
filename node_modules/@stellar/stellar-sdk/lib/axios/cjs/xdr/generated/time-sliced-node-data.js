'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class TimeSlicedNodeData extends xdrValue.XdrValue {
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
  static schema = jsXdr.struct(
    "TimeSlicedNodeData",
    {
      addedAuthenticatedPeers: jsXdr.uint32(),
      droppedAuthenticatedPeers: jsXdr.uint32(),
      totalInboundPeerCount: jsXdr.uint32(),
      totalOutboundPeerCount: jsXdr.uint32(),
      p75ScpFirstToSelfLatencyMs: jsXdr.uint32(),
      p75ScpSelfToOtherLatencyMs: jsXdr.uint32(),
      lostSyncCount: jsXdr.uint32(),
      isValidator: jsXdr.bool(),
      maxInboundPeerCount: jsXdr.uint32(),
      maxOutboundPeerCount: jsXdr.uint32()
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

exports.TimeSlicedNodeData = TimeSlicedNodeData;
//# sourceMappingURL=time-sliced-node-data.js.map
