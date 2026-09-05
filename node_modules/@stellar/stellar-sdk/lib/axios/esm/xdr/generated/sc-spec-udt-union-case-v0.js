import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScSpecUdtUnionCaseV0Kind } from './sc-spec-udt-union-case-v0-kind.js';
import { ScSpecUdtUnionCaseVoidV0 } from './sc-spec-udt-union-case-void-v0.js';
import { ScSpecUdtUnionCaseTupleV0 } from './sc-spec-udt-union-case-tuple-v0.js';

class ScSpecUdtUnionCaseV0Base extends XdrValue {
  constructor() {
    super();
    if (new.target === ScSpecUdtUnionCaseV0Base) {
      throw new TypeError(
        "new xdr.ScSpecUdtUnionCaseV0(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScSpecUdtUnionCaseV0.scSpecUdtUnionCaseVoidV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ScSpecUdtUnionCaseV0",
    {
      switchOn: ScSpecUdtUnionCaseV0Kind.schema,
      cases: [
        _case(
          "scSpecUdtUnionCaseVoidV0",
          0,
          field("voidCase", ScSpecUdtUnionCaseVoidV0.schema)
        ),
        _case(
          "scSpecUdtUnionCaseTupleV0",
          1,
          field("tupleCase", ScSpecUdtUnionCaseTupleV0.schema)
        )
      ],
      switchKey: "kind"
    }
  );
  static scSpecUdtUnionCaseVoidV0(voidCase) {
    return new ScSpecUdtUnionCaseV0VoidV0(voidCase);
  }
  static scSpecUdtUnionCaseTupleV0(tupleCase) {
    return new ScSpecUdtUnionCaseV0TupleV0(tupleCase);
  }
  static fromXdrObject(wire) {
    switch (wire.kind) {
      case 0:
        return new ScSpecUdtUnionCaseV0VoidV0(
          ScSpecUdtUnionCaseVoidV0.fromXdrObject(wire.voidCase)
        );
      case 1:
        return new ScSpecUdtUnionCaseV0TupleV0(
          ScSpecUdtUnionCaseTupleV0.fromXdrObject(wire.tupleCase)
        );
    }
    throw new XdrError(
      `ScSpecUdtUnionCaseV0: unknown kind ${wire.kind}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScSpecUdtUnionCaseV0 variant.
   * Use this instead of `instanceof ScSpecUdtUnionCaseV0`: the exported `ScSpecUdtUnionCaseV0` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScSpecUdtUnionCaseV0.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScSpecUdtUnionCaseV0Base;
  }
}
class ScSpecUdtUnionCaseV0VoidV0 extends ScSpecUdtUnionCaseV0Base {
  type = "scSpecUdtUnionCaseVoidV0";
  voidCase;
  constructor(voidCase) {
    super();
    this.voidCase = voidCase;
  }
  get value() {
    return this.voidCase;
  }
  toXdrObject() {
    return { kind: 0, voidCase: this.voidCase.toXdrObject() };
  }
}
class ScSpecUdtUnionCaseV0TupleV0 extends ScSpecUdtUnionCaseV0Base {
  type = "scSpecUdtUnionCaseTupleV0";
  tupleCase;
  constructor(tupleCase) {
    super();
    this.tupleCase = tupleCase;
  }
  get value() {
    return this.tupleCase;
  }
  toXdrObject() {
    return { kind: 1, tupleCase: this.tupleCase.toXdrObject() };
  }
}
const ScSpecUdtUnionCaseV0 = ScSpecUdtUnionCaseV0Base;

export { ScSpecUdtUnionCaseV0, ScSpecUdtUnionCaseV0TupleV0, ScSpecUdtUnionCaseV0VoidV0 };
//# sourceMappingURL=sc-spec-udt-union-case-v0.js.map
