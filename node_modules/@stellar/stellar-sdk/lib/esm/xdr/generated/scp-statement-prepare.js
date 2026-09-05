import { struct, uint32, option } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { ScpBallot } from './scp-ballot.js';

class ScpStatementPrepare extends XdrValue {
  quorumSetHash;
  ballot;
  prepared;
  preparedPrime;
  nC;
  nH;
  static schema = struct(
    "ScpStatementPrepare",
    {
      quorumSetHash: Hash.schema,
      ballot: ScpBallot.schema,
      prepared: option(ScpBallot.schema),
      preparedPrime: option(ScpBallot.schema),
      nC: uint32(),
      nH: uint32()
    }
  );
  constructor(input) {
    super();
    this.quorumSetHash = input.quorumSetHash instanceof Hash ? input.quorumSetHash : new Hash(input.quorumSetHash);
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
      quorumSetHash: Hash.fromXdrObject(wire.quorumSetHash),
      ballot: ScpBallot.fromXdrObject(wire.ballot),
      prepared: wire.prepared === null ? null : ScpBallot.fromXdrObject(wire.prepared),
      preparedPrime: wire.preparedPrime === null ? null : ScpBallot.fromXdrObject(wire.preparedPrime),
      nC: wire.nC,
      nH: wire.nH
    });
  }
}

export { ScpStatementPrepare };
//# sourceMappingURL=scp-statement-prepare.js.map
