import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class RevokeSponsorshipResultCode extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("RevokeSponsorshipResultCode", {
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
    return enumFromValue(
      "RevokeSponsorshipResultCode",
      RevokeSponsorshipResultCode.schema,
      RevokeSponsorshipResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "RevokeSponsorshipResultCode",
      RevokeSponsorshipResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return RevokeSponsorshipResultCode.fromValue(wire);
  }
}

export { RevokeSponsorshipResultCode };
//# sourceMappingURL=revoke-sponsorship-result-code.js.map
