import { enumType } from '@stellar/js-xdr';
import { EnumValue, enumFromValue, enumFromName } from '../values/enum-value.js';

class OfferEntryFlags extends EnumValue {
  static passiveFlag = new OfferEntryFlags("passiveFlag", 1);
  static schema = enumType("OfferEntryFlags", {
    passiveFlag: 1
  });
  static fromValue(value) {
    return enumFromValue(
      "OfferEntryFlags",
      OfferEntryFlags.schema,
      OfferEntryFlags,
      value
    );
  }
  static fromName(name) {
    return enumFromName("OfferEntryFlags", OfferEntryFlags, name);
  }
  static fromXdrObject(wire) {
    return OfferEntryFlags.fromValue(wire);
  }
}

export { OfferEntryFlags };
//# sourceMappingURL=offer-entry-flags.js.map
