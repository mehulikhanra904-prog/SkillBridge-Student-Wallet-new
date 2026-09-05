'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scpBallot = require('./scp-ballot.js');
var hash = require('./hash.js');

class ScpStatementConfirm extends xdrValue.XdrValue {
  ballot;
  nPrepared;
  nCommit;
  nH;
  quorumSetHash;
  static schema = jsXdr.struct(
    "ScpStatementConfirm",
    {
      ballot: scpBallot.ScpBallot.schema,
      nPrepared: jsXdr.uint32(),
      nCommit: jsXdr.uint32(),
      nH: jsXdr.uint32(),
      quorumSetHash: hash.Hash.schema
    }
  );
  constructor(input) {
    super();
    this.ballot = input.ballot;
    this.nPrepared = input.nPrepared;
    this.nCommit = input.nCommit;
    this.nH = input.nH;
    this.quorumSetHash = input.quorumSetHash instanceof hash.Hash ? input.quorumSetHash : new hash.Hash(input.quorumSetHash);
  }
  toXdrObject() {
    return {
      ballot: this.ballot.toXdrObject(),
      nPrepared: this.nPrepared,
      nCommit: this.nCommit,
      nH: this.nH,
      quorumSetHash: this.quorumSetHash.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScpStatementConfirm({
      ballot: scpBallot.ScpBallot.fromXdrObject(wire.ballot),
      nPrepared: wire.nPrepared,
      nCommit: wire.nCommit,
      nH: wire.nH,
      quorumSetHash: hash.Hash.fromXdrObject(wire.quorumSetHash)
    });
  }
}

exports.ScpStatementConfirm = ScpStatementConfirm;
//# sourceMappingURL=scp-statement-confirm.js.map
