import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ManageDataResultCode } from './manage-data-result-code.js';

class ManageDataResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ManageDataResultBase) {
      throw new TypeError(
        "new xdr.ManageDataResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ManageDataResult.manageDataSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ManageDataResult",
    {
      switchOn: ManageDataResultCode.schema,
      cases: [
        _case("manageDataSuccess", 0, _void()),
        _case("manageDataNotSupportedYet", -1, _void()),
        _case("manageDataNameNotFound", -2, _void()),
        _case("manageDataLowReserve", -3, _void()),
        _case("manageDataInvalidName", -4, _void())
      ],
      switchKey: "code"
    }
  );
  static manageDataSuccess() {
    return new ManageDataResultSuccess();
  }
  static manageDataNotSupportedYet() {
    return new ManageDataResultNotSupportedYet();
  }
  static manageDataNameNotFound() {
    return new ManageDataResultNameNotFound();
  }
  static manageDataLowReserve() {
    return new ManageDataResultLowReserve();
  }
  static manageDataInvalidName() {
    return new ManageDataResultInvalidName();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new ManageDataResultSuccess();
      case -1:
        return new ManageDataResultNotSupportedYet();
      case -2:
        return new ManageDataResultNameNotFound();
      case -3:
        return new ManageDataResultLowReserve();
      case -4:
        return new ManageDataResultInvalidName();
    }
    throw new XdrError(
      `ManageDataResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ManageDataResult variant.
   * Use this instead of `instanceof ManageDataResult`: the exported `ManageDataResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ManageDataResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ManageDataResultBase;
  }
}
class ManageDataResultSuccess extends ManageDataResultBase {
  type = "manageDataSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class ManageDataResultNotSupportedYet extends ManageDataResultBase {
  type = "manageDataNotSupportedYet";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class ManageDataResultNameNotFound extends ManageDataResultBase {
  type = "manageDataNameNotFound";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class ManageDataResultLowReserve extends ManageDataResultBase {
  type = "manageDataLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class ManageDataResultInvalidName extends ManageDataResultBase {
  type = "manageDataInvalidName";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
const ManageDataResult = ManageDataResultBase;

export { ManageDataResult, ManageDataResultInvalidName, ManageDataResultLowReserve, ManageDataResultNameNotFound, ManageDataResultNotSupportedYet, ManageDataResultSuccess };
//# sourceMappingURL=manage-data-result.js.map
