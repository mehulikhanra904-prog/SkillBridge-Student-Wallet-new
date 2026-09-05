import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractCodeEntryV1 } from './contract-code-entry-v1.js';

class ContractCodeEntryExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ContractCodeEntryExtBase) {
      throw new TypeError(
        "new xdr.ContractCodeEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ContractCodeEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ContractCodeEntryExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v1", 1, field("v1", ContractCodeEntryV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new ContractCodeEntryExtV0();
  }
  static v1(v1) {
    return new ContractCodeEntryExtV1(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new ContractCodeEntryExtV0();
      case 1:
        return new ContractCodeEntryExtV1(
          ContractCodeEntryV1.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `ContractCodeEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ContractCodeEntryExt variant.
   * Use this instead of `instanceof ContractCodeEntryExt`: the exported `ContractCodeEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ContractCodeEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ContractCodeEntryExtBase;
  }
}
class ContractCodeEntryExtV0 extends ContractCodeEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class ContractCodeEntryExtV1 extends ContractCodeEntryExtBase {
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
const ContractCodeEntryExt = ContractCodeEntryExtBase;

export { ContractCodeEntryExt, ContractCodeEntryExtV0, ContractCodeEntryExtV1 };
//# sourceMappingURL=contract-code-entry-ext.js.map
