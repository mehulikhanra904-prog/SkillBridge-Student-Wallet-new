'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var timeBounds = require('./time-bounds.js');
var ledgerBounds = require('./ledger-bounds.js');
var signerKey = require('./signer-key.js');

class PreconditionsV2 extends xdrValue.XdrValue {
  timeBounds;
  ledgerBounds;
  minSeqNum;
  minSeqAge;
  minSeqLedgerGap;
  extraSigners;
  static schema = jsXdr.struct(
    "PreconditionsV2",
    {
      timeBounds: jsXdr.option(timeBounds.TimeBounds.schema),
      ledgerBounds: jsXdr.option(ledgerBounds.LedgerBounds.schema),
      minSeqNum: jsXdr.option(jsXdr.int64()),
      minSeqAge: jsXdr.uint64(),
      minSeqLedgerGap: jsXdr.uint32(),
      extraSigners: jsXdr.array(signerKey.SignerKey.schema, 2)
    }
  );
  constructor(input) {
    super();
    this.timeBounds = input.timeBounds;
    this.ledgerBounds = input.ledgerBounds;
    this.minSeqNum = input.minSeqNum;
    this.minSeqAge = input.minSeqAge;
    this.minSeqLedgerGap = input.minSeqLedgerGap;
    this.extraSigners = input.extraSigners;
  }
  toXdrObject() {
    return {
      timeBounds: this.timeBounds === null ? null : this.timeBounds.toXdrObject(),
      ledgerBounds: this.ledgerBounds === null ? null : this.ledgerBounds.toXdrObject(),
      minSeqNum: this.minSeqNum,
      minSeqAge: this.minSeqAge,
      minSeqLedgerGap: this.minSeqLedgerGap,
      extraSigners: this.extraSigners.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new PreconditionsV2({
      timeBounds: wire.timeBounds === null ? null : timeBounds.TimeBounds.fromXdrObject(wire.timeBounds),
      ledgerBounds: wire.ledgerBounds === null ? null : ledgerBounds.LedgerBounds.fromXdrObject(wire.ledgerBounds),
      minSeqNum: wire.minSeqNum,
      minSeqAge: wire.minSeqAge,
      minSeqLedgerGap: wire.minSeqLedgerGap,
      extraSigners: wire.extraSigners.map((w) => signerKey.SignerKey.fromXdrObject(w))
    });
  }
}

exports.PreconditionsV2 = PreconditionsV2;
//# sourceMappingURL=preconditions-v2.js.map
