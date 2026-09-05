import { union, case as _case, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { PersistedScpStateV0 } from './persisted-scp-state-v0.js';
import { PersistedScpStateV1 } from './persisted-scp-state-v1.js';

class PersistedScpStateBase extends XdrValue {
  constructor() {
    super();
    if (new.target === PersistedScpStateBase) {
      throw new TypeError(
        "new xdr.PersistedScpState(...) is not supported: XDR unions are built from per-variant factories. Call xdr.PersistedScpState.v0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "PersistedScpState",
    {
      switchOn: int32(),
      cases: [
        _case("v0", 0, field("v0", PersistedScpStateV0.schema)),
        _case("v1", 1, field("v1", PersistedScpStateV1.schema))
      ],
      switchKey: "v"
    }
  );
  static v0(v0) {
    return new PersistedScpStateV0Arm(v0);
  }
  static v1(v1) {
    return new PersistedScpStateV1Arm(v1);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new PersistedScpStateV0Arm(
          PersistedScpStateV0.fromXdrObject(wire.v0)
        );
      case 1:
        return new PersistedScpStateV1Arm(
          PersistedScpStateV1.fromXdrObject(wire.v1)
        );
    }
    throw new XdrError(
      `PersistedScpState: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete PersistedScpState variant.
   * Use this instead of `instanceof PersistedScpState`: the exported `PersistedScpState` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `PersistedScpState.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof PersistedScpStateBase;
  }
}
class PersistedScpStateV0Arm extends PersistedScpStateBase {
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
class PersistedScpStateV1Arm extends PersistedScpStateBase {
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
const PersistedScpState = PersistedScpStateBase;

export { PersistedScpState, PersistedScpStateV0Arm, PersistedScpStateV1Arm };
//# sourceMappingURL=persisted-scp-state.js.map
