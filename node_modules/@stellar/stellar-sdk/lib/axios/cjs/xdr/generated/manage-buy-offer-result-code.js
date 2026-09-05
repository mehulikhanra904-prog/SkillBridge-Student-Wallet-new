'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ManageBuyOfferResultCode extends enumValue.EnumValue {
  static manageBuyOfferSuccess = new ManageBuyOfferResultCode(
    "manageBuyOfferSuccess",
    0
  );
  static manageBuyOfferMalformed = new ManageBuyOfferResultCode(
    "manageBuyOfferMalformed",
    -1
  );
  static manageBuyOfferSellNoTrust = new ManageBuyOfferResultCode(
    "manageBuyOfferSellNoTrust",
    -2
  );
  static manageBuyOfferBuyNoTrust = new ManageBuyOfferResultCode(
    "manageBuyOfferBuyNoTrust",
    -3
  );
  static manageBuyOfferSellNotAuthorized = new ManageBuyOfferResultCode("manageBuyOfferSellNotAuthorized", -4);
  static manageBuyOfferBuyNotAuthorized = new ManageBuyOfferResultCode(
    "manageBuyOfferBuyNotAuthorized",
    -5
  );
  static manageBuyOfferLineFull = new ManageBuyOfferResultCode(
    "manageBuyOfferLineFull",
    -6
  );
  static manageBuyOfferUnderfunded = new ManageBuyOfferResultCode(
    "manageBuyOfferUnderfunded",
    -7
  );
  static manageBuyOfferCrossSelf = new ManageBuyOfferResultCode(
    "manageBuyOfferCrossSelf",
    -8
  );
  static manageBuyOfferSellNoIssuer = new ManageBuyOfferResultCode(
    "manageBuyOfferSellNoIssuer",
    -9
  );
  static manageBuyOfferBuyNoIssuer = new ManageBuyOfferResultCode(
    "manageBuyOfferBuyNoIssuer",
    -10
  );
  static manageBuyOfferNotFound = new ManageBuyOfferResultCode(
    "manageBuyOfferNotFound",
    -11
  );
  static manageBuyOfferLowReserve = new ManageBuyOfferResultCode(
    "manageBuyOfferLowReserve",
    -12
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ManageBuyOfferResultCode", {
      manageBuyOfferSuccess: 0,
      manageBuyOfferMalformed: -1,
      manageBuyOfferSellNoTrust: -2,
      manageBuyOfferBuyNoTrust: -3,
      manageBuyOfferSellNotAuthorized: -4,
      manageBuyOfferBuyNotAuthorized: -5,
      manageBuyOfferLineFull: -6,
      manageBuyOfferUnderfunded: -7,
      manageBuyOfferCrossSelf: -8,
      manageBuyOfferSellNoIssuer: -9,
      manageBuyOfferBuyNoIssuer: -10,
      manageBuyOfferNotFound: -11,
      manageBuyOfferLowReserve: -12
    }),
    "manageBuyOffer"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ManageBuyOfferResultCode",
      ManageBuyOfferResultCode.schema,
      ManageBuyOfferResultCode,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName(
      "ManageBuyOfferResultCode",
      ManageBuyOfferResultCode,
      name
    );
  }
  static fromXdrObject(wire) {
    return ManageBuyOfferResultCode.fromValue(wire);
  }
}

exports.ManageBuyOfferResultCode = ManageBuyOfferResultCode;
//# sourceMappingURL=manage-buy-offer-result-code.js.map
