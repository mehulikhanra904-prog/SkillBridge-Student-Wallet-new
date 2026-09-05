import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ManageSellOfferResultCode extends EnumValue {
  static manageSellOfferSuccess = new ManageSellOfferResultCode(
    "manageSellOfferSuccess",
    0
  );
  static manageSellOfferMalformed = new ManageSellOfferResultCode(
    "manageSellOfferMalformed",
    -1
  );
  static manageSellOfferSellNoTrust = new ManageSellOfferResultCode(
    "manageSellOfferSellNoTrust",
    -2
  );
  static manageSellOfferBuyNoTrust = new ManageSellOfferResultCode(
    "manageSellOfferBuyNoTrust",
    -3
  );
  static manageSellOfferSellNotAuthorized = new ManageSellOfferResultCode("manageSellOfferSellNotAuthorized", -4);
  static manageSellOfferBuyNotAuthorized = new ManageSellOfferResultCode("manageSellOfferBuyNotAuthorized", -5);
  static manageSellOfferLineFull = new ManageSellOfferResultCode(
    "manageSellOfferLineFull",
    -6
  );
  static manageSellOfferUnderfunded = new ManageSellOfferResultCode(
    "manageSellOfferUnderfunded",
    -7
  );
  static manageSellOfferCrossSelf = new ManageSellOfferResultCode(
    "manageSellOfferCrossSelf",
    -8
  );
  static manageSellOfferSellNoIssuer = new ManageSellOfferResultCode(
    "manageSellOfferSellNoIssuer",
    -9
  );
  static manageSellOfferBuyNoIssuer = new ManageSellOfferResultCode(
    "manageSellOfferBuyNoIssuer",
    -10
  );
  static manageSellOfferNotFound = new ManageSellOfferResultCode(
    "manageSellOfferNotFound",
    -11
  );
  static manageSellOfferLowReserve = new ManageSellOfferResultCode(
    "manageSellOfferLowReserve",
    -12
  );
  static schema = withMemberPrefix(
    enumType("ManageSellOfferResultCode", {
      manageSellOfferSuccess: 0,
      manageSellOfferMalformed: -1,
      manageSellOfferSellNoTrust: -2,
      manageSellOfferBuyNoTrust: -3,
      manageSellOfferSellNotAuthorized: -4,
      manageSellOfferBuyNotAuthorized: -5,
      manageSellOfferLineFull: -6,
      manageSellOfferUnderfunded: -7,
      manageSellOfferCrossSelf: -8,
      manageSellOfferSellNoIssuer: -9,
      manageSellOfferBuyNoIssuer: -10,
      manageSellOfferNotFound: -11,
      manageSellOfferLowReserve: -12
    }),
    "manageSellOffer"
  );
  static fromValue(value) {
    return enumFromValue(
      "ManageSellOfferResultCode",
      ManageSellOfferResultCode.schema,
      ManageSellOfferResultCode,
      value
    );
  }
  static fromName(name) {
    return enumFromName(
      "ManageSellOfferResultCode",
      ManageSellOfferResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return ManageSellOfferResultCode.fromValue(wire);
  }
}

export { ManageSellOfferResultCode };
//# sourceMappingURL=manage-sell-offer-result-code.js.map
