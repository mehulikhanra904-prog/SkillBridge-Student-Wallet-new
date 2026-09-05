import { union, case as _case, void as _void, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PreconditionType } from './precondition-type.js';
import { TimeBounds } from './time-bounds.js';
import { PreconditionsV2 } from './preconditions-v2.js';

class PreconditionsBase extends XdrValue {
  constructor() {
    super();
    if (new.target === PreconditionsBase) {
      throw new TypeError(
        "new xdr.Preconditions(...) is not supported: XDR unions are built from per-variant factories. Call xdr.Preconditions.precondNone() (or another arm factory) instead."
      );
    }
  }
  static schema = union("Preconditions", {
    switchOn: PreconditionType.schema,
    cases: [
      _case("precondNone", 0, _void()),
      _case("precondTime", 1, field("timeBounds", TimeBounds.schema)),
      _case("precondV2", 2, field("v2", PreconditionsV2.schema))
    ]
  });
  static precondNone() {
    return new PreconditionsNone();
  }
  static precondTime(timeBounds) {
    return new PreconditionsTime(timeBounds);
  }
  static precondV2(v2) {
    return new PreconditionsV2Arm(v2);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new PreconditionsNone();
      case 1:
        return new PreconditionsTime(TimeBounds.fromXdrObject(wire.timeBounds));
      case 2:
        return new PreconditionsV2Arm(PreconditionsV2.fromXdrObject(wire.v2));
    }
    throw new XdrError(
      `Preconditions: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete Preconditions variant.
   * Use this instead of `instanceof Preconditions`: the exported `Preconditions` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `Preconditions.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof PreconditionsBase;
  }
}
class PreconditionsNone extends PreconditionsBase {
  type = "precondNone";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class PreconditionsTime extends PreconditionsBase {
  type = "precondTime";
  timeBounds;
  constructor(timeBounds) {
    super();
    this.timeBounds = timeBounds;
  }
  get value() {
    return this.timeBounds;
  }
  toXdrObject() {
    return { type: 1, timeBounds: this.timeBounds.toXdrObject() };
  }
}
class PreconditionsV2Arm extends PreconditionsBase {
  type = "precondV2";
  v2;
  constructor(v2) {
    super();
    this.v2 = v2;
  }
  get value() {
    return this.v2;
  }
  toXdrObject() {
    return { type: 2, v2: this.v2.toXdrObject() };
  }
}
const Preconditions = PreconditionsBase;

export { Preconditions, PreconditionsNone, PreconditionsTime, PreconditionsV2Arm };
//# sourceMappingURL=preconditions.js.map
