'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ManageDataResultCode extends enumValue.EnumValue {
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
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ManageDataResultCode", {
      manageDataSuccess: 0,
      manageDataNotSupportedYet: -1,
      manageDataNameNotFound: -2,
      manageDataLowReserve: -3,
      manageDataInvalidName: -4
    }),
    "manageData"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ManageDataResultCode",
      ManageDataResultCode.schema,
      ManageDataResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ManageDataResultCode", ManageDataResultCode, name);
  }
  static fromXdrObject(wire) {
    return ManageDataResultCode.fromValue(wire);
  }
}

exports.ManageDataResultCode = ManageDataResultCode;
//# sourceMappingURL=manage-data-result-code.js.map
