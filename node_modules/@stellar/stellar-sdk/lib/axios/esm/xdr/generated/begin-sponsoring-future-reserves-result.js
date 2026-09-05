import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { BeginSponsoringFutureReservesResultCode } from './begin-sponsoring-future-reserves-result-code.js';

class BeginSponsoringFutureReservesResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === BeginSponsoringFutureReservesResultBase) {
      throw new TypeError(
        "new xdr.BeginSponsoringFutureReservesResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.BeginSponsoringFutureReservesResult.beginSponsoringFutureReservesSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union("BeginSponsoringFutureReservesResult", {
    switchOn: BeginSponsoringFutureReservesResultCode.schema,
    cases: [
      _case("beginSponsoringFutureReservesSuccess", 0, _void()),
      _case("beginSponsoringFutureReservesMalformed", -1, _void()),
      _case("beginSponsoringFutureReservesAlreadySponsored", -2, _void()),
      _case("beginSponsoringFutureReservesRecursive", -3, _void())
    ],
    switchKey: "code"
  });
  static beginSponsoringFutureReservesSuccess() {
    return new BeginSponsoringFutureReservesResultSuccess();
  }
  static beginSponsoringFutureReservesMalformed() {
    return new BeginSponsoringFutureReservesResultMalformed();
  }
  static beginSponsoringFutureReservesAlreadySponsored() {
    return new BeginSponsoringFutureReservesResultAlreadySponsored();
  }
  static beginSponsoringFutureReservesRecursive() {
    return new BeginSponsoringFutureReservesResultRecursive();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new BeginSponsoringFutureReservesResultSuccess();
      case -1:
        return new BeginSponsoringFutureReservesResultMalformed();
      case -2:
        return new BeginSponsoringFutureReservesResultAlreadySponsored();
      case -3:
        return new BeginSponsoringFutureReservesResultRecursive();
    }
    throw new XdrError(
      `BeginSponsoringFutureReservesResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete BeginSponsoringFutureReservesResult variant.
   * Use this instead of `instanceof BeginSponsoringFutureReservesResult`: the exported `BeginSponsoringFutureReservesResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `BeginSponsoringFutureReservesResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof BeginSponsoringFutureReservesResultBase;
  }
}
class BeginSponsoringFutureReservesResultSuccess extends BeginSponsoringFutureReservesResultBase {
  type = "beginSponsoringFutureReservesSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class BeginSponsoringFutureReservesResultMalformed extends BeginSponsoringFutureReservesResultBase {
  type = "beginSponsoringFutureReservesMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class BeginSponsoringFutureReservesResultAlreadySponsored extends BeginSponsoringFutureReservesResultBase {
  type = "beginSponsoringFutureReservesAlreadySponsored";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class BeginSponsoringFutureReservesResultRecursive extends BeginSponsoringFutureReservesResultBase {
  type = "beginSponsoringFutureReservesRecursive";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
const BeginSponsoringFutureReservesResult = BeginSponsoringFutureReservesResultBase;

export { BeginSponsoringFutureReservesResult, BeginSponsoringFutureReservesResultAlreadySponsored, BeginSponsoringFutureReservesResultMalformed, BeginSponsoringFutureReservesResultRecursive, BeginSponsoringFutureReservesResultSuccess };
//# sourceMappingURL=begin-sponsoring-future-reserves-result.js.map
