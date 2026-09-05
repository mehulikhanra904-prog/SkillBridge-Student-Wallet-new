'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var encodedLedgerKey = require('./encoded-ledger-key.js');

class FrozenLedgerKeys extends xdrValue.XdrValue {
  keys;
  static schema = jsXdr.struct(
    "FrozenLedgerKeys",
    {
      keys: jsXdr.array(encodedLedgerKey.EncodedLedgerKey.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.keys = input.keys.map(
      (v) => v instanceof encodedLedgerKey.EncodedLedgerKey ? v : new encodedLedgerKey.EncodedLedgerKey(v)
    );
  }
  toXdrObject() {
    return {
      keys: this.keys.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FrozenLedgerKeys({
      keys: wire.keys.map((w) => encodedLedgerKey.EncodedLedgerKey.fromXdrObject(w))
    });
  }
}

exports.FrozenLedgerKeys = FrozenLedgerKeys;
//# sourceMappingURL=frozen-ledger-keys.js.map
