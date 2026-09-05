import { union, case as _case, void as _void, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';

class ExtensionPointBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ExtensionPointBase) {
      throw new TypeError(
        "new xdr.ExtensionPoint(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ExtensionPoint.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ExtensionPoint",
    {
      switchOn: int32(),
      cases: [_case("v0", 0, _void())],
      switchKey: "v"
    }
  );
  static v0() {
    return new ExtensionPointV0();
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new ExtensionPointV0();
    }
    throw new XdrError(
      `ExtensionPoint: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ExtensionPoint variant.
   * Use this instead of `instanceof ExtensionPoint`: the exported `ExtensionPoint` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ExtensionPoint.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ExtensionPointBase;
  }
}
class ExtensionPointV0 extends ExtensionPointBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
const ExtensionPoint = ExtensionPointBase;

export { ExtensionPoint, ExtensionPointV0 };
//# sourceMappingURL=extension-point.js.map
