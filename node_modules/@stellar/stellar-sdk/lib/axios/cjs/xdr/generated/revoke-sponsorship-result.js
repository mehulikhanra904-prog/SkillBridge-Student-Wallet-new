'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var revokeSponsorshipResultCode = require('./revoke-sponsorship-result-code.js');

class RevokeSponsorshipResultBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === RevokeSponsorshipResultBase) {
      throw new TypeError(
        "new xdr.RevokeSponsorshipResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.RevokeSponsorshipResult.revokeSponsorshipSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "RevokeSponsorshipResult",
    {
      switchOn: revokeSponsorshipResultCode.RevokeSponsorshipResultCode.schema,
      cases: [
        jsXdr.case("revokeSponsorshipSuccess", 0, jsXdr.void()),
        jsXdr.case("revokeSponsorshipDoesNotExist", -1, jsXdr.void()),
        jsXdr.case("revokeSponsorshipNotSponsor", -2, jsXdr.void()),
        jsXdr.case("revokeSponsorshipLowReserve", -3, jsXdr.void()),
        jsXdr.case("revokeSponsorshipOnlyTransferable", -4, jsXdr.void()),
        jsXdr.case("revokeSponsorshipMalformed", -5, jsXdr.void())
      ],
      switchKey: "code"
    }
  );
  static revokeSponsorshipSuccess() {
    return new RevokeSponsorshipResultSuccess();
  }
  static revokeSponsorshipDoesNotExist() {
    return new RevokeSponsorshipResultDoesNotExist();
  }
  static revokeSponsorshipNotSponsor() {
    return new RevokeSponsorshipResultNotSponsor();
  }
  static revokeSponsorshipLowReserve() {
    return new RevokeSponsorshipResultLowReserve();
  }
  static revokeSponsorshipOnlyTransferable() {
    return new RevokeSponsorshipResultOnlyTransferable();
  }
  static revokeSponsorshipMalformed() {
    return new RevokeSponsorshipResultMalformed();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new RevokeSponsorshipResultSuccess();
      case -1:
        return new RevokeSponsorshipResultDoesNotExist();
      case -2:
        return new RevokeSponsorshipResultNotSponsor();
      case -3:
        return new RevokeSponsorshipResultLowReserve();
      case -4:
        return new RevokeSponsorshipResultOnlyTransferable();
      case -5:
        return new RevokeSponsorshipResultMalformed();
    }
    throw new jsXdr.XdrError(
      `RevokeSponsorshipResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete RevokeSponsorshipResult variant.
   * Use this instead of `instanceof RevokeSponsorshipResult`: the exported `RevokeSponsorshipResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `RevokeSponsorshipResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof RevokeSponsorshipResultBase;
  }
}
class RevokeSponsorshipResultSuccess extends RevokeSponsorshipResultBase {
  type = "revokeSponsorshipSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class RevokeSponsorshipResultDoesNotExist extends RevokeSponsorshipResultBase {
  type = "revokeSponsorshipDoesNotExist";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class RevokeSponsorshipResultNotSponsor extends RevokeSponsorshipResultBase {
  type = "revokeSponsorshipNotSponsor";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class RevokeSponsorshipResultLowReserve extends RevokeSponsorshipResultBase {
  type = "revokeSponsorshipLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class RevokeSponsorshipResultOnlyTransferable extends RevokeSponsorshipResultBase {
  type = "revokeSponsorshipOnlyTransferable";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class RevokeSponsorshipResultMalformed extends RevokeSponsorshipResultBase {
  type = "revokeSponsorshipMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
const RevokeSponsorshipResult = RevokeSponsorshipResultBase;

exports.RevokeSponsorshipResult = RevokeSponsorshipResult;
exports.RevokeSponsorshipResultDoesNotExist = RevokeSponsorshipResultDoesNotExist;
exports.RevokeSponsorshipResultLowReserve = RevokeSponsorshipResultLowReserve;
exports.RevokeSponsorshipResultMalformed = RevokeSponsorshipResultMalformed;
exports.RevokeSponsorshipResultNotSponsor = RevokeSponsorshipResultNotSponsor;
exports.RevokeSponsorshipResultOnlyTransferable = RevokeSponsorshipResultOnlyTransferable;
exports.RevokeSponsorshipResultSuccess = RevokeSponsorshipResultSuccess;
//# sourceMappingURL=revoke-sponsorship-result.js.map
