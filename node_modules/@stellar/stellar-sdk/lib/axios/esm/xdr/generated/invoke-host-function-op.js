import { struct, array, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { HostFunction } from './host-function.js';
import { SorobanAuthorizationEntry } from './soroban-authorization-entry.js';

class InvokeHostFunctionOp extends XdrValue {
  hostFunction;
  auth;
  static schema = struct(
    "InvokeHostFunctionOp",
    {
      hostFunction: HostFunction.schema,
      auth: array(SorobanAuthorizationEntry.schema, UNBOUNDED_MAX_LENGTH)
    }
  );
  constructor(input) {
    super();
    this.hostFunction = input.hostFunction;
    this.auth = input.auth;
  }
  toXdrObject() {
    return {
      hostFunction: this.hostFunction.toXdrObject(),
      auth: this.auth.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new InvokeHostFunctionOp({
      hostFunction: HostFunction.fromXdrObject(wire.hostFunction),
      auth: wire.auth.map((w) => SorobanAuthorizationEntry.fromXdrObject(w))
    });
  }
}

export { InvokeHostFunctionOp };
//# sourceMappingURL=invoke-host-function-op.js.map
