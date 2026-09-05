import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class TrustLineFlags extends EnumValue {
  static authorizedFlag = new TrustLineFlags("authorizedFlag", 1);
  static authorizedToMaintainLiabilitiesFlag = new TrustLineFlags(
    "authorizedToMaintainLiabilitiesFlag",
    2
  );
  static trustlineClawbackEnabledFlag = new TrustLineFlags(
    "trustlineClawbackEnabledFlag",
    4
  );
  static schema = enumType("TrustLineFlags", {
    authorizedFlag: 1,
    authorizedToMaintainLiabilitiesFlag: 2,
    trustlineClawbackEnabledFlag: 4
  });
  static fromValue(value) {
    return enumFromValue(
      "TrustLineFlags",
      TrustLineFlags.schema,
      TrustLineFlags,
      value
    );
  }
  static fromName(name) {
    return enumFromName("TrustLineFlags", TrustLineFlags, name);
  }
  static fromXdrObject(wire) {
    return TrustLineFlags.fromValue(wire);
  }
}

export { TrustLineFlags };
//# sourceMappingURL=trust-line-flags.js.map
