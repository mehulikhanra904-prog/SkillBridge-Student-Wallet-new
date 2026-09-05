import { union, case as _case, field, uint32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { LedgerUpgradeType } from './ledger-upgrade-type.js';
import { ConfigUpgradeSetKey } from './config-upgrade-set-key.js';

class LedgerUpgradeBase extends XdrValue {
  constructor() {
    super();
    if (new.target === LedgerUpgradeBase) {
      throw new TypeError(
        "new xdr.LedgerUpgrade(...) is not supported: XDR unions are built from per-variant factories. Call xdr.LedgerUpgrade.ledgerUpgradeVersion(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("LedgerUpgrade", {
    switchOn: LedgerUpgradeType.schema,
    cases: [
      _case("ledgerUpgradeVersion", 1, field("newLedgerVersion", uint32())),
      _case("ledgerUpgradeBaseFee", 2, field("newBaseFee", uint32())),
      _case("ledgerUpgradeMaxTxSetSize", 3, field("newMaxTxSetSize", uint32())),
      _case("ledgerUpgradeBaseReserve", 4, field("newBaseReserve", uint32())),
      _case("ledgerUpgradeFlags", 5, field("newFlags", uint32())),
      _case(
        "ledgerUpgradeConfig",
        6,
        field("newConfig", ConfigUpgradeSetKey.schema)
      ),
      _case(
        "ledgerUpgradeMaxSorobanTxSetSize",
        7,
        field("newMaxSorobanTxSetSize", uint32())
      )
    ]
  });
  static ledgerUpgradeVersion(newLedgerVersion) {
    return new LedgerUpgradeVersion(newLedgerVersion);
  }
  static ledgerUpgradeBaseFee(newBaseFee) {
    return new LedgerUpgradeBaseFee(newBaseFee);
  }
  static ledgerUpgradeMaxTxSetSize(newMaxTxSetSize) {
    return new LedgerUpgradeMaxTxSetSize(newMaxTxSetSize);
  }
  static ledgerUpgradeBaseReserve(newBaseReserve) {
    return new LedgerUpgradeBaseReserve(newBaseReserve);
  }
  static ledgerUpgradeFlags(newFlags) {
    return new LedgerUpgradeFlags(newFlags);
  }
  static ledgerUpgradeConfig(newConfig) {
    return new LedgerUpgradeConfig(newConfig);
  }
  static ledgerUpgradeMaxSorobanTxSetSize(newMaxSorobanTxSetSize) {
    return new LedgerUpgradeMaxSorobanTxSetSize(newMaxSorobanTxSetSize);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 1:
        return new LedgerUpgradeVersion(wire.newLedgerVersion);
      case 2:
        return new LedgerUpgradeBaseFee(wire.newBaseFee);
      case 3:
        return new LedgerUpgradeMaxTxSetSize(wire.newMaxTxSetSize);
      case 4:
        return new LedgerUpgradeBaseReserve(wire.newBaseReserve);
      case 5:
        return new LedgerUpgradeFlags(wire.newFlags);
      case 6:
        return new LedgerUpgradeConfig(
          ConfigUpgradeSetKey.fromXdrObject(wire.newConfig)
        );
      case 7:
        return new LedgerUpgradeMaxSorobanTxSetSize(
          wire.newMaxSorobanTxSetSize
        );
    }
    throw new XdrError(
      `LedgerUpgrade: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete LedgerUpgrade variant.
   * Use this instead of `instanceof LedgerUpgrade`: the exported `LedgerUpgrade` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `LedgerUpgrade.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof LedgerUpgradeBase;
  }
}
class LedgerUpgradeVersion extends LedgerUpgradeBase {
  type = "ledgerUpgradeVersion";
  newLedgerVersion;
  constructor(newLedgerVersion) {
    super();
    this.newLedgerVersion = newLedgerVersion;
  }
  get value() {
    return this.newLedgerVersion;
  }
  toXdrObject() {
    return { type: 1, newLedgerVersion: this.newLedgerVersion };
  }
}
class LedgerUpgradeBaseFee extends LedgerUpgradeBase {
  type = "ledgerUpgradeBaseFee";
  newBaseFee;
  constructor(newBaseFee) {
    super();
    this.newBaseFee = newBaseFee;
  }
  get value() {
    return this.newBaseFee;
  }
  toXdrObject() {
    return { type: 2, newBaseFee: this.newBaseFee };
  }
}
class LedgerUpgradeMaxTxSetSize extends LedgerUpgradeBase {
  type = "ledgerUpgradeMaxTxSetSize";
  newMaxTxSetSize;
  constructor(newMaxTxSetSize) {
    super();
    this.newMaxTxSetSize = newMaxTxSetSize;
  }
  get value() {
    return this.newMaxTxSetSize;
  }
  toXdrObject() {
    return { type: 3, newMaxTxSetSize: this.newMaxTxSetSize };
  }
}
class LedgerUpgradeBaseReserve extends LedgerUpgradeBase {
  type = "ledgerUpgradeBaseReserve";
  newBaseReserve;
  constructor(newBaseReserve) {
    super();
    this.newBaseReserve = newBaseReserve;
  }
  get value() {
    return this.newBaseReserve;
  }
  toXdrObject() {
    return { type: 4, newBaseReserve: this.newBaseReserve };
  }
}
class LedgerUpgradeFlags extends LedgerUpgradeBase {
  type = "ledgerUpgradeFlags";
  newFlags;
  constructor(newFlags) {
    super();
    this.newFlags = newFlags;
  }
  get value() {
    return this.newFlags;
  }
  toXdrObject() {
    return { type: 5, newFlags: this.newFlags };
  }
}
class LedgerUpgradeConfig extends LedgerUpgradeBase {
  type = "ledgerUpgradeConfig";
  newConfig;
  constructor(newConfig) {
    super();
    this.newConfig = newConfig;
  }
  get value() {
    return this.newConfig;
  }
  toXdrObject() {
    return { type: 6, newConfig: this.newConfig.toXdrObject() };
  }
}
class LedgerUpgradeMaxSorobanTxSetSize extends LedgerUpgradeBase {
  type = "ledgerUpgradeMaxSorobanTxSetSize";
  newMaxSorobanTxSetSize;
  constructor(newMaxSorobanTxSetSize) {
    super();
    this.newMaxSorobanTxSetSize = newMaxSorobanTxSetSize;
  }
  get value() {
    return this.newMaxSorobanTxSetSize;
  }
  toXdrObject() {
    return { type: 7, newMaxSorobanTxSetSize: this.newMaxSorobanTxSetSize };
  }
}
const LedgerUpgrade = LedgerUpgradeBase;

export { LedgerUpgrade, LedgerUpgradeBaseFee, LedgerUpgradeBaseReserve, LedgerUpgradeConfig, LedgerUpgradeFlags, LedgerUpgradeMaxSorobanTxSetSize, LedgerUpgradeMaxTxSetSize, LedgerUpgradeVersion };
//# sourceMappingURL=ledger-upgrade.js.map
