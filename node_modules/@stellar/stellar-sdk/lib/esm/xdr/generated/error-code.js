import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ErrorCode extends EnumValue {
  static errMisc = new ErrorCode("errMisc", 0);
  static errData = new ErrorCode("errData", 1);
  static errConf = new ErrorCode("errConf", 2);
  static errAuth = new ErrorCode("errAuth", 3);
  static errLoad = new ErrorCode("errLoad", 4);
  static schema = withMemberPrefix(
    enumType("ErrorCode", {
      errMisc: 0,
      errData: 1,
      errConf: 2,
      errAuth: 3,
      errLoad: 4
    }),
    "err"
  );
  static fromValue(value) {
    return enumFromValue("ErrorCode", ErrorCode.schema, ErrorCode, value);
  }
  static fromName(name) {
    return enumFromName("ErrorCode", ErrorCode, name);
  }
  static fromXdrObject(wire) {
    return ErrorCode.fromValue(wire);
  }
}

export { ErrorCode };
//# sourceMappingURL=error-code.js.map
