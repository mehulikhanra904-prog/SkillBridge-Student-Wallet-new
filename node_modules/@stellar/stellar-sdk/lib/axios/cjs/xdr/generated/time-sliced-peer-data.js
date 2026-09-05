'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var peerStats = require('./peer-stats.js');

class TimeSlicedPeerData extends xdrValue.XdrValue {
  peerStats;
  averageLatencyMs;
  static schema = jsXdr.struct(
    "TimeSlicedPeerData",
    {
      peerStats: peerStats.PeerStats.schema,
      averageLatencyMs: jsXdr.uint32()
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
      peerStats: peerStats.PeerStats.fromXdrObject(wire.peerStats),
      averageLatencyMs: wire.averageLatencyMs
    });
  }
}

exports.TimeSlicedPeerData = TimeSlicedPeerData;
//# sourceMappingURL=time-sliced-peer-data.js.map
