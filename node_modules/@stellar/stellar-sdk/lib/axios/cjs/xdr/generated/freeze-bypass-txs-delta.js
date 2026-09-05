'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');

class FreezeBypassTxsDelta extends xdrValue.XdrValue {
  addTxs;
  removeTxs;
  static schema = jsXdr.struct(
    "FreezeBypassTxsDelta",
    {
      addTxs: jsXdr.array(hash.Hash.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      removeTxs: jsXdr.array(hash.Hash.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.addTxs = input.addTxs.map(
      (v) => v instanceof hash.Hash ? v : new hash.Hash(v)
    );
    this.removeTxs = input.removeTxs.map(
      (v) => v instanceof hash.Hash ? v : new hash.Hash(v)
    );
  }
  toXdrObject() {
    return {
      addTxs: this.addTxs.map((v) => v.toXdrObject()),
      removeTxs: this.removeTxs.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FreezeBypassTxsDelta({
      addTxs: wire.addTxs.map((w) => hash.Hash.fromXdrObject(w)),
      removeTxs: wire.removeTxs.map((w) => hash.Hash.fromXdrObject(w))
    });
  }
}

exports.FreezeBypassTxsDelta = FreezeBypassTxsDelta;
//# sourceMappingURL=freeze-bypass-txs-delta.js.map
