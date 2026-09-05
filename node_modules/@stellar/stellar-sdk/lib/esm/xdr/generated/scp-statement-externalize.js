import { struct, uint32 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScpBallot } from './scp-ballot.js';
import { Hash } from './hash.js';

class ScpStatementExternalize extends XdrValue {
  commit;
  nH;
  commitQuorumSetHash;
  static schema = struct(
    "ScpStatementExternalize",
    {
      commit: ScpBallot.schema,
      nH: uint32(),
      commitQuorumSetHash: Hash.schema
    }
  );
  constructor(input) {
    super();
    this.commit = input.commit;
    this.nH = input.nH;
    this.commitQuorumSetHash = input.commitQuorumSetHash instanceof Hash ? input.commitQuorumSetHash : new Hash(input.commitQuorumSetHash);
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
      commit: ScpBallot.fromXdrObject(wire.commit),
      nH: wire.nH,
      commitQuorumSetHash: Hash.fromXdrObject(wire.commitQuorumSetHash)
    });
  }
}

export { ScpStatementExternalize };
//# sourceMappingURL=scp-statement-externalize.js.map
