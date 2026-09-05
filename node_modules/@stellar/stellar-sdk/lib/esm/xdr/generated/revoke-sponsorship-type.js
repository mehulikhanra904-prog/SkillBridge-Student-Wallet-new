import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class RevokeSponsorshipType extends EnumValue {
  static revokeSponsorshipLedgerEntry = new RevokeSponsorshipType(
    "revokeSponsorshipLedgerEntry",
    0
  );
  static revokeSponsorshipSigner = new RevokeSponsorshipType(
    "revokeSponsorshipSigner",
    1
  );
  static schema = withMemberPrefix(
    enumType("RevokeSponsorshipType", {
      revokeSponsorshipLedgerEntry: 0,
      revokeSponsorshipSigner: 1
    }),
    "revokeSponsorship"
  );
  static fromValue(value) {
    return enumFromValue(
      "RevokeSponsorshipType",
      RevokeSponsorshipType.schema,
      RevokeSponsorshipType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("RevokeSponsorshipType", RevokeSponsorshipType, name);
  }
  static fromXdrObject(wire) {
    return RevokeSponsorshipType.fromValue(wire);
  }
}

export { RevokeSponsorshipType };
//# sourceMappingURL=revoke-sponsorship-type.js.map
