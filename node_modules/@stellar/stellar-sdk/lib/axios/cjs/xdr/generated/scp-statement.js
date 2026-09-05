'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var scpStatementPledges = require('./scp-statement-pledges.js');

class ScpStatement extends xdrValue.XdrValue {
  nodeId;
  slotIndex;
  pledges;
  static schema = jsXdr.struct("ScpStatement", {
    nodeId: publicKey.PublicKey.schema,
    slotIndex: jsXdr.uint64(),
    pledges: scpStatementPledges.ScpStatementPledges.schema
  });
  constructor(input) {
    super();
    this.nodeId = input.nodeId;
    this.slotIndex = input.slotIndex;
    this.pledges = input.pledges;
  }
  toXdrObject() {
    return {
      nodeId: this.nodeId.toXdrObject(),
      slotIndex: this.slotIndex,
      pledges: this.pledges.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScpStatement({
      nodeId: publicKey.PublicKey.fromXdrObject(wire.nodeId),
      slotIndex: wire.slotIndex,
      pledges: scpStatementPledges.ScpStatementPledges.fromXdrObject(wire.pledges)
    });
  }
}

exports.ScpStatement = ScpStatement;
//# sourceMappingURL=scp-statement.js.map
