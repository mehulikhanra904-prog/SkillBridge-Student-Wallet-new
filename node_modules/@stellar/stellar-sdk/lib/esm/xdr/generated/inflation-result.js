import { union, case as _case, field, array, UNBOUNDED_MAX_LENGTH, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { InflationResultCode } from './inflation-result-code.js';
import { InflationPayout } from './inflation-payout.js';

class InflationResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === InflationResultBase) {
      throw new TypeError(
        "new xdr.InflationResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.InflationResult.inflationSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "InflationResult",
    {
      switchOn: InflationResultCode.schema,
      cases: [
        _case(
          "inflationSuccess",
          0,
          field("payouts", array(InflationPayout.schema, UNBOUNDED_MAX_LENGTH))
        ),
        _case("inflationNotTime", -1, _void())
      ],
      switchKey: "code"
    }
  );
  static inflationSuccess(payouts) {
    return new InflationResultSuccess(payouts);
  }
  static inflationNotTime() {
    return new InflationResultNotTime();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new InflationResultSuccess(
          wire.payouts.map((w) => InflationPayout.fromXdrObject(w))
        );
      case -1:
        return new InflationResultNotTime();
    }
    throw new XdrError(
      `InflationResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete InflationResult variant.
   * Use this instead of `instanceof InflationResult`: the exported `InflationResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `InflationResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof InflationResultBase;
  }
}
class InflationResultSuccess extends InflationResultBase {
  type = "inflationSuccess";
  payouts;
  constructor(payouts) {
    super();
    this.payouts = payouts;
  }
  get value() {
    return this.payouts;
  }
  toXdrObject() {
    return { code: 0, payouts: this.payouts.map((v) => v.toXdrObject()) };
  }
}
class InflationResultNotTime extends InflationResultBase {
  type = "inflationNotTime";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
const InflationResult = InflationResultBase;

export { InflationResult, InflationResultNotTime, InflationResultSuccess };
//# sourceMappingURL=inflation-result.js.map
