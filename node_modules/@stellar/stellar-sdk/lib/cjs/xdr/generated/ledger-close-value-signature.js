'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var signature = require('./signature.js');

class LedgerCloseValueSignature extends xdrValue.XdrValue {
  nodeId;
  signature;
  static schema = jsXdr.struct(
    "LedgerCloseValueSignature",
    {
      nodeId: publicKey.PublicKey.schema,
      signature: signature.Signature.schema
    }
  );
  constructor(input) {
    super();
    this.nodeId = input.nodeId;
    this.signature = input.signature instanceof signature.Signature ? input.signature : new signature.Signature(input.signature);
  }
  toXdrObject() {
    return {
      nodeId: this.nodeId.toXdrObject(),
      signature: this.signature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerCloseValueSignature({
      nodeId: publicKey.PublicKey.fromXdrObject(wire.nodeId),
      signature: signature.Signature.fromXdrObject(wire.signature)
    });
  }
}

exports.LedgerCloseValueSignature = LedgerCloseValueSignature;
//# sourceMappingURL=ledger-close-value-signature.js.map
