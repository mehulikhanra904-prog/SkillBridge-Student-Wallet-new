import { union, case as _case, void as _void, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TrustLineEntryExtensionV2 } from './trust-line-entry-extension-v2.js';

class TrustLineEntryV1ExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TrustLineEntryV1ExtBase) {
      throw new TypeError(
        "new xdr.TrustLineEntryV1Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TrustLineEntryV1Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TrustLineEntryV1Ext",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, _void()),
        _case("v2", 2, field("v2", TrustLineEntryExtensionV2.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new TrustLineEntryV1ExtV0();
  }
  static v2(v2) {
    return new TrustLineEntryV1ExtV2(v2);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TrustLineEntryV1ExtV0();
      case 2:
        return new TrustLineEntryV1ExtV2(
          TrustLineEntryExtensionV2.fromXdrObject(wire.v2)
        );
    }
    throw new XdrError(
      `TrustLineEntryV1Ext: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TrustLineEntryV1Ext variant.
   * Use this instead of `instanceof TrustLineEntryV1Ext`: the exported `TrustLineEntryV1Ext` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TrustLineEntryV1Ext.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TrustLineEntryV1ExtBase;
  }
}
class TrustLineEntryV1ExtV0 extends TrustLineEntryV1ExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class TrustLineEntryV1ExtV2 extends TrustLineEntryV1ExtBase {
  type = "v2";
  v2;
  constructor(v2) {
    super();
    this.v2 = v2;
  }
  get value() {
    return this.v2;
  }
  toXdrObject() {
    return { v: 2, v2: this.v2.toXdrObject() };
  }
}
const TrustLineEntryV1Ext = TrustLineEntryV1ExtBase;

export { TrustLineEntryV1Ext, TrustLineEntryV1ExtV0, TrustLineEntryV1ExtV2 };
//# sourceMappingURL=trust-line-entry-v1-ext.js.map
