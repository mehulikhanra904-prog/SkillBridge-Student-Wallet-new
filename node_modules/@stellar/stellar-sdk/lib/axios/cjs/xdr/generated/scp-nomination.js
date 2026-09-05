'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var value = require('./value.js');

class ScpNomination extends xdrValue.XdrValue {
  quorumSetHash;
  votes;
  accepted;
  static schema = jsXdr.struct("ScpNomination", {
    quorumSetHash: hash.Hash.schema,
    votes: jsXdr.array(value.Value.schema, jsXdr.UNBOUNDED_MAX_LENGTH),
    accepted: jsXdr.array(value.Value.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.quorumSetHash = input.quorumSetHash instanceof hash.Hash ? input.quorumSetHash : new hash.Hash(input.quorumSetHash);
    this.votes = input.votes.map(
      (v) => v instanceof value.Value ? v : new value.Value(v)
    );
    this.accepted = input.accepted.map(
      (v) => v instanceof value.Value ? v : new value.Value(v)
    );
  }
  toXdrObject() {
    return {
      quorumSetHash: this.quorumSetHash.toXdrObject(),
      votes: this.votes.map((v) => v.toXdrObject()),
      accepted: this.accepted.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new ScpNomination({
      quorumSetHash: hash.Hash.fromXdrObject(wire.quorumSetHash),
      votes: wire.votes.map((w) => value.Value.fromXdrObject(w)),
      accepted: wire.accepted.map((w) => value.Value.fromXdrObject(w))
    });
  }
}

exports.ScpNomination = ScpNomination;
//# sourceMappingURL=scp-nomination.js.map
