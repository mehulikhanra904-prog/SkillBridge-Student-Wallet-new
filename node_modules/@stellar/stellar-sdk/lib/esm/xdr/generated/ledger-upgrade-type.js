import { enumType } from '@stellar/js-xdr';
import { EnumValue, withMemberPrefix, enumFromValue, enumFromName } from '../values/enum-value.js';

class LedgerUpgradeType extends EnumValue {
  static ledgerUpgradeVersion = new LedgerUpgradeType(
    "ledgerUpgradeVersion",
    1
  );
  static ledgerUpgradeBaseFee = new LedgerUpgradeType(
    "ledgerUpgradeBaseFee",
    2
  );
  static ledgerUpgradeMaxTxSetSize = new LedgerUpgradeType(
    "ledgerUpgradeMaxTxSetSize",
    3
  );
  static ledgerUpgradeBaseReserve = new LedgerUpgradeType(
    "ledgerUpgradeBaseReserve",
    4
  );
  static ledgerUpgradeFlags = new LedgerUpgradeType(
    "ledgerUpgradeFlags",
    5
  );
  static ledgerUpgradeConfig = new LedgerUpgradeType(
    "ledgerUpgradeConfig",
    6
  );
  static ledgerUpgradeMaxSorobanTxSetSize = new LedgerUpgradeType(
    "ledgerUpgradeMaxSorobanTxSetSize",
    7
  );
  static schema = withMemberPrefix(
    enumType("LedgerUpgradeType", {
      ledgerUpgradeVersion: 1,
      ledgerUpgradeBaseFee: 2,
      ledgerUpgradeMaxTxSetSize: 3,
      ledgerUpgradeBaseReserve: 4,
      ledgerUpgradeFlags: 5,
      ledgerUpgradeConfig: 6,
      ledgerUpgradeMaxSorobanTxSetSize: 7
    }),
    "ledgerUpgrade"
  );
  static fromValue(value) {
    return enumFromValue(
      "LedgerUpgradeType",
      LedgerUpgradeType.schema,
      LedgerUpgradeType,
      value
    );
  }
  static fromName(name) {
    return enumFromName("LedgerUpgradeType", LedgerUpgradeType, name);
  }
  static fromXdrObject(wire) {
    return LedgerUpgradeType.fromValue(wire);
  }
}

export { LedgerUpgradeType };
//# sourceMappingURL=ledger-upgrade-type.js.map
