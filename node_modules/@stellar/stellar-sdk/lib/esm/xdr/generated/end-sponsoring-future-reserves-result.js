import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { EndSponsoringFutureReservesResultCode } from './end-sponsoring-future-reserves-result-code.js';

class EndSponsoringFutureReservesResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === EndSponsoringFutureReservesResultBase) {
      throw new TypeError(
        "new xdr.EndSponsoringFutureReservesResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.EndSponsoringFutureReservesResult.endSponsoringFutureReservesSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union("EndSponsoringFutureReservesResult", {
    switchOn: EndSponsoringFutureReservesResultCode.schema,
    cases: [
      _case("endSponsoringFutureReservesSuccess", 0, _void()),
      _case("endSponsoringFutureReservesNotSponsored", -1, _void())
    ],
    switchKey: "code"
  });
  static endSponsoringFutureReservesSuccess() {
    return new EndSponsoringFutureReservesResultSuccess();
  }
  static endSponsoringFutureReservesNotSponsored() {
    return new EndSponsoringFutureReservesResultNotSponsored();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new EndSponsoringFutureReservesResultSuccess();
      case -1:
        return new EndSponsoringFutureReservesResultNotSponsored();
    }
    throw new XdrError(
      `EndSponsoringFutureReservesResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete EndSponsoringFutureReservesResult variant.
   * Use this instead of `instanceof EndSponsoringFutureReservesResult`: the exported `EndSponsoringFutureReservesResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `EndSponsoringFutureReservesResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof EndSponsoringFutureReservesResultBase;
  }
}
class EndSponsoringFutureReservesResultSuccess extends EndSponsoringFutureReservesResultBase {
  type = "endSponsoringFutureReservesSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class EndSponsoringFutureReservesResultNotSponsored extends EndSponsoringFutureReservesResultBase {
  type = "endSponsoringFutureReservesNotSponsored";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
const EndSponsoringFutureReservesResult = EndSponsoringFutureReservesResultBase;

export { EndSponsoringFutureReservesResult, EndSponsoringFutureReservesResultNotSponsored, EndSponsoringFutureReservesResultSuccess };
//# sourceMappingURL=end-sponsoring-future-reserves-result.js.map
