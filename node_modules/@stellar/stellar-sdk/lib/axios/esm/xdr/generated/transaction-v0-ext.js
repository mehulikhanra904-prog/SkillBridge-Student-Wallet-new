import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class TransactionV0ExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TransactionV0ExtBase) {
      throw new TypeError(
        "new xdr.TransactionV0Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionV0Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TransactionV0Ext",
    {
      switchOn: int32(),
      cases: [_case("v0", 0, _void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new TransactionV0ExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TransactionV0ExtV0();
    }
    throw new XdrError(
      `TransactionV0Ext: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionV0Ext variant.
   * Use this instead of `instanceof TransactionV0Ext`: the exported `TransactionV0Ext` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionV0Ext.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionV0ExtBase;
  }
}
class TransactionV0ExtV0 extends TransactionV0ExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const TransactionV0Ext = TransactionV0ExtBase;

export { TransactionV0Ext, TransactionV0ExtV0 };
//# sourceMappingURL=transaction-v0-ext.js.map
