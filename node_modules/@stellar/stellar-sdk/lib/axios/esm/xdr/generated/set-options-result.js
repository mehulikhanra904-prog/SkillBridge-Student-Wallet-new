import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SetOptionsResultCode } from './set-options-result-code.js';

class SetOptionsResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === SetOptionsResultBase) {
      throw new TypeError(
        "new xdr.SetOptionsResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SetOptionsResult.setOptionsSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "SetOptionsResult",
    {
      switchOn: SetOptionsResultCode.schema,
      cases: [
        _case("setOptionsSuccess", 0, _void()),
        _case("setOptionsLowReserve", -1, _void()),
        _case("setOptionsTooManySigners", -2, _void()),
        _case("setOptionsBadFlags", -3, _void()),
        _case("setOptionsInvalidInflation", -4, _void()),
        _case("setOptionsCantChange", -5, _void()),
        _case("setOptionsUnknownFlag", -6, _void()),
        _case("setOptionsThresholdOutOfRange", -7, _void()),
        _case("setOptionsBadSigner", -8, _void()),
        _case("setOptionsInvalidHomeDomain", -9, _void()),
        _case("setOptionsAuthRevocableRequired", -10, _void())
      ],
      switchKey: "code"
    }
  );
  static setOptionsSuccess() {
    return new SetOptionsResultSuccess();
  }
  static setOptionsLowReserve() {
    return new SetOptionsResultLowReserve();
  }
  static setOptionsTooManySigners() {
    return new SetOptionsResultTooManySigners();
  }
  static setOptionsBadFlags() {
    return new SetOptionsResultBadFlags();
  }
  static setOptionsInvalidInflation() {
    return new SetOptionsResultInvalidInflation();
  }
  static setOptionsCantChange() {
    return new SetOptionsResultCantChange();
  }
  static setOptionsUnknownFlag() {
    return new SetOptionsResultUnknownFlag();
  }
  static setOptionsThresholdOutOfRange() {
    return new SetOptionsResultThresholdOutOfRange();
  }
  static setOptionsBadSigner() {
    return new SetOptionsResultBadSigner();
  }
  static setOptionsInvalidHomeDomain() {
    return new SetOptionsResultInvalidHomeDomain();
  }
  static setOptionsAuthRevocableRequired() {
    return new SetOptionsResultAuthRevocableRequired();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new SetOptionsResultSuccess();
      case -1:
        return new SetOptionsResultLowReserve();
      case -2:
        return new SetOptionsResultTooManySigners();
      case -3:
        return new SetOptionsResultBadFlags();
      case -4:
        return new SetOptionsResultInvalidInflation();
      case -5:
        return new SetOptionsResultCantChange();
      case -6:
        return new SetOptionsResultUnknownFlag();
      case -7:
        return new SetOptionsResultThresholdOutOfRange();
      case -8:
        return new SetOptionsResultBadSigner();
      case -9:
        return new SetOptionsResultInvalidHomeDomain();
      case -10:
        return new SetOptionsResultAuthRevocableRequired();
    }
    throw new XdrError(
      `SetOptionsResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SetOptionsResult variant.
   * Use this instead of `instanceof SetOptionsResult`: the exported `SetOptionsResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SetOptionsResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SetOptionsResultBase;
  }
}
class SetOptionsResultSuccess extends SetOptionsResultBase {
  type = "setOptionsSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class SetOptionsResultLowReserve extends SetOptionsResultBase {
  type = "setOptionsLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class SetOptionsResultTooManySigners extends SetOptionsResultBase {
  type = "setOptionsTooManySigners";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class SetOptionsResultBadFlags extends SetOptionsResultBase {
  type = "setOptionsBadFlags";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class SetOptionsResultInvalidInflation extends SetOptionsResultBase {
  type = "setOptionsInvalidInflation";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class SetOptionsResultCantChange extends SetOptionsResultBase {
  type = "setOptionsCantChange";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
class SetOptionsResultUnknownFlag extends SetOptionsResultBase {
  type = "setOptionsUnknownFlag";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -6 };
  }
}
class SetOptionsResultThresholdOutOfRange extends SetOptionsResultBase {
  type = "setOptionsThresholdOutOfRange";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -7 };
  }
}
class SetOptionsResultBadSigner extends SetOptionsResultBase {
  type = "setOptionsBadSigner";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -8 };
  }
}
class SetOptionsResultInvalidHomeDomain extends SetOptionsResultBase {
  type = "setOptionsInvalidHomeDomain";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -9 };
  }
}
class SetOptionsResultAuthRevocableRequired extends SetOptionsResultBase {
  type = "setOptionsAuthRevocableRequired";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -10 };
  }
}
const SetOptionsResult = SetOptionsResultBase;

export { SetOptionsResult, SetOptionsResultAuthRevocableRequired, SetOptionsResultBadFlags, SetOptionsResultBadSigner, SetOptionsResultCantChange, SetOptionsResultInvalidHomeDomain, SetOptionsResultInvalidInflation, SetOptionsResultLowReserve, SetOptionsResultSuccess, SetOptionsResultThresholdOutOfRange, SetOptionsResultTooManySigners, SetOptionsResultUnknownFlag };
//# sourceMappingURL=set-options-result.js.map
