import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class TransactionHistoryResultEntryExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TransactionHistoryResultEntryExtBase) {
      throw new TypeError(
        "new xdr.TransactionHistoryResultEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionHistoryResultEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TransactionHistoryResultEntryExt",
    {
      switchOn: int32(),
      cases: [_case("v0", 0, _void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new TransactionHistoryResultEntryExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TransactionHistoryResultEntryExtV0();
    }
    throw new XdrError(
      `TransactionHistoryResultEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionHistoryResultEntryExt variant.
   * Use this instead of `instanceof TransactionHistoryResultEntryExt`: the exported `TransactionHistoryResultEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionHistoryResultEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionHistoryResultEntryExtBase;
  }
}
class TransactionHistoryResultEntryExtV0 extends TransactionHistoryResultEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const TransactionHistoryResultEntryExt = TransactionHistoryResultEntryExtBase;

export { TransactionHistoryResultEntryExt, TransactionHistoryResultEntryExtV0 };
//# sourceMappingURL=transaction-history-result-entry-ext.js.map
