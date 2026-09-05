'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class LedgerBounds extends xdrValue.XdrValue {
  minLedger;
  maxLedger;
  static schema = jsXdr.struct("LedgerBounds", {
    minLedger: jsXdr.uint32(),
    maxLedger: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.minLedger = input.minLedger;
    this.maxLedger = input.maxLedger;
  }
  toXdrObject() {
    return {
      minLedger: this.minLedger,
      maxLedger: this.maxLedger
    };
  }
  static fromXdrObject(wire) {
    return new LedgerBounds({
      minLedger: wire.minLedger,
      maxLedger: wire.maxLedger
    });
  }
}

exports.LedgerBounds = LedgerBounds;
//# sourceMappingURL=ledger-bounds.js.map
