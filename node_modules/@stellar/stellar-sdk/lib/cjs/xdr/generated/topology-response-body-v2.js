'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var timeSlicedPeerData = require('./time-sliced-peer-data.js');
var timeSlicedNodeData = require('./time-sliced-node-data.js');

class TopologyResponseBodyV2 extends xdrValue.XdrValue {
  inboundPeers;
  outboundPeers;
  nodeData;
  static schema = jsXdr.struct(
    "TopologyResponseBodyV2",
    {
      inboundPeers: jsXdr.array(timeSlicedPeerData.TimeSlicedPeerData.schema, 25),
      outboundPeers: jsXdr.array(timeSlicedPeerData.TimeSlicedPeerData.schema, 25),
      nodeData: timeSlicedNodeData.TimeSlicedNodeData.schema
    }
  );
  constructor(input) {
    super();
    this.inboundPeers = input.inboundPeers;
    this.outboundPeers = input.outboundPeers;
    this.nodeData = input.nodeData;
  }
  toXdrObject() {
    return {
      inboundPeers: this.inboundPeers.map((v) => v.toXdrObject()),
      outboundPeers: this.outboundPeers.map((v) => v.toXdrObject()),
      nodeData: this.nodeData.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TopologyResponseBodyV2({
      inboundPeers: wire.inboundPeers.map(
        (w) => timeSlicedPeerData.TimeSlicedPeerData.fromXdrObject(w)
      ),
      outboundPeers: wire.outboundPeers.map(
        (w) => timeSlicedPeerData.TimeSlicedPeerData.fromXdrObject(w)
      ),
      nodeData: timeSlicedNodeData.TimeSlicedNodeData.fromXdrObject(wire.nodeData)
    });
  }
}

exports.TopologyResponseBodyV2 = TopologyResponseBodyV2;
//# sourceMappingURL=topology-response-body-v2.js.map
