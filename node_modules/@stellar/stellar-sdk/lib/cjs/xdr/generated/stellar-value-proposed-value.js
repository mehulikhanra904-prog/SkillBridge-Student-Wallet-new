'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var ledgerCloseValueSignature = require('./ledger-close-value-signature.js');

class StellarValueProposedValue extends xdrValue.XdrValue {
  txSetHash;
  previousLedgerHash;
  previousLedgerVersion;
  lcValueSignature;
  static schema = jsXdr.struct(
    "StellarValueProposedValue",
    {
      txSetHash: hash.Hash.schema,
      previousLedgerHash: hash.Hash.schema,
      previousLedgerVersion: jsXdr.uint32(),
      lcValueSignature: ledgerCloseValueSignature.LedgerCloseValueSignature.schema
    }
  );
  constructor(input) {
    super();
    this.txSetHash = input.txSetHash instanceof hash.Hash ? input.txSetHash : new hash.Hash(input.txSetHash);
    this.previousLedgerHash = input.previousLedgerHash instanceof hash.Hash ? input.previousLedgerHash : new hash.Hash(input.previousLedgerHash);
    this.previousLedgerVersion = input.previousLedgerVersion;
    this.lcValueSignature = input.lcValueSignature;
  }
  toXdrObject() {
    return {
      txSetHash: this.txSetHash.toXdrObject(),
      previousLedgerHash: this.previousLedgerHash.toXdrObject(),
      previousLedgerVersion: this.previousLedgerVersion,
      lcValueSignature: this.lcValueSignature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new StellarValueProposedValue({
      txSetHash: hash.Hash.fromXdrObject(wire.txSetHash),
      previousLedgerHash: hash.Hash.fromXdrObject(wire.previousLedgerHash),
      previousLedgerVersion: wire.previousLedgerVersion,
      lcValueSignature: ledgerCloseValueSignature.LedgerCloseValueSignature.fromXdrObject(
        wire.lcValueSignature
      )
    });
  }
}

exports.StellarValueProposedValue = StellarValueProposedValue;
//# sourceMappingURL=stellar-value-proposed-value.js.map
