'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var transactionPhase = require('./transaction-phase.js');

class TransactionSetV1 extends xdrValue.XdrValue {
  previousLedgerHash;
  phases;
  static schema = jsXdr.struct(
    "TransactionSetV1",
    {
      previousLedgerHash: hash.Hash.schema,
      phases: jsXdr.array(transactionPhase.TransactionPhase.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.previousLedgerHash = input.previousLedgerHash instanceof hash.Hash ? input.previousLedgerHash : new hash.Hash(input.previousLedgerHash);
    this.phases = input.phases;
  }
  toXdrObject() {
    return {
      previousLedgerHash: this.previousLedgerHash.toXdrObject(),
      phases: this.phases.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionSetV1({
      previousLedgerHash: hash.Hash.fromXdrObject(wire.previousLedgerHash),
      phases: wire.phases.map((w) => transactionPhase.TransactionPhase.fromXdrObject(w))
    });
  }
}

exports.TransactionSetV1 = TransactionSetV1;
//# sourceMappingURL=transaction-set-v1.js.map
