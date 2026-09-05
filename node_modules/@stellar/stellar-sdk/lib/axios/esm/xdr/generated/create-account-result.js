import { union, case as _case, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { CreateAccountResultCode } from './create-account-result-code.js';

class CreateAccountResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === CreateAccountResultBase) {
      throw new TypeError(
        "new xdr.CreateAccountResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.CreateAccountResult.createAccountSuccess() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "CreateAccountResult",
    {
      switchOn: CreateAccountResultCode.schema,
      cases: [
        _case("createAccountSuccess", 0, _void()),
        _case("createAccountMalformed", -1, _void()),
        _case("createAccountUnderfunded", -2, _void()),
        _case("createAccountLowReserve", -3, _void()),
        _case("createAccountAlreadyExist", -4, _void())
      ],
      switchKey: "code"
    }
  );
  static createAccountSuccess() {
    return new CreateAccountResultSuccess();
  }
  static createAccountMalformed() {
    return new CreateAccountResultMalformed();
  }
  static createAccountUnderfunded() {
    return new CreateAccountResultUnderfunded();
  }
  static createAccountLowReserve() {
    return new CreateAccountResultLowReserve();
  }
  static createAccountAlreadyExist() {
    return new CreateAccountResultAlreadyExist();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new CreateAccountResultSuccess();
      case -1:
        return new CreateAccountResultMalformed();
      case -2:
        return new CreateAccountResultUnderfunded();
      case -3:
        return new CreateAccountResultLowReserve();
      case -4:
        return new CreateAccountResultAlreadyExist();
    }
    throw new XdrError(
      `CreateAccountResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete CreateAccountResult variant.
   * Use this instead of `instanceof CreateAccountResult`: the exported `CreateAccountResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `CreateAccountResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof CreateAccountResultBase;
  }
}
class CreateAccountResultSuccess extends CreateAccountResultBase {
  type = "createAccountSuccess";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: 0 };
  }
}
class CreateAccountResultMalformed extends CreateAccountResultBase {
  type = "createAccountMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class CreateAccountResultUnderfunded extends CreateAccountResultBase {
  type = "createAccountUnderfunded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class CreateAccountResultLowReserve extends CreateAccountResultBase {
  type = "createAccountLowReserve";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class CreateAccountResultAlreadyExist extends CreateAccountResultBase {
  type = "createAccountAlreadyExist";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
const CreateAccountResult = CreateAccountResultBase;

export { CreateAccountResult, CreateAccountResultAlreadyExist, CreateAccountResultLowReserve, CreateAccountResultMalformed, CreateAccountResultSuccess, CreateAccountResultUnderfunded };
//# sourceMappingURL=create-account-result.js.map
