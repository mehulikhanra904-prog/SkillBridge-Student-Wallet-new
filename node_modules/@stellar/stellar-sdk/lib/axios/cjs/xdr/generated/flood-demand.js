'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');

class FloodDemand extends xdrValue.XdrValue {
  txHashes;
  static schema = jsXdr.struct("FloodDemand", {
    txHashes: jsXdr.array(hash.Hash.schema, 1e3)
  });
  constructor(input) {
    super();
    this.txHashes = input.txHashes;
  }
  toXdrObject() {
    return {
      txHashes: this.txHashes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FloodDemand({
      txHashes: wire.txHashes.map((w) => hash.Hash.fromXdrObject(w))
    });
  }
}

exports.FloodDemand = FloodDemand;
//# sourceMappingURL=flood-demand.js.map
