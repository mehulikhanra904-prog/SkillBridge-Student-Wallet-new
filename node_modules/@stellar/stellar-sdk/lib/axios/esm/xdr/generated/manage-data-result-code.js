import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ManageDataResultCode extends EnumValue {
  static manageDataSuccess = new ManageDataResultCode(
    "manageDataSuccess",
    0
  );
  static manageDataNotSupportedYet = new ManageDataResultCode(
    "manageDataNotSupportedYet",
    -1
  );
  static manageDataNameNotFound = new ManageDataResultCode(
    "manageDataNameNotFound",
    -2
  );
  static manageDataLowReserve = new ManageDataResultCode(
    "manageDataLowReserve",
    -3
  );
  static manageDataInvalidName = new ManageDataResultCode(
    "manageDataInvalidName",
    -4
  );
  static schema = withMemberPrefix(
    enumType("ManageDataResultCode", {
      manageDataSuccess: 0,
      manageDataNotSupportedYet: -1,
      manageDataNameNotFound: -2,
      manageDataLowReserve: -3,
      manageDataInvalidName: -4
    }),
    "manageData"
  );
  static fromValue(value) {
    return enumFromValue(
      "ManageDataResultCode",
      ManageDataResultCode.schema,
      ManageDataResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ManageDataResultCode", ManageDataResultCode, name);
  }
  static fromXdrObject(wire) {
    return ManageDataResultCode.fromValue(wire);
  }
}

export { ManageDataResultCode };
//# sourceMappingURL=manage-data-result-code.js.map
