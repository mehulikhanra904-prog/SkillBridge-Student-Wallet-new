'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var storedTransactionSet = require('./stored-transaction-set.js');
var stellarValue = require('./stellar-value.js');

class StoredDebugTransactionSet extends xdrValue.XdrValue {
  txSet;
  ledgerSeq;
  scpValue;
  static schema = jsXdr.struct(
    "StoredDebugTransactionSet",
    {
      txSet: storedTransactionSet.StoredTransactionSet.schema,
      ledgerSeq: jsXdr.uint32(),
      scpValue: stellarValue.StellarValue.schema
    }
  );
  constructor(input) {
    super();
    this.txSet = input.txSet;
    this.ledgerSeq = input.ledgerSeq;
    this.scpValue = input.scpValue;
  }
  toXdrObject() {
    return {
      txSet: this.txSet.toXdrObject(),
      ledgerSeq: this.ledgerSeq,
      scpValue: this.scpValue.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new StoredDebugTransactionSet({
      txSet: storedTransactionSet.StoredTransactionSet.fromXdrObject(wire.txSet),
      ledgerSeq: wire.ledgerSeq,
      scpValue: stellarValue.StellarValue.fromXdrObject(wire.scpValue)
    });
  }
}

exports.StoredDebugTransactionSet = StoredDebugTransactionSet;
//# sourceMappingURL=stored-debug-transaction-set.js.map
