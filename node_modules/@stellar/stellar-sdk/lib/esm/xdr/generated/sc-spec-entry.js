import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScSpecEntryKind } from './sc-spec-entry-kind.js';
import { ScSpecFunctionV0 } from './sc-spec-function-v0.js';
import { ScSpecUdtStructV0 } from './sc-spec-udt-struct-v0.js';
import { ScSpecUdtUnionV0 } from './sc-spec-udt-union-v0.js';
import { ScSpecUdtEnumV0 } from './sc-spec-udt-enum-v0.js';
import { ScSpecUdtErrorEnumV0 } from './sc-spec-udt-error-enum-v0.js';
import { ScSpecEventV0 } from './sc-spec-event-v0.js';

class ScSpecEntryBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ScSpecEntryBase) {
      throw new TypeError(
        "new xdr.ScSpecEntry(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScSpecEntry.scSpecEntryFunctionV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("ScSpecEntry", {
    switchOn: ScSpecEntryKind.schema,
    cases: [
      _case(
        "scSpecEntryFunctionV0",
        0,
        field("functionV0", ScSpecFunctionV0.schema)
      ),
      _case(
        "scSpecEntryUdtStructV0",
        1,
        field("udtStructV0", ScSpecUdtStructV0.schema)
      ),
      _case(
        "scSpecEntryUdtUnionV0",
        2,
        field("udtUnionV0", ScSpecUdtUnionV0.schema)
      ),
      _case(
        "scSpecEntryUdtEnumV0",
        3,
        field("udtEnumV0", ScSpecUdtEnumV0.schema)
      ),
      _case(
        "scSpecEntryUdtErrorEnumV0",
        4,
        field("udtErrorEnumV0", ScSpecUdtErrorEnumV0.schema)
      ),
      _case("scSpecEntryEventV0", 5, field("eventV0", ScSpecEventV0.schema))
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
          ScSpecFunctionV0.fromXdrObject(wire.functionV0)
        );
      case 1:
        return new ScSpecEntryUdtStructV0(
          ScSpecUdtStructV0.fromXdrObject(wire.udtStructV0)
        );
      case 2:
        return new ScSpecEntryUdtUnionV0(
          ScSpecUdtUnionV0.fromXdrObject(wire.udtUnionV0)
        );
      case 3:
        return new ScSpecEntryUdtEnumV0(
          ScSpecUdtEnumV0.fromXdrObject(wire.udtEnumV0)
        );
      case 4:
        return new ScSpecEntryUdtErrorEnumV0(
          ScSpecUdtErrorEnumV0.fromXdrObject(wire.udtErrorEnumV0)
        );
      case 5:
        return new ScSpecEntryEventV0(
          ScSpecEventV0.fromXdrObject(wire.eventV0)
        );
    }
    throw new XdrError(
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

export { ScSpecEntry, ScSpecEntryEventV0, ScSpecEntryFunctionV0, ScSpecEntryUdtEnumV0, ScSpecEntryUdtErrorEnumV0, ScSpecEntryUdtStructV0, ScSpecEntryUdtUnionV0 };
//# sourceMappingURL=sc-spec-entry.js.map
