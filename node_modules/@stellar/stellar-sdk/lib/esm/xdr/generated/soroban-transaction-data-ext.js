import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanResourcesExtV0 } from './soroban-resources-ext-v0.js';

class SorobanTransactionDataExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === SorobanTransactionDataExtBase) {
      throw new TypeError(
        "new xdr.SorobanTransactionDataExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SorobanTransactionDataExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "SorobanTransactionDataExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case(
          "resourceExt",
          1,
          field("resourceExt", SorobanResourcesExtV0.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new SorobanTransactionDataExtV0();
  }
  static resourceExt(resourceExt) {
    return new SorobanTransactionDataExtResourceExt(resourceExt);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new SorobanTransactionDataExtV0();
      case 1:
        return new SorobanTransactionDataExtResourceExt(
          SorobanResourcesExtV0.fromXdrObject(wire.resourceExt)
        );
    }
    throw new XdrError(
      `SorobanTransactionDataExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SorobanTransactionDataExt variant.
   * Use this instead of `instanceof SorobanTransactionDataExt`: the exported `SorobanTransactionDataExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SorobanTransactionDataExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SorobanTransactionDataExtBase;
  }
}
class SorobanTransactionDataExtV0 extends SorobanTransactionDataExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class SorobanTransactionDataExtResourceExt extends SorobanTransactionDataExtBase {
  type = "resourceExt";
  resourceExt;
  constructor(resourceExt) {
    super();
    this.resourceExt = resourceExt;
  }
  get value() {
    return this.resourceExt;
  }
  toXdrObject() {
    return { v: 1, resourceExt: this.resourceExt.toXdrObject() };
  }
}
const SorobanTransactionDataExt = SorobanTransactionDataExtBase;

export { SorobanTransactionDataExt, SorobanTransactionDataExtResourceExt, SorobanTransactionDataExtV0 };
//# sourceMappingURL=soroban-transaction-data-ext.js.map
