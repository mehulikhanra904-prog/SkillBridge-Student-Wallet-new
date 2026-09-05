'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var signatureHint = require('./signature-hint.js');
var signature = require('./signature.js');

class DecoratedSignature extends xdrValue.XdrValue {
  hint;
  signature;
  static schema = jsXdr.struct(
    "DecoratedSignature",
    {
      hint: signatureHint.SignatureHint.schema,
      signature: signature.Signature.schema
    }
  );
  constructor(input) {
    super();
    this.hint = input.hint instanceof signatureHint.SignatureHint ? input.hint : new signatureHint.SignatureHint(input.hint);
    this.signature = input.signature instanceof signature.Signature ? input.signature : new signature.Signature(input.signature);
  }
  toXdrObject() {
    return {
      hint: this.hint.toXdrObject(),
      signature: this.signature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new DecoratedSignature({
      hint: signatureHint.SignatureHint.fromXdrObject(wire.hint),
      signature: signature.Signature.fromXdrObject(wire.signature)
    });
  }
}

exports.DecoratedSignature = DecoratedSignature;
//# sourceMappingURL=decorated-signature.js.map
