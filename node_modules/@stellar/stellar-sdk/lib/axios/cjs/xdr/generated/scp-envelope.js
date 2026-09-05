'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpStatement = require('./scp-statement.js');
var signature = require('./signature.js');

class ScpEnvelope extends xdrValue.XdrValue {
  statement;
  signature;
  static schema = jsXdr.struct("ScpEnvelope", {
    statement: scpStatement.ScpStatement.schema,
    signature: signature.Signature.schema
  });
  constructor(input) {
    super();
    this.statement = input.statement;
    this.signature = input.signature instanceof signature.Signature ? input.signature : new signature.Signature(input.signature);
  }
  toXdrObject() {
    return {
      statement: this.statement.toXdrObject(),
      signature: this.signature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScpEnvelope({
      statement: scpStatement.ScpStatement.fromXdrObject(wire.statement),
      signature: signature.Signature.fromXdrObject(wire.signature)
    });
  }
}

exports.ScpEnvelope = ScpEnvelope;
//# sourceMappingURL=scp-envelope.js.map
