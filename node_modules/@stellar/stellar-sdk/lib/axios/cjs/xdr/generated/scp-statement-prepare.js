'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var scpBallot = require('./scp-ballot.js');

class ScpStatementPrepare extends xdrValue.XdrValue {
  quorumSetHash;
  ballot;
  prepared;
  preparedPrime;
  nC;
  nH;
  static schema = jsXdr.struct(
    "ScpStatementPrepare",
    {
      quorumSetHash: hash.Hash.schema,
      ballot: scpBallot.ScpBallot.schema,
      prepared: jsXdr.option(scpBallot.ScpBallot.schema),
      preparedPrime: jsXdr.option(scpBallot.ScpBallot.schema),
      nC: jsXdr.uint32(),
      nH: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.quorumSetHash = input.quorumSetHash instanceof hash.Hash ? input.quorumSetHash : new hash.Hash(input.quorumSetHash);
    this.ballot = input.ballot;
    this.prepared = input.prepared;
    this.preparedPrime = input.preparedPrime;
    this.nC = input.nC;
    this.nH = input.nH;
  }
  toXdrObject() {
    return {
      quorumSetHash: this.quorumSetHash.toXdrObject(),
      ballot: this.ballot.toXdrObject(),
      prepared: this.prepared === null ? null : this.prepared.toXdrObject(),
      preparedPrime: this.preparedPrime === null ? null : this.preparedPrime.toXdrObject(),
      nC: this.nC,
      nH: this.nH
    };
  }
  static fromXdrObject(wire) {
    return new ScpStatementPrepare({
      quorumSetHash: hash.Hash.fromXdrObject(wire.quorumSetHash),
      ballot: scpBallot.ScpBallot.fromXdrObject(wire.ballot),
      prepared: wire.prepared === null ? null : scpBallot.ScpBallot.fromXdrObject(wire.prepared),
      preparedPrime: wire.preparedPrime === null ? null : scpBallot.ScpBallot.fromXdrObject(wire.preparedPrime),
      nC: wire.nC,
      nH: wire.nH
    });
  }
}

exports.ScpStatementPrepare = ScpStatementPrepare;
//# sourceMappingURL=scp-statement-prepare.js.map
