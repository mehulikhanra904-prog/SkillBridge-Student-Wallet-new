import { struct, array, lazy, UNBOUNDED_MAX_LENGTH } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanAuthorizedFunction } from './soroban-authorized-function.js';

class SorobanAuthorizedInvocation extends XdrValue {
  function;
  subInvocations;
  static schema = struct(
    "SorobanAuthorizedInvocation",
    {
      function: SorobanAuthorizedFunction.schema,
      subInvocations: array(
        lazy(() => SorobanAuthorizedInvocation.schema),
        UNBOUNDED_MAX_LENGTH
      )
    }
  );
  constructor(input) {
    super();
    this.function = input.function;
    this.subInvocations = input.subInvocations;
  }
  toXdrObject() {
    return {
      function: this.function.toXdrObject(),
      subInvocations: this.subInvocations.map((v) => v.toXdrObject())
    };
  }
  static fromXdrObject(wire) {
    return new SorobanAuthorizedInvocation({
      function: SorobanAuthorizedFunction.fromXdrObject(wire.function),
      subInvocations: wire.subInvocations.map(
        (w) => SorobanAuthorizedInvocation.fromXdrObject(w)
      )
    });
  }
}

export { SorobanAuthorizedInvocation };
//# sourceMappingURL=soroban-authorized-invocation.js.map
