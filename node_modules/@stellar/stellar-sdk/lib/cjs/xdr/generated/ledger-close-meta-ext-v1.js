'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');

class LedgerCloseMetaExtV1 extends xdrValue.XdrValue {
  ext;
  sorobanFeeWrite1Kb;
  static schema = jsXdr.struct(
    "LedgerCloseMetaExtV1",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      sorobanFeeWrite1Kb: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.sorobanFeeWrite1Kb = input.sorobanFeeWrite1Kb;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      sorobanFeeWrite1Kb: this.sorobanFeeWrite1Kb
    };
  }
  static fromXdrObject(wire) {
    return new LedgerCloseMetaExtV1({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      sorobanFeeWrite1Kb: wire.sorobanFeeWrite1Kb
    });
  }
}

exports.LedgerCloseMetaExtV1 = LedgerCloseMetaExtV1;
//# sourceMappingURL=ledger-close-meta-ext-v1.js.map
