'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');

class LedgerKeyContractCode extends xdrValue.XdrValue {
  hash;
  static schema = jsXdr.struct(
    "LedgerKeyContractCode",
    {
      hash: hash.Hash.schema
    }
  );
  constructor(input) {
    super();
    this.hash = input.hash instanceof hash.Hash ? input.hash : new hash.Hash(input.hash);
  }
  toXdrObject() {
    return {
      hash: this.hash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerKeyContractCode({
      hash: hash.Hash.fromXdrObject(wire.hash)
    });
  }
}

exports.LedgerKeyContractCode = LedgerKeyContractCode;
//# sourceMappingURL=ledger-key-contract-code.js.map
