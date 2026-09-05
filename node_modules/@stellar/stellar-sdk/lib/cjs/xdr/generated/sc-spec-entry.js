'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var scSpecEntryKind = require('./sc-spec-entry-kind.js');
var scSpecFunctionV0 = require('./sc-spec-function-v0.js');
var scSpecUdtStructV0 = require('./sc-spec-udt-struct-v0.js');
var scSpecUdtUnionV0 = require('./sc-spec-udt-union-v0.js');
var scSpecUdtEnumV0 = require('./sc-spec-udt-enum-v0.js');
var scSpecUdtErrorEnumV0 = require('./sc-spec-udt-error-enum-v0.js');
var scSpecEventV0 = require('./sc-spec-event-v0.js');

class ScSpecEntryBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ScSpecEntryBase) {
      throw new TypeError(
        "new xdr.ScSpecEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScSpecEntry.scSpecEntryFunctionV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("ScSpecEntry", {
    switchOn: scSpecEntryKind.ScSpecEntryKind.schema,
    cases: [
      jsXdr.case(
        "scSpecEntryFunctionV0",
        0,
        jsXdr.field("functionV0", scSpecFunctionV0.ScSpecFunctionV0.schema)
      ),
      jsXdr.case(
        "scSpecEntryUdtStructV0",
        1,
        jsXdr.field("udtStructV0", scSpecUdtStructV0.ScSpecUdtStructV0.schema)
      ),
      jsXdr.case(
        "scSpecEntryUdtUnionV0",
        2,
        jsXdr.field("udtUnionV0", scSpecUdtUnionV0.ScSpecUdtUnionV0.schema)
      ),
      jsXdr.case(
        "scSpecEntryUdtEnumV0",
        3,
        jsXdr.field("udtEnumV0", scSpecUdtEnumV0.ScSpecUdtEnumV0.schema)
      ),
      jsXdr.case(
        "scSpecEntryUdtErrorEnumV0",
        4,
        jsXdr.field("udtErrorEnumV0", scSpecUdtErrorEnumV0.ScSpecUdtErrorEnumV0.schema)
      ),
      jsXdr.case("scSpecEntryEventV0", 5, jsXdr.field("eventV0", scSpecEventV0.ScSpecEventV0.schema))
    ],
    switchKey: "kind"
  });
  static scSpecEntryFunctionV0(functionV0) {
    return new ScSpecEntryFunctionV0(functionV0);
  }
  static scSpecEntryUdtStructV0(udtStructV0) {
    return new ScSpecEntryUdtStructV0(udtStructV0);
  }
  static scSpecEntryUdtUnionV0(udtUnionV0) {
    return new ScSpecEntryUdtUnionV0(udtUnionV0);
  }
  static scSpecEntryUdtEnumV0(udtEnumV0) {
    return new ScSpecEntryUdtEnumV0(udtEnumV0);
  }
  static scSpecEntryUdtErrorEnumV0(udtErrorEnumV0) {
    return new ScSpecEntryUdtErrorEnumV0(udtErrorEnumV0);
  }
  static scSpecEntryEventV0(eventV0) {
    return new ScSpecEntryEventV0(eventV0);
  }
  static fromXdrObject(wire) {
    switch (wire.kind) {
      case 0:
        return new ScSpecEntryFunctionV0(
          scSpecFunctionV0.ScSpecFunctionV0.fromXdrObject(wire.functionV0)
        );
      case 1:
        return new ScSpecEntryUdtStructV0(
          scSpecUdtStructV0.ScSpecUdtStructV0.fromXdrObject(wire.udtStructV0)
        );
      case 2:
        return new ScSpecEntryUdtUnionV0(
          scSpecUdtUnionV0.ScSpecUdtUnionV0.fromXdrObject(wire.udtUnionV0)
        );
      case 3:
        return new ScSpecEntryUdtEnumV0(
          scSpecUdtEnumV0.ScSpecUdtEnumV0.fromXdrObject(wire.udtEnumV0)
        );
      case 4:
        return new ScSpecEntryUdtErrorEnumV0(
          scSpecUdtErrorEnumV0.ScSpecUdtErrorEnumV0.fromXdrObject(wire.udtErrorEnumV0)
        );
      case 5:
        return new ScSpecEntryEventV0(
          scSpecEventV0.ScSpecEventV0.fromXdrObject(wire.eventV0)
        );
    }
    throw new jsXdr.XdrError(
      `ScSpecEntry: unknown kind ${wire.kind}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScSpecEntry variant.
   * Use this instead of `instanceof ScSpecEntry`: the exported `ScSpecEntry` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScSpecEntry.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScSpecEntryBase;
  }
}
class ScSpecEntryFunctionV0 extends ScSpecEntryBase {
  type = "scSpecEntryFunctionV0";
  functionV0;
  constructor(functionV0) {
    super();
    this.functionV0 = functionV0;
  }
  get value() {
    return this.functionV0;
  }
  toXdrObject() {
    return { kind: 0, functionV0: this.functionV0.toXdrObject() };
  }
}
class ScSpecEntryUdtStructV0 extends ScSpecEntryBase {
  type = "scSpecEntryUdtStructV0";
  udtStructV0;
  constructor(udtStructV0) {
    super();
    this.udtStructV0 = udtStructV0;
  }
  get value() {
    return this.udtStructV0;
  }
  toXdrObject() {
    return { kind: 1, udtStructV0: this.udtStructV0.toXdrObject() };
  }
}
class ScSpecEntryUdtUnionV0 extends ScSpecEntryBase {
  type = "scSpecEntryUdtUnionV0";
  udtUnionV0;
  constructor(udtUnionV0) {
    super();
    this.udtUnionV0 = udtUnionV0;
  }
  get value() {
    return this.udtUnionV0;
  }
  toXdrObject() {
    return { kind: 2, udtUnionV0: this.udtUnionV0.toXdrObject() };
  }
}
class ScSpecEntryUdtEnumV0 extends ScSpecEntryBase {
  type = "scSpecEntryUdtEnumV0";
  udtEnumV0;
  constructor(udtEnumV0) {
    super();
    this.udtEnumV0 = udtEnumV0;
  }
  get value() {
    return this.udtEnumV0;
  }
  toXdrObject() {
    return { kind: 3, udtEnumV0: this.udtEnumV0.toXdrObject() };
  }
}
class ScSpecEntryUdtErrorEnumV0 extends ScSpecEntryBase {
  type = "scSpecEntryUdtErrorEnumV0";
  udtErrorEnumV0;
  constructor(udtErrorEnumV0) {
    super();
    this.udtErrorEnumV0 = udtErrorEnumV0;
  }
  get value() {
    return this.udtErrorEnumV0;
  }
  toXdrObject() {
    return { kind: 4, udtErrorEnumV0: this.udtErrorEnumV0.toXdrObject() };
  }
}
class ScSpecEntryEventV0 extends ScSpecEntryBase {
  type = "scSpecEntryEventV0";
  eventV0;
  constructor(eventV0) {
    super();
    this.eventV0 = eventV0;
  }
  get value() {
    return this.eventV0;
  }
  toXdrObject() {
    return { kind: 5, eventV0: this.eventV0.toXdrObject() };
  }
}
const ScSpecEntry = ScSpecEntryBase;

exports.ScSpecEntry = ScSpecEntry;
exports.ScSpecEntryEventV0 = ScSpecEntryEventV0;
exports.ScSpecEntryFunctionV0 = ScSpecEntryFunctionV0;
exports.ScSpecEntryUdtEnumV0 = ScSpecEntryUdtEnumV0;
exports.ScSpecEntryUdtErrorEnumV0 = ScSpecEntryUdtErrorEnumV0;
exports.ScSpecEntryUdtStructV0 = ScSpecEntryUdtStructV0;
exports.ScSpecEntryUdtUnionV0 = ScSpecEntryUdtUnionV0;
//# sourceMappingURL=sc-spec-entry.js.map
