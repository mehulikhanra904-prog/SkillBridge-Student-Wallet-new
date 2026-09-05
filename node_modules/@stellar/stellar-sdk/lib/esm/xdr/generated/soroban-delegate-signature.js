import { struct, array, lazy, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScAddress } from './sc-address.js';
import { ScVal } from './sc-val.js';

class SorobanDelegateSignature extends XdrValue {
  address;
  signature;
  nestedDelegates;
  static schema = struct(
    "SorobanDelegateSignature",
    {
      address: ScAddress.schema,
      signature: ScVal.schema,
      nestedDelegates: array(
        lazy(() => SorobanDelegateSignature.schema),
        UNBOUNDED_MAX_LENGTH
      )
    }
  );
  constructor(input) {
    super();
    this.address = input.address;
    this.signature = input.signature;
    this.nestedDelegates = input.nestedDelegates;
  }
  toXdrObject() {
    return {
      address: this.address.toXdrObject(),
      signature: this.signature.toXdrObject(),
      nestedDelegates: this.nestedDelegates.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new SorobanDelegateSignature({
      address: ScAddress.fromXdrObject(wire.address),
      signature: ScVal.fromXdrObject(wire.signature),
      nestedDelegates: wire.nestedDelegates.map(
        (w) => SorobanDelegateSignature.fromXdrObject(w)
      )
    });
  }
}

export { SorobanDelegateSignature };
//# sourceMappingURL=soroban-delegate-signature.js.map
