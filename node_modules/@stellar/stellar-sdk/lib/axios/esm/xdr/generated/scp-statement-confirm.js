import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScpBallot } from './scp-ballot.js';
import { Hash } from './hash.js';

class ScpStatementConfirm extends XdrValue {
  ballot;
  nPrepared;
  nCommit;
  nH;
  quorumSetHash;
  static schema = struct(
    "ScpStatementConfirm",
    {
      ballot: ScpBallot.schema,
      nPrepared: uint32(),
      nCommit: uint32(),
      nH: uint32(),
      quorumSetHash: Hash.schema
    }
  );
  constructor(input) {
    super();
    this.ballot = input.ballot;
    this.nPrepared = input.nPrepared;
    this.nCommit = input.nCommit;
    this.nH = input.nH;
    this.quorumSetHash = input.quorumSetHash instanceof Hash ? input.quorumSetHash : new Hash(input.quorumSetHash);
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
      ballot: ScpBallot.fromXdrObject(wire.ballot),
      nPrepared: wire.nPrepared,
      nCommit: wire.nCommit,
      nH: wire.nH,
      quorumSetHash: Hash.fromXdrObject(wire.quorumSetHash)
    });
  }
}

export { ScpStatementConfirm };
//# sourceMappingURL=scp-statement-confirm.js.map
