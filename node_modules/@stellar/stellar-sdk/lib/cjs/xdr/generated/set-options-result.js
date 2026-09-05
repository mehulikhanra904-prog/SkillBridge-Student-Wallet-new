'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var setOptionsResultCode = require('./set-options-result-code.js');

class SetOptionsResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === SetOptionsResultBase) {
      throw new TypeError(
        "new xdr.SetOptionsResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SetOptionsResult.setOptionsSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "SetOptionsResult",
    {
      switchOn: setOptionsResultCode.SetOptionsResultCode.schema,
      cases: [
        jsXdr.case("setOptionsSuccess", 0, jsXdr.void()),
        jsXdr.case("setOptionsLowReserve", -1, jsXdr.void()),
        jsXdr.case("setOptionsTooManySigners", -2, jsXdr.void()),
        jsXdr.case("setOptionsBadFlags", -3, jsXdr.void()),
        jsXdr.case("setOptionsInvalidInflation", -4, jsXdr.void()),
        jsXdr.case("setOptionsCantChange", -5, jsXdr.void()),
        jsXdr.case("setOptionsUnknownFlag", -6, jsXdr.void()),
        jsXdr.case("setOptionsThresholdOutOfRange", -7, jsXdr.void()),
        jsXdr.case("setOptionsBadSigner", -8, jsXdr.void()),
        jsXdr.case("setOptionsInvalidHomeDomain", -9, jsXdr.void()),
        jsXdr.case("setOptionsAuthRevocableRequired", -10, jsXdr.void())
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
    throw new jsXdr.XdrError(
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

exports.SetOptionsResult = SetOptionsResult;
exports.SetOptionsResultAuthRevocableRequired = SetOptionsResultAuthRevocableRequired;
exports.SetOptionsResultBadFlags = SetOptionsResultBadFlags;
exports.SetOptionsResultBadSigner = SetOptionsResultBadSigner;
exports.SetOptionsResultCantChange = SetOptionsResultCantChange;
exports.SetOptionsResultInvalidHomeDomain = SetOptionsResultInvalidHomeDomain;
exports.SetOptionsResultInvalidInflation = SetOptionsResultInvalidInflation;
exports.SetOptionsResultLowReserve = SetOptionsResultLowReserve;
exports.SetOptionsResultSuccess = SetOptionsResultSuccess;
exports.SetOptionsResultThresholdOutOfRange = SetOptionsResultThresholdOutOfRange;
exports.SetOptionsResultTooManySigners = SetOptionsResultTooManySigners;
exports.SetOptionsResultUnknownFlag = SetOptionsResultUnknownFlag;
//# sourceMappingURL=set-options-result.js.map
