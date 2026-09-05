'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var encodedLedgerKey = require('./encoded-ledger-key.js');

class FrozenLedgerKeysDelta extends xdrValue.XdrValue {
  keysToFreeze;
  keysToUnfreeze;
  static schema = jsXdr.struct(
    "FrozenLedgerKeysDelta",
    {
      keysToFreeze: jsXdr.array(encodedLedgerKey.EncodedLedgerKey.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
      keysToUnfreeze: jsXdr.array(encodedLedgerKey.EncodedLedgerKey.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.keysToFreeze = input.keysToFreeze.map(
      (v) => v instanceof encodedLedgerKey.EncodedLedgerKey ? v : new encodedLedgerKey.EncodedLedgerKey(v)
    );
    this.keysToUnfreeze = input.keysToUnfreeze.map(
      (v) => v instanceof encodedLedgerKey.EncodedLedgerKey ? v : new encodedLedgerKey.EncodedLedgerKey(v)
    );
  }
  toXdrObject() {
    return {
      keysToFreeze: this.keysToFreeze.map((v) => v.toXdrObject()),
      keysToUnfreeze: this.keysToUnfreeze.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new FrozenLedgerKeysDelta({
      keysToFreeze: wire.keysToFreeze.map(
        (w) => encodedLedgerKey.EncodedLedgerKey.fromXdrObject(w)
      ),
      keysToUnfreeze: wire.keysToUnfreeze.map(
        (w) => encodedLedgerKey.EncodedLedgerKey.fromXdrObject(w)
      )
    });
  }
}

exports.FrozenLedgerKeysDelta = FrozenLedgerKeysDelta;
//# sourceMappingURL=frozen-ledger-keys-delta.js.map
