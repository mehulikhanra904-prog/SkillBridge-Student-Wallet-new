import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PeerStats } from './peer-stats.js';

class TimeSlicedPeerData extends XdrValue {
  peerStats;
  averageLatencyMs;
  static schema = struct(
    "TimeSlicedPeerData",
    {
      peerStats: PeerStats.schema,
      averageLatencyMs: uint32()
    }
  );
  constructor(input) {
    super();
    this.peerStats = input.peerStats;
    this.averageLatencyMs = input.averageLatencyMs;
  }
  toXdrObject() {
    return {
      peerStats: this.peerStats.toXdrObject(),
      averageLatencyMs: this.averageLatencyMs
    };
  }
  static fromXdrObject(wire) {
    return new TimeSlicedPeerData({
      peerStats: PeerStats.fromXdrObject(wire.peerStats),
      averageLatencyMs: wire.averageLatencyMs
    });
  }
}

export { TimeSlicedPeerData };
//# sourceMappingURL=time-sliced-peer-data.js.map
