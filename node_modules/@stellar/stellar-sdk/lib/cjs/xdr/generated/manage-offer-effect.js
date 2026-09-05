'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class ManageOfferEffect extends enumValue.EnumValue {
  static manageOfferCreated = new ManageOfferEffect(
    "manageOfferCreated",
    0
  );
  static manageOfferUpdated = new ManageOfferEffect(
    "manageOfferUpdated",
    1
  );
  static manageOfferDeleted = new ManageOfferEffect(
    "manageOfferDeleted",
    2
  );
  static schema = enumValue.withMemberPrefix(
    jsXdr.enumType("ManageOfferEffect", {
      manageOfferCreated: 0,
      manageOfferUpdated: 1,
      manageOfferDeleted: 2
    }),
    "manageOffer"
  );
  static fromValue(value) {
    return enumValue.enumFromValue(
      "ManageOfferEffect",
      ManageOfferEffect.schema,
      ManageOfferEffect,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("ManageOfferEffect", ManageOfferEffect, name);
  }
  static fromXdrObject(wire) {
    return ManageOfferEffect.fromValue(wire);
  }
}

exports.ManageOfferEffect = ManageOfferEffect;
//# sourceMappingURL=manage-offer-effect.js.map
