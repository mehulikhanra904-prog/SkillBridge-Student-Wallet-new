import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { InvokeHostFunctionResultCode } from './invoke-host-function-result-code.js';
import { Hash } from './hash.js';

class InvokeHostFunctionResultBase extends XdrValue {
  constructor() {
    super();
    if (new.target === InvokeHostFunctionResultBase) {
      throw new TypeError(
        "new xdr.InvokeHostFunctionResult(...) is not supported: XDR unions are built from per-variant factories. Call xdr.InvokeHostFunctionResult.invokeHostFunctionSuccess(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "InvokeHostFunctionResult",
    {
      switchOn: InvokeHostFunctionResultCode.schema,
      cases: [
        _case("invokeHostFunctionSuccess", 0, field("success", Hash.schema)),
        _case("invokeHostFunctionMalformed", -1, _void()),
        _case("invokeHostFunctionTrapped", -2, _void()),
        _case("invokeHostFunctionResourceLimitExceeded", -3, _void()),
        _case("invokeHostFunctionEntryArchived", -4, _void()),
        _case("invokeHostFunctionInsufficientRefundableFee", -5, _void())
      ],
      switchKey: "code"
    }
  );
  static invokeHostFunctionSuccess(success) {
    return new InvokeHostFunctionResultSuccess(success);
  }
  static invokeHostFunctionMalformed() {
    return new InvokeHostFunctionResultMalformed();
  }
  static invokeHostFunctionTrapped() {
    return new InvokeHostFunctionResultTrapped();
  }
  static invokeHostFunctionResourceLimitExceeded() {
    return new InvokeHostFunctionResultResourceLimitExceeded();
  }
  static invokeHostFunctionEntryArchived() {
    return new InvokeHostFunctionResultEntryArchived();
  }
  static invokeHostFunctionInsufficientRefundableFee() {
    return new InvokeHostFunctionResultInsufficientRefundableFee();
  }
  static fromXdrObject(wire) {
    switch (wire.code) {
      case 0:
        return new InvokeHostFunctionResultSuccess(
          Hash.fromXdrObject(wire.success)
        );
      case -1:
        return new InvokeHostFunctionResultMalformed();
      case -2:
        return new InvokeHostFunctionResultTrapped();
      case -3:
        return new InvokeHostFunctionResultResourceLimitExceeded();
      case -4:
        return new InvokeHostFunctionResultEntryArchived();
      case -5:
        return new InvokeHostFunctionResultInsufficientRefundableFee();
    }
    throw new XdrError(
      `InvokeHostFunctionResult: unknown code ${wire.code}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete InvokeHostFunctionResult variant.
   * Use this instead of `instanceof InvokeHostFunctionResult`: the exported `InvokeHostFunctionResult` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `InvokeHostFunctionResult.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof InvokeHostFunctionResultBase;
  }
}
class InvokeHostFunctionResultSuccess extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionSuccess";
  success;
  constructor(success) {
    super();
    this.success = success instanceof Hash ? success : new Hash(success);
  }
  get value() {
    return this.success;
  }
  toXdrObject() {
    return { code: 0, success: this.success.toXdrObject() };
  }
}
class InvokeHostFunctionResultMalformed extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionMalformed";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -1 };
  }
}
class InvokeHostFunctionResultTrapped extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionTrapped";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -2 };
  }
}
class InvokeHostFunctionResultResourceLimitExceeded extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionResourceLimitExceeded";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -3 };
  }
}
class InvokeHostFunctionResultEntryArchived extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionEntryArchived";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -4 };
  }
}
class InvokeHostFunctionResultInsufficientRefundableFee extends InvokeHostFunctionResultBase {
  type = "invokeHostFunctionInsufficientRefundableFee";
  get value() {
    return null;
  }
  toXdrObject() {
    return { code: -5 };
  }
}
const InvokeHostFunctionResult = InvokeHostFunctionResultBase;

export { InvokeHostFunctionResult, InvokeHostFunctionResultEntryArchived, InvokeHostFunctionResultInsufficientRefundableFee, InvokeHostFunctionResultMalformed, InvokeHostFunctionResultResourceLimitExceeded, InvokeHostFunctionResultSuccess, InvokeHostFunctionResultTrapped };
//# sourceMappingURL=invoke-host-function-result.js.map
