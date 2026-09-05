import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class DataEntryExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === DataEntryExtBase) {
      throw new TypeError(
        "new xdr.DataEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.DataEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union("DataEntryExt", {
    switchOn: int32(),
    cases: [_case("v0", 0, _void())],
    switchKey: "v"
  });
  static v0() {
    return new DataEntryExtV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new DataEntryExtV0();
    }
    throw new XdrError(`DataEntryExt: unknown v ${wire.v}`);
  }
  /**
   * Type guard narrowing an unknown value to a concrete DataEntryExt variant.
   * Use this instead of `instanceof DataEntryExt`: the exported `DataEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `DataEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof DataEntryExtBase;
  }
}
class DataEntryExtV0 extends DataEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const DataEntryExt = DataEntryExtBase;

export { DataEntryExt, DataEntryExtV0 };
//# sourceMappingURL=data-entry-ext.js.map
