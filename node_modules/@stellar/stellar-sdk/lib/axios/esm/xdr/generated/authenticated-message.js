import { union, case as _case, field, uint32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { AuthenticatedMessageV0 } from './authenticated-message-v0.js';

class AuthenticatedMessageBase extends XdrValue {
  constructor() {
    super();
    if (new.target === AuthenticatedMessageBase) {
      throw new TypeError(
        "new xdr.AuthenticatedMessage(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AuthenticatedMessage.v0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "AuthenticatedMessage",
    {
      switchOn: uint32(),
      cases: [_case("v0", 0, field("v0", AuthenticatedMessageV0.schema))],
      switchKey: "v"
    }
  );
  static v0(v0) {
    return new AuthenticatedMessageV0Arm(v0);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new AuthenticatedMessageV0Arm(
          AuthenticatedMessageV0.fromXdrObject(wire.v0)
        );
    }
    throw new XdrError(
      `AuthenticatedMessage: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AuthenticatedMessage variant.
   * Use this instead of `instanceof AuthenticatedMessage`: the exported `AuthenticatedMessage` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AuthenticatedMessage.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AuthenticatedMessageBase;
  }
}
class AuthenticatedMessageV0Arm extends AuthenticatedMessageBase {
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
const AuthenticatedMessage = AuthenticatedMessageBase;

export { AuthenticatedMessage, AuthenticatedMessageV0Arm };
//# sourceMappingURL=authenticated-message.js.map
