import { struct, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { ScpStatementPledges } from './scp-statement-pledges.js';

class ScpStatement extends XdrValue {
  nodeId;
  slotIndex;
  pledges;
  static schema = struct("ScpStatement", {
    nodeId: PublicKey.schema,
    slotIndex: uint64(),
    pledges: ScpStatementPledges.schema
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
      nodeId: PublicKey.fromXdrObject(wire.nodeId),
      slotIndex: wire.slotIndex,
      pledges: ScpStatementPledges.fromXdrObject(wire.pledges)
    });
  }
}

export { ScpStatement };
//# sourceMappingURL=scp-statement.js.map
