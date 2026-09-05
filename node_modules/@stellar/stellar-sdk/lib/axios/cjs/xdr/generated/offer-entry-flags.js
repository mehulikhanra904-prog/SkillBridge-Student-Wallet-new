'use strict';

var jsXdr = require('@stellar/js-xdr');
var enumValue = require('../values/enum-value.js');

class OfferEntryFlags extends enumValue.EnumValue {
  static passiveFlag = new OfferEntryFlags("passiveFlag", 1);
  static schema = jsXdr.enumType("OfferEntryFlags", {
    passiveFlag: 1
  });
  static fromValue(value) {
    return enumValue.enumFromValue(
      "OfferEntryFlags",
      OfferEntryFlags.schema,
      OfferEntryFlags,
      value
    );
  }
  static fromName(name) {
    return enumValue.enumFromName("OfferEntryFlags", OfferEntryFlags, name);
  }
  static fromXdrObject(wire) {
    return OfferEntryFlags.fromValue(wire);
  }
}

exports.OfferEntryFlags = OfferEntryFlags;
//# sourceMappingURL=offer-entry-flags.js.map
