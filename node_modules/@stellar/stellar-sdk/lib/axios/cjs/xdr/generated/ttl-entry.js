'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');

class TtlEntry extends xdrValue.XdrValue {
  keyHash;
  liveUntilLedgerSeq;
  static schema = jsXdr.struct("TtlEntry", {
    keyHash: hash.Hash.schema,
    liveUntilLedgerSeq: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.keyHash = input.keyHash instanceof hash.Hash ? input.keyHash : new hash.Hash(input.keyHash);
    this.liveUntilLedgerSeq = input.liveUntilLedgerSeq;
  }
  toXdrObject() {
    return {
      keyHash: this.keyHash.toXdrObject(),
      liveUntilLedgerSeq: this.liveUntilLedgerSeq
    };
  }
  static fromXdrObject(wire) {
    return new TtlEntry({
      keyHash: hash.Hash.fromXdrObject(wire.keyHash),
      liveUntilLedgerSeq: wire.liveUntilLedgerSeq
    });
  }
}

exports.TtlEntry = TtlEntry;
//# sourceMappingURL=ttl-entry.js.map
