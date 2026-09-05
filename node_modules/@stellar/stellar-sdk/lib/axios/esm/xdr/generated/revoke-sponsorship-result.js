import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { RevokeSponsorshipResultCode } from './revoke-sponsorship-result-code.js';

class RevokeSponsorshipResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === RevokeSponsorshipResultBase) {
      throw new TypeError(
        "new xdr.RevokeSponsorshipResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.RevokeSponsorshipResult.revokeSponsorshipSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "RevokeSponsorshipResult",
    {
      switchOn: RevokeSponsorshipResultCode.schema,
      cases: [
        _case("revokeSponsorshipSuccess", 0, _void()),
        _case("revokeSponsorshipDoesNotExist", -1, _void()),
        _case("revokeSponsorshipNotSponsor", -2, _void()),
        _case("revokeSponsorshipLowReserve", -3, _void()),
        _case("revokeSponsorshipOnlyTransferable", -4, _void()),
        _case("revokeSponsorshipMalformed", -5, _void())
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
    throw new XdrError(
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

export { RevokeSponsorshipResult, RevokeSponsorshipResultDoesNotExist, RevokeSponsorshipResultLowReserve, RevokeSponsorshipResultMalformed, RevokeSponsorshipResultNotSponsor, RevokeSponsorshipResultOnlyTransferable, RevokeSponsorshipResultSuccess };
//# sourceMappingURL=revoke-sponsorship-result.js.map
