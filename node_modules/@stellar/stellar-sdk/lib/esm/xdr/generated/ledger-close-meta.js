import { union, case as _case, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerCloseMetaV0 } from './ledger-close-meta-v0.js';
import { LedgerCloseMetaV1 } from './ledger-close-meta-v1.js';
import { LedgerCloseMetaV2 } from './ledger-close-meta-v2.js';

class LedgerCloseMetaBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerCloseMetaBase) {
      throw new TypeError(
        "new xdr.LedgerCloseMeta(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerCloseMeta.v0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "LedgerCloseMeta",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, field("v0", LedgerCloseMetaV0.schema)),
        _case("v1", 1, field("v1", LedgerCloseMetaV1.schema)),
        _case("v2", 2, field("v2", LedgerCloseMetaV2.schema))
      ],
      switchKey: "v"
    }
  );
  static v0(v0) {
    return new LedgerCloseMetaV0Arm(v0);
  }
  static v1(v1) {
    return new LedgerCloseMetaV1Arm(v1);
  }
  static v2(v2) {
    return new LedgerCloseMetaV2Arm(v2);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new LedgerCloseMetaV0Arm(
          LedgerCloseMetaV0.fromXdrObject(wire.v0)
        );
      case 1:
        return new LedgerCloseMetaV1Arm(
          LedgerCloseMetaV1.fromXdrObject(wire.v1)
        );
      case 2:
        return new LedgerCloseMetaV2Arm(
          LedgerCloseMetaV2.fromXdrObject(wire.v2)
        );
    }
    throw new XdrError(
      `LedgerCloseMeta: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerCloseMeta variant.
   * Use this instead of `instanceof LedgerCloseMeta`: the exported `LedgerCloseMeta` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerCloseMeta.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerCloseMetaBase;
  }
}
class LedgerCloseMetaV0Arm extends LedgerCloseMetaBase {
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
class LedgerCloseMetaV1Arm extends LedgerCloseMetaBase {
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
class LedgerCloseMetaV2Arm extends LedgerCloseMetaBase {
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
const LedgerCloseMeta = LedgerCloseMetaBase;

export { LedgerCloseMeta, LedgerCloseMetaV0Arm, LedgerCloseMetaV1Arm, LedgerCloseMetaV2Arm };
//# sourceMappingURL=ledger-close-meta.js.map
