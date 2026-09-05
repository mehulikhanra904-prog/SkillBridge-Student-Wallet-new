'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var clawbackResultCode = require('./clawback-result-code.js');

class ClawbackResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ClawbackResultBase) {
      throw new TypeError(
        "new xdr.ClawbackResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClawbackResult.clawbackSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ClawbackResult",
    {
      switchOn: clawbackResultCode.ClawbackResultCode.schema,
      cases: [
        jsXdr.case("clawbackSuccess", 0, jsXdr.void()),
        jsXdr.case("clawbackMalformed", -1, jsXdr.void()),
        jsXdr.case("clawbackNotClawbackEnabled", -2, jsXdr.void()),
        jsXdr.case("clawbackNoTrust", -3, jsXdr.void()),
        jsXdr.case("clawbackUnderfunded", -4, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static clawbackSuccess() {
    return new ClawbackResultSuccess();
  }
  static clawbackMalformed() {
    return new ClawbackResultMalformed();
  }
  static clawbackNotClawbackEnabled() {
    return new ClawbackResultNotClawbackEnabled();
  }
  static clawbackNoTrust() {
    return new ClawbackResultNoTrust();
  }
  static clawbackUnderfunded() {
    return new ClawbackResultUnderfunded();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ClawbackResultSuccess();
      case -1:
        return new ClawbackResultMalformed();
      case -2:
        return new ClawbackResultNotClawbackEnabled();
      case -3:
        return new ClawbackResultNoTrust();
      case -4:
        return new ClawbackResultUnderfunded();
    }
    throw new jsXdr.XdrError(
      `ClawbackResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ClawbackResult variant.
   * Use this instead of `instanceof ClawbackResult`: the exported `ClawbackResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ClawbackResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClawbackResultBase;
  }
}
class ClawbackResultSuccess extends ClawbackResultBase {
  type = "clawbackSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class ClawbackResultMalformed extends ClawbackResultBase {
  type = "clawbackMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ClawbackResultNotClawbackEnabled extends ClawbackResultBase {
  type = "clawbackNotClawbackEnabled";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ClawbackResultNoTrust extends ClawbackResultBase {
  type = "clawbackNoTrust";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class ClawbackResultUnderfunded extends ClawbackResultBase {
  type = "clawbackUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
const ClawbackResult = ClawbackResultBase;

exports.ClawbackResult = ClawbackResult;
exports.ClawbackResultMalformed = ClawbackResultMalformed;
exports.ClawbackResultNoTrust = ClawbackResultNoTrust;
exports.ClawbackResultNotClawbackEnabled = ClawbackResultNotClawbackEnabled;
exports.ClawbackResultSuccess = ClawbackResultSuccess;
exports.ClawbackResultUnderfunded = ClawbackResultUnderfunded;
//# sourceMappingURL=clawback-result.js.map
