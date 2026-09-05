import { struct } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { xdrString, XdrString } from '../values/xdr-string.js';
import { ErrorCode } from './error-code.js';

class Error extends XdrValue {
  code;
  msg;
  static schema = struct("Error", {
    code: ErrorCode.schema,
    msg: xdrString(100)
  });
  constructor(input) {
    super();
    this.code = input.code;
    this.msg = input.msg instanceof XdrString ? input.msg : new XdrString(input.msg);
  }
  toXdrObject() {
    return {
      code: this.code.toXdrObject(),
      msg: this.msg
    };
  }
  static fromXdrObject(wire) {
    return new Error({
      code: ErrorCode.fromXdrObject(wire.code),
      msg: wire.msg
    });
  }
}

export { Error };
//# sourceMappingURL=error.js.map
