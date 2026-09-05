'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class RevokeSponsorshipResultCode extends enumValue.EnumValue {
  static revokeSponsorshipSuccess = new RevokeSponsorshipResultCode(
    "revokeSponsorshipSuccess",
    0
  );
  static revokeSponsorshipDoesNotExist = new RevokeSponsorshipResultCode("revokeSponsorshipDoesNotExist", -1);
  static revokeSponsorshipNotSponsor = new RevokeSponsorshipResultCode(
    "revokeSponsorshipNotSponsor",
    -2
  );
  static revokeSponsorshipLowReserve = new RevokeSponsorshipResultCode(
    "revokeSponsorshipLowReserve",
    -3
  );
  static revokeSponsorshipOnlyTransferable = new RevokeSponsorshipResultCode("revokeSponsorshipOnlyTransferable", -4);
  static revokeSponsorshipMalformed = new RevokeSponsorshipResultCode(
    "revokeSponsorshipMalformed",
    -5
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("RevokeSponsorshipResultCode", {
      revokeSponsorshipSuccess: 0,
      revokeSponsorshipDoesNotExist: -1,
      revokeSponsorshipNotSponsor: -2,
      revokeSponsorshipLowReserve: -3,
      revokeSponsorshipOnlyTransferable: -4,
      revokeSponsorshipMalformed: -5
    }),
    "revokeSponsorship"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "RevokeSponsorshipResultCode",
      RevokeSponsorshipResultCode.schema,
      RevokeSponsorshipResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "RevokeSponsorshipResultCode",
      RevokeSponsorshipResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return RevokeSponsorshipResultCode.fromValue(wire);
  }
}

exports.RevokeSponsorshipResultCode = RevokeSponsorshipResultCode;
//# sourceMappingURL=revoke-sponsorship-result-code.js.map
