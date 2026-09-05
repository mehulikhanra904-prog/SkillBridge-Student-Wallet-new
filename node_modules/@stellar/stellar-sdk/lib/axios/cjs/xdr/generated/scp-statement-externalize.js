'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpBallot = require('./scp-ballot.js');
var hash = require('./hash.js');

class ScpStatementExternalize extends xdrValue.XdrValue {
  commit;
  nH;
  commitQuorumSetHash;
  static schema = jsXdr.struct(
    "ScpStatementExternalize",
    {
      commit: scpBallot.ScpBallot.schema,
      nH: jsXdr.uint32(),
      commitQuorumSetHash: hash.Hash.schema
    }
  );
  constructor(input) {
    super();
    this.commit = input.commit;
    this.nH = input.nH;
    this.commitQuorumSetHash = input.commitQuorumSetHash instanceof hash.Hash ? input.commitQuorumSetHash : new hash.Hash(input.commitQuorumSetHash);
  }
  toXdrObject() {
    return {
      commit: this.commit.toXdrObject(),
      nH: this.nH,
      commitQuorumSetHash: this.commitQuorumSetHash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScpStatementExternalize({
      commit: scpBallot.ScpBallot.fromXdrObject(wire.commit),
      nH: wire.nH,
      commitQuorumSetHash: hash.Hash.fromXdrObject(wire.commitQuorumSetHash)
    });
  }
}

exports.ScpStatementExternalize = ScpStatementExternalize;
//# sourceMappingURL=scp-statement-externalize.js.map
