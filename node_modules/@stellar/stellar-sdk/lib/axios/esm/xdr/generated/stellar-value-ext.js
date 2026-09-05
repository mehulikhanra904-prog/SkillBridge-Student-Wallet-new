import { union, case as _case, void as _void, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { StellarValueType } from './stellar-value-type.js';
import { LedgerCloseValueSignature } from './ledger-close-value-signature.js';
import { StellarValueProposedValue } from './stellar-value-proposed-value.js';

class StellarValueExtBase extends XdrValue {
  constructor() {
    super();
    if (new.target === StellarValueExtBase) {
      throw new TypeError(
        "new xdr.StellarValueExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.StellarValueExt.stellarValueBasic() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "StellarValueExt",
    {
      switchOn: StellarValueType.schema,
      cases: [
        _case("stellarValueBasic", 0, _void()),
        _case(
          "stellarValueSigned",
          1,
          field("lcValueSignature", LedgerCloseValueSignature.schema)
        ),
        _case(
          "stellarValueEmptyTxSet",
          2,
          field("proposedValue", StellarValueProposedValue.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static stellarValueBasic() {
    return new StellarValueExtBasic();
  }
  static stellarValueSigned(lcValueSignature) {
    return new StellarValueExtSigned(lcValueSignature);
  }
  static stellarValueEmptyTxSet(proposedValue) {
    return new StellarValueExtEmptyTxSet(proposedValue);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new StellarValueExtBasic();
      case 1:
        return new StellarValueExtSigned(
          LedgerCloseValueSignature.fromXdrObject(wire.lcValueSignature)
        );
      case 2:
        return new StellarValueExtEmptyTxSet(
          StellarValueProposedValue.fromXdrObject(wire.proposedValue)
        );
    }
    throw new XdrError(
      `StellarValueExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete StellarValueExt variant.
   * Use this instead of `instanceof StellarValueExt`: the exported `StellarValueExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `StellarValueExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof StellarValueExtBase;
  }
}
class StellarValueExtBasic extends StellarValueExtBase {
  type = "stellarValueBasic";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class StellarValueExtSigned extends StellarValueExtBase {
  type = "stellarValueSigned";
  lcValueSignature;
  constructor(lcValueSignature) {
    super();
    this.lcValueSignature = lcValueSignature;
  }
  get value() {
    return this.lcValueSignature;
  }
  toXdrObject() {
    return { v: 1, lcValueSignature: this.lcValueSignature.toXdrObject() };
  }
}
class StellarValueExtEmptyTxSet extends StellarValueExtBase {
  type = "stellarValueEmptyTxSet";
  proposedValue;
  constructor(proposedValue) {
    super();
    this.proposedValue = proposedValue;
  }
  get value() {
    return this.proposedValue;
  }
  toXdrObject() {
    return { v: 2, proposedValue: this.proposedValue.toXdrObject() };
  }
}
const StellarValueExt = StellarValueExtBase;

export { StellarValueExt, StellarValueExtBasic, StellarValueExtEmptyTxSet, StellarValueExtSigned };
//# sourceMappingURL=stellar-value-ext.js.map
