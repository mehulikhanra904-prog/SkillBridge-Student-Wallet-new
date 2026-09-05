'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class RevokeSponsorshipType extends enumValue.EnumValue {
  static revokeSponsorshipLedgerEntry = new RevokeSponsorshipType(
    "revokeSponsorshipLedgerEntry",
    0
  );
  static revokeSponsorshipSigner = new RevokeSponsorshipType(
    "revokeSponsorshipSigner",
    1
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("RevokeSponsorshipType", {
      revokeSponsorshipLedgerEntry: 0,
      revokeSponsorshipSigner: 1
    }),
    "revokeSponsorship"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "RevokeSponsorshipType",
      RevokeSponsorshipType.schema,
      RevokeSponsorshipType,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("RevokeSponsorshipType", RevokeSponsorshipType, name);
  }
  static fromXdrObject(wire) {
    return RevokeSponsorshipType.fromValue(wire);
  }
}

exports.RevokeSponsorshipType = RevokeSponsorshipType;
//# sourceMappingURL=revoke-sponsorship-type.js.map
