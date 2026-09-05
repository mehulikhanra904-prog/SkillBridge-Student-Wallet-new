import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanAddressCredentials } from './soroban-address-credentials.js';
import { SorobanDelegateSignature } from './soroban-delegate-signature.js';

class SorobanAddressCredentialsWithDelegates extends XdrValue {
  addressCredentials;
  delegates;
  static schema = struct("SorobanAddressCredentialsWithDelegates", {
    addressCredentials: SorobanAddressCredentials.schema,
    delegates: array(SorobanDelegateSignature.schema, UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.addressCredentials = input.addressCredentials;
    this.delegates = input.delegates;
  }
  toXdrObject() {
    return {
      addressCredentials: this.addressCredentials.toXdrObject(),
      delegates: this.delegates.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new SorobanAddressCredentialsWithDelegates({
      addressCredentials: SorobanAddressCredentials.fromXdrObject(
        wire.addressCredentials
      ),
      delegates: wire.delegates.map(
        (w) => SorobanDelegateSignature.fromXdrObject(w)
      )
    });
  }
}

export { SorobanAddressCredentialsWithDelegates };
//# sourceMappingURL=soroban-address-credentials-with-delegates.js.map
