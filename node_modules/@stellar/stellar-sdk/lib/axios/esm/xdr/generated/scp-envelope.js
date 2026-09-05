import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScpStatement } from './scp-statement.js';
import { Signature } from './signature.js';

class ScpEnvelope extends XdrValue {
  statement;
  signature;
  static schema = struct("ScpEnvelope", {
    statement: ScpStatement.schema,
    signature: Signature.schema
  });
  constructor(input) {
    super();
    this.statement = input.statement;
    this.signature = input.signature instanceof Signature ? input.signature : new Signature(input.signature);
  }
  toXdrObject() {
    return {
      statement: this.statement.toXdrObject(),
      signature: this.signature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new ScpEnvelope({
      statement: ScpStatement.fromXdrObject(wire.statement),
      signature: Signature.fromXdrObject(wire.signature)
    });
  }
}

export { ScpEnvelope };
//# sourceMappingURL=scp-envelope.js.map
