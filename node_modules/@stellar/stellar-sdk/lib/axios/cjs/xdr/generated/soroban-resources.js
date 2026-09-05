'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var ledgerFootprint = require('./ledger-footprint.js');

class SorobanResources extends xdrValue.XdrValue {
  footprint;
  instructions;
  diskReadBytes;
  writeBytes;
  static schema = jsXdr.struct(
    "SorobanResources",
    {
      footprint: ledgerFootprint.LedgerFootprint.schema,
      instructions: jsXdr.uint32(),
      diskReadBytes: jsXdr.uint32(),
      writeBytes: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.footprint = input.footprint;
    this.instructions = input.instructions;
    this.diskReadBytes = input.diskReadBytes;
    this.writeBytes = input.writeBytes;
  }
  toXdrObject() {
    return {
      footprint: this.footprint.toXdrObject(),
      instructions: this.instructions,
      diskReadBytes: this.diskReadBytes,
      writeBytes: this.writeBytes
    };
  }
  static fromXdrObject(wire) {
    return new SorobanResources({
      footprint: ledgerFootprint.LedgerFootprint.fromXdrObject(wire.footprint),
      instructions: wire.instructions,
      diskReadBytes: wire.diskReadBytes,
      writeBytes: wire.writeBytes
    });
  }
}

exports.SorobanResources = SorobanResources;
//# sourceMappingURL=soroban-resources.js.map
