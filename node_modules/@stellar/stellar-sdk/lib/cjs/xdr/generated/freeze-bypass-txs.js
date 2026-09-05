'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');

class FreezeBypassTxs extends xdrValue.XdrValue {
  txHashes;
  static schema = jsXdr.struct(
    "FreezeBypassTxs",
    {
      txHashes: jsXdr.array(hash.Hash.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.txHashes = input.txHashes.map(
      (v) => v instanceof hash.Hash ? v : new hash.Hash(v)
    );
  }
  toXdrObject() {
    return {
      txHashes: this.txHashes.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FreezeBypassTxs({
      txHashes: wire.txHashes.map((w) => hash.Hash.fromXdrObject(w))
    });
  }
}

exports.FreezeBypassTxs = FreezeBypassTxs;
//# sourceMappingURL=freeze-bypass-txs.js.map
