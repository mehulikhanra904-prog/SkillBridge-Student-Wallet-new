import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SignatureHint } from './signature-hint.js';
import { Signature } from './signature.js';

class DecoratedSignature extends XdrValue {
  hint;
  signature;
  static schema = struct(
    "DecoratedSignature",
    {
      hint: SignatureHint.schema,
      signature: Signature.schema
    }
  );
  constructor(input) {
    super();
    this.hint = input.hint instanceof SignatureHint ? input.hint : new SignatureHint(input.hint);
    this.signature = input.signature instanceof Signature ? input.signature : new Signature(input.signature);
  }
  toXdrObject() {
    return {
      hint: this.hint.toXdrObject(),
      signature: this.signature.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new DecoratedSignature({
      hint: SignatureHint.fromXdrObject(wire.hint),
      signature: Signature.fromXdrObject(wire.signature)
    });
  }
}

export { DecoratedSignature };
//# sourceMappingURL=decorated-signature.js.map
