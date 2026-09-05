import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { Value } from './value.js';

class ScpNomination extends XdrValue {
  quorumSetHash;
  votes;
  accepted;
  static schema = struct("ScpNomination", {
    quorumSetHash: Hash.schema,
    votes: array(Value.schema, UNBOUNDED_MAX_LENGTH),
    accepted: array(Value.schema, UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.quorumSetHash = input.quorumSetHash instanceof Hash ? input.quorumSetHash : new Hash(input.quorumSetHash);
    this.votes = input.votes.map(
      (v) => v instanceof Value ? v : new Value(v)
    );
    this.accepted = input.accepted.map(
      (v) => v instanceof Value ? v : new Value(v)
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
      quorumSetHash: Hash.fromXdrObject(wire.quorumSetHash),
      votes: wire.votes.map((w) => Value.fromXdrObject(w)),
      accepted: wire.accepted.map((w) => Value.fromXdrObject(w))
    });
  }
}

export { ScpNomination };
//# sourceMappingURL=scp-nomination.js.map
