import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanTransactionData } from './soroban-transaction-data.js';

class TransactionExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TransactionExtBase) {
      throw new TypeError(
        "new xdr.TransactionExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TransactionExt",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case(
          "sorobanData",
          1,
          field("sorobanData", SorobanTransactionData.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new TransactionExtV0();
  }
  static sorobanData(sorobanData) {
    return new TransactionExtSorobanData(sorobanData);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TransactionExtV0();
      case 1:
        return new TransactionExtSorobanData(
          SorobanTransactionData.fromXdrObject(wire.sorobanData)
        );
    }
    throw new XdrError(
      `TransactionExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionExt variant.
   * Use this instead of `instanceof TransactionExt`: the exported `TransactionExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionExtBase;
  }
}
class TransactionExtV0 extends TransactionExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class TransactionExtSorobanData extends TransactionExtBase {
  type = "sorobanData";
  sorobanData;
  constructor(sorobanData) {
    super();
    this.sorobanData = sorobanData;
  }
  get value() {
    return this.sorobanData;
  }
  toXdrObject() {
    return { v: 1, sorobanData: this.sorobanData.toXdrObject() };
  }
}
const TransactionExt = TransactionExtBase;

export { TransactionExt, TransactionExtSorobanData, TransactionExtV0 };
//# sourceMappingURL=transaction-ext.js.map
