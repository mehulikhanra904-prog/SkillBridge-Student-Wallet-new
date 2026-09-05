import { union, case as _case, field, uint32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ScErrorType } from './sc-error-type.js';
import { ScErrorCode } from './sc-error-code.js';

class ScErrorBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ScErrorBase) {
      throw new TypeError(
        "new xdr.ScError(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ScError.sceContract(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("ScError", {
    switchOn: ScErrorType.schema,
    cases: [
      _case("sceContract", 0, field("contractCode", uint32())),
      _case("sceWasmVm", 1, field("code", ScErrorCode.schema)),
      _case("sceContext", 2, field("code", ScErrorCode.schema)),
      _case("sceStorage", 3, field("code", ScErrorCode.schema)),
      _case("sceObject", 4, field("code", ScErrorCode.schema)),
      _case("sceCrypto", 5, field("code", ScErrorCode.schema)),
      _case("sceEvents", 6, field("code", ScErrorCode.schema)),
      _case("sceBudget", 7, field("code", ScErrorCode.schema)),
      _case("sceValue", 8, field("code", ScErrorCode.schema)),
      _case("sceAuth", 9, field("code", ScErrorCode.schema))
    ]
  });
  static sceContract(contractCode) {
    return new ScErrorContract(contractCode);
  }
  static sceWasmVm(code) {
    return new ScErrorWasmVm(code);
  }
  static sceContext(code) {
    return new ScErrorContext(code);
  }
  static sceStorage(code) {
    return new ScErrorStorage(code);
  }
  static sceObject(code) {
    return new ScErrorObject(code);
  }
  static sceCrypto(code) {
    return new ScErrorCrypto(code);
  }
  static sceEvents(code) {
    return new ScErrorEvents(code);
  }
  static sceBudget(code) {
    return new ScErrorBudget(code);
  }
  static sceValue(code) {
    return new ScErrorValue(code);
  }
  static sceAuth(code) {
    return new ScErrorAuth(code);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ScErrorContract(wire.contractCode);
      case 1:
        return new ScErrorWasmVm(ScErrorCode.fromXdrObject(wire.code));
      case 2:
        return new ScErrorContext(ScErrorCode.fromXdrObject(wire.code));
      case 3:
        return new ScErrorStorage(ScErrorCode.fromXdrObject(wire.code));
      case 4:
        return new ScErrorObject(ScErrorCode.fromXdrObject(wire.code));
      case 5:
        return new ScErrorCrypto(ScErrorCode.fromXdrObject(wire.code));
      case 6:
        return new ScErrorEvents(ScErrorCode.fromXdrObject(wire.code));
      case 7:
        return new ScErrorBudget(ScErrorCode.fromXdrObject(wire.code));
      case 8:
        return new ScErrorValue(ScErrorCode.fromXdrObject(wire.code));
      case 9:
        return new ScErrorAuth(ScErrorCode.fromXdrObject(wire.code));
    }
    throw new XdrError(
      `ScError: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ScError variant.
   * Use this instead of `instanceof ScError`: the exported `ScError` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ScError.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ScErrorBase;
  }
}
class ScErrorContract extends ScErrorBase {
  type = "sceContract";
  contractCode;
  constructor(contractCode) {
    super();
    this.contractCode = contractCode;
  }
  get value() {
    return this.contractCode;
  }
  toXdrObject() {
    return { type: 0, contractCode: this.contractCode };
  }
}
class ScErrorWasmVm extends ScErrorBase {
  type = "sceWasmVm";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 1, code: this.code.toXdrObject() };
  }
}
class ScErrorContext extends ScErrorBase {
  type = "sceContext";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 2, code: this.code.toXdrObject() };
  }
}
class ScErrorStorage extends ScErrorBase {
  type = "sceStorage";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 3, code: this.code.toXdrObject() };
  }
}
class ScErrorObject extends ScErrorBase {
  type = "sceObject";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 4, code: this.code.toXdrObject() };
  }
}
class ScErrorCrypto extends ScErrorBase {
  type = "sceCrypto";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 5, code: this.code.toXdrObject() };
  }
}
class ScErrorEvents extends ScErrorBase {
  type = "sceEvents";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 6, code: this.code.toXdrObject() };
  }
}
class ScErrorBudget extends ScErrorBase {
  type = "sceBudget";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 7, code: this.code.toXdrObject() };
  }
}
class ScErrorValue extends ScErrorBase {
  type = "sceValue";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 8, code: this.code.toXdrObject() };
  }
}
class ScErrorAuth extends ScErrorBase {
  type = "sceAuth";
  code;
  constructor(code) {
    super();
    this.code = code;
  }
  get value() {
    return this.code;
  }
  toXdrObject() {
    return { type: 9, code: this.code.toXdrObject() };
  }
}
const ScError = ScErrorBase;

export { ScError, ScErrorAuth, ScErrorBudget, ScErrorContext, ScErrorContract, ScErrorCrypto, ScErrorEvents, ScErrorObject, ScErrorStorage, ScErrorValue, ScErrorWasmVm };
//# sourceMappingURL=sc-error.js.map
