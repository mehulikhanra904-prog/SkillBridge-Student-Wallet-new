import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanTransactionMetaExtV1 } from './soroban-transaction-meta-ext-v1.js';

class SorobanTransactionMetaExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === SorobanTransactionMetaExtBase) {
      throw new TypeError(
        "new xdr.SorobanTransactionMetaExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SorobanTransactionMetaExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "SorobanTransactionMetaExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v1", 1, field("v1", SorobanTransactionMetaExtV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new SorobanTransactionMetaExtV0();
  }
  static v1(v1) {
    return new SorobanTransactionMetaExtV1Arm(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new SorobanTransactionMetaExtV0();
      case 1:
        return new SorobanTransactionMetaExtV1Arm(
          SorobanTransactionMetaExtV1.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `SorobanTransactionMetaExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SorobanTransactionMetaExt variant.
   * Use this instead of `instanceof SorobanTransactionMetaExt`: the exported `SorobanTransactionMetaExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SorobanTransactionMetaExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SorobanTransactionMetaExtBase;
  }
}
class SorobanTransactionMetaExtV0 extends SorobanTransactionMetaExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class SorobanTransactionMetaExtV1Arm extends SorobanTransactionMetaExtBase {
  type = "v1";
  v1;
  constructor(v1) {
    super();
    this.v1 = v1;
  }
  get value() {
    return this.v1;
  }
  toXdrObject() {
    return { v: 1, v1: this.v1.toXdrObject() };
  }
}
const SorobanTransactionMetaExt = SorobanTransactionMetaExtBase;

export { SorobanTransactionMetaExt, SorobanTransactionMetaExtV0, SorobanTransactionMetaExtV1Arm };
//# sourceMappingURL=soroban-transaction-meta-ext.js.map
