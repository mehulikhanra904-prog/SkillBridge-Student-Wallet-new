import { struct, array } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TimeSlicedPeerData } from './time-sliced-peer-data.js';
import { TimeSlicedNodeData } from './time-sliced-node-data.js';

class TopologyResponseBodyV2 extends XdrValue {
  inboundPeers;
  outboundPeers;
  nodeData;
  static schema = struct(
    "TopologyResponseBodyV2",
    {
      inboundPeers: array(TimeSlicedPeerData.schema, 25),
      outboundPeers: array(TimeSlicedPeerData.schema, 25),
      nodeData: TimeSlicedNodeData.schema
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
        (w) => TimeSlicedPeerData.fromXdrObject(w)
      ),
      outboundPeers: wire.outboundPeers.map(
        (w) => TimeSlicedPeerData.fromXdrObject(w)
      ),
      nodeData: TimeSlicedNodeData.fromXdrObject(wire.nodeData)
    });
  }
}

export { TopologyResponseBodyV2 };
//# sourceMappingURL=topology-response-body-v2.js.map
