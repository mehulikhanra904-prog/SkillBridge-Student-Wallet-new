import { union, case as _case, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractEventV0 } from './contract-event-v0.js';

class ContractEventBodyBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ContractEventBodyBase) {
      throw new TypeError(
        "new xdr.ContractEventBody(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ContractEventBody.v0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ContractEventBody",
    {
      switchOn: int32(),
      cases: [_case("v0", 0, field("v0", ContractEventV0.schema))],
      switchKey: "v"
    }
  );
  static v0(v0) {
    return new ContractEventBodyV0(v0);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new ContractEventBodyV0(ContractEventV0.fromXdrObject(wire.v0));
    }
    throw new XdrError(
      `ContractEventBody: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ContractEventBody variant.
   * Use this instead of `instanceof ContractEventBody`: the exported `ContractEventBody` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ContractEventBody.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ContractEventBodyBase;
  }
}
class ContractEventBodyV0 extends ContractEventBodyBase {
  type = "v0";
  v0;
  constructor(v0) {
    super();
    this.v0 = v0;
  }
  get value() {
    return this.v0;
  }
  toXdrObject() {
    return { v: 0, v0: this.v0.toXdrObject() };
  }
}
const ContractEventBody = ContractEventBodyBase;

export { ContractEventBody, ContractEventBodyV0 };
//# sourceMappingURL=contract-event-body.js.map
