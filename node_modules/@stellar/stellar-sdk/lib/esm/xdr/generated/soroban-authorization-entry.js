import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanCredentials } from './soroban-credentials.js';
import { SorobanAuthorizedInvocation } from './soroban-authorized-invocation.js';

class SorobanAuthorizationEntry extends XdrValue {
  credentials;
  rootInvocation;
  static schema = struct(
    "SorobanAuthorizationEntry",
    {
      credentials: SorobanCredentials.schema,
      rootInvocation: SorobanAuthorizedInvocation.schema
    }
  );
  constructor(input) {
    super();
    this.credentials = input.credentials;
    this.rootInvocation = input.rootInvocation;
  }
  toXdrObject() {
    return {
      credentials: this.credentials.toXdrObject(),
      rootInvocation: this.rootInvocation.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new SorobanAuthorizationEntry({
      credentials: SorobanCredentials.fromXdrObject(wire.credentials),
      rootInvocation: SorobanAuthorizedInvocation.fromXdrObject(
        wire.rootInvocation
      )
    });
  }
}

export { SorobanAuthorizationEntry };
//# sourceMappingURL=soroban-authorization-entry.js.map
