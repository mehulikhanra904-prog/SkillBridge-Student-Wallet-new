import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class LedgerEntryChangeType extends EnumValue {
  static ledgerEntryCreated = new LedgerEntryChangeType(
    "ledgerEntryCreated",
    0
  );
  static ledgerEntryUpdated = new LedgerEntryChangeType(
    "ledgerEntryUpdated",
    1
  );
  static ledgerEntryRemoved = new LedgerEntryChangeType(
    "ledgerEntryRemoved",
    2
  );
  static ledgerEntryState = new LedgerEntryChangeType(
    "ledgerEntryState",
    3
  );
  static ledgerEntryRestored = new LedgerEntryChangeType(
    "ledgerEntryRestored",
    4
  );
  static schema = withMemberPrefix(
    enumType("LedgerEntryChangeType", {
      ledgerEntryCreated: 0,
      ledgerEntryUpdated: 1,
      ledgerEntryRemoved: 2,
      ledgerEntryState: 3,
      ledgerEntryRestored: 4
    }),
    "ledgerEntry"
  );
  static fromValue(value) {
    return enumFromValue(
      "LedgerEntryChangeType",
      LedgerEntryChangeType.schema,
      LedgerEntryChangeType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("LedgerEntryChangeType", LedgerEntryChangeType, name);
  }
  static fromXdrObject(wire) {
    return LedgerEntryChangeType.fromValue(wire);
  }
}

export { LedgerEntryChangeType };
//# sourceMappingURL=ledger-entry-change-type.js.map
