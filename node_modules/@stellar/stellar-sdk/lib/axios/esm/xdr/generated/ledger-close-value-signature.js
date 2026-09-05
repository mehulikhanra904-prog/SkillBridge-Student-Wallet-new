import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PublicKey } from './public-key.js';
import { Signature } from './signature.js';

class LedgerCloseValueSignature extends XdrValue {
  nodeId;
  signature;
  static schema = struct(
    "LedgerCloseValueSignature",
    {
      nodeId: PublicKey.schema,
      signature: Signature.schema
    }
  );
  constructor(input) {
    super();
    this.nodeId = input.nodeId;
    this.signature = input.signature instanceof Signature ? input.signature : new Signature(input.signature);
  }
  toXdrObject() {
    return {
      nodeId: this.nodeId.toXdrObject(),
      signature: this.signature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new LedgerCloseValueSignature({
      nodeId: PublicKey.fromXdrObject(wire.nodeId),
      signature: Signature.fromXdrObject(wire.signature)
    });
  }
}

export { LedgerCloseValueSignature };
//# sourceMappingURL=ledger-close-value-signature.js.map
