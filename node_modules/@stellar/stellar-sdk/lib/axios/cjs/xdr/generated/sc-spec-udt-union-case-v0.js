'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scSpecUdtUnionCaseV0Kind = require('./sc-spec-udt-union-case-v0-kind.js');
var scSpecUdtUnionCaseVoidV0 = require('./sc-spec-udt-union-case-void-v0.js');
var scSpecUdtUnionCaseTupleV0 = require('./sc-spec-udt-union-case-tuple-v0.js');

class ScSpecUdtUnionCaseV0Base extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScSpecUdtUnionCaseV0Base) {
      throw new TypeError(
        "new xdr.ScSpecUdtUnionCaseV0(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScSpecUdtUnionCaseV0.scSpecUdtUnionCaseVoidV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ScSpecUdtUnionCaseV0",
    {
      switchOn: scSpecUdtUnionCaseV0Kind.ScSpecUdtUnionCaseV0Kind.schema,
      cases: [
        jsXdr.case(
          "scSpecUdtUnionCaseVoidV0",
          0,
          jsXdr.field("voidCase", scSpecUdtUnionCaseVoidV0.ScSpecUdtUnionCaseVoidV0.schema)
        ),
        jsXdr.case(
          "scSpecUdtUnionCaseTupleV0",
          1,
          jsXdr.field("tupleCase", scSpecUdtUnionCaseTupleV0.ScSpecUdtUnionCaseTupleV0.schema)
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
          scSpecUdtUnionCaseVoidV0.ScSpecUdtUnionCaseVoidV0.fromXdrObject(wire.voidCase)
        );
      case 1:
        return new ScSpecUdtUnionCaseV0TupleV0(
          scSpecUdtUnionCaseTupleV0.ScSpecUdtUnionCaseTupleV0.fromXdrObject(wire.tupleCase)
        );
    }
    throw new jsXdr.XdrError(
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

exports.ScSpecUdtUnionCaseV0 = ScSpecUdtUnionCaseV0;
exports.ScSpecUdtUnionCaseV0TupleV0 = ScSpecUdtUnionCaseV0TupleV0;
exports.ScSpecUdtUnionCaseV0VoidV0 = ScSpecUdtUnionCaseV0VoidV0;
//# sourceMappingURL=sc-spec-udt-union-case-v0.js.map
