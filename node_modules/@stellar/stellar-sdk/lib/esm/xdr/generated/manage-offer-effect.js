import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class ManageOfferEffect extends EnumValue {
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
  static schema = withMemberPrefix(
    enumType("ManageOfferEffect", {
      manageOfferCreated: 0,
      manageOfferUpdated: 1,
      manageOfferDeleted: 2
    }),
    "manageOffer"
  );
  static fromValue(value) {
    return enumFromValue(
      "ManageOfferEffect",
      ManageOfferEffect.schema,
      ManageOfferEffect,
      value
    );
  }
  static fromName(name) {
    return enumFromName("ManageOfferEffect", ManageOfferEffect, name);
  }
  static fromXdrObject(wire) {
    return ManageOfferEffect.fromValue(wire);
  }
}

export { ManageOfferEffect };
//# sourceMappingURL=manage-offer-effect.js.map
