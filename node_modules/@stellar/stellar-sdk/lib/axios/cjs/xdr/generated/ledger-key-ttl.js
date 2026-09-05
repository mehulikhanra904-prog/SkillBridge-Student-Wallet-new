'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');

class LedgerKeyTtl extends xdrValue.XdrValue {
  keyHash;
  static schema = jsXdr.struct("LedgerKeyTtl", {
    keyHash: hash.Hash.schema
  });
  constructor(input) {
    super();
    this.keyHash = input.keyHash instanceof hash.Hash ? input.keyHash : new hash.Hash(input.keyHash);
  }
  toXdrObject() {
    return {
      keyHash: this.keyHash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyTtl({
      keyHash: hash.Hash.fromXdrObject(wire.keyHash)
    });
  }
}

exports.LedgerKeyTtl = LedgerKeyTtl;
//# sourceMappingURL=ledger-key-ttl.js.map
