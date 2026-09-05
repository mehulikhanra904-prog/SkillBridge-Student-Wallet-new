'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var transactionEnvelope = require('./transaction-envelope.js');

class TransactionSet extends xdrValue.XdrValue {
  previousLedgerHash;
  txs;
  static schema = jsXdr.struct(
    "TransactionSet",
    {
      previousLedgerHash: hash.Hash.schema,
      txs: jsXdr.array(transactionEnvelope.TransactionEnvelope.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.previousLedgerHash = input.previousLedgerHash instanceof hash.Hash ? input.previousLedgerHash : new hash.Hash(input.previousLedgerHash);
    this.txs = input.txs;
  }
  toXdrObject() {
    return {
      previousLedgerHash: this.previousLedgerHash.toXdrObject(),
      txs: this.txs.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new TransactionSet({
      previousLedgerHash: hash.Hash.fromXdrObject(wire.previousLedgerHash),
      txs: wire.txs.map((w) => transactionEnvelope.TransactionEnvelope.fromXdrObject(w))
    });
  }
}

exports.TransactionSet = TransactionSet;
//# sourceMappingURL=transaction-set.js.map
