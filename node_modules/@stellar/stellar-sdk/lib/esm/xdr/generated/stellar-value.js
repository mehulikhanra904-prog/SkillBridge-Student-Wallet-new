import { struct, array, uint64 } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { Hash } from './hash.js';
import { UpgradeType } from './upgrade-type.js';
import { StellarValueExt } from './stellar-value-ext.js';

class StellarValue extends XdrValue {
  txSetHash;
  closeTime;
  upgrades;
  ext;
  static schema = struct("StellarValue", {
    txSetHash: Hash.schema,
    closeTime: uint64(),
    upgrades: array(UpgradeType.schema, 6),
    ext: StellarValueExt.schema
  });
  constructor(input) {
    super();
    this.txSetHash = input.txSetHash instanceof Hash ? input.txSetHash : new Hash(input.txSetHash);
    this.closeTime = input.closeTime;
    this.upgrades = input.upgrades.map(
      (v) => v instanceof UpgradeType ? v : new UpgradeType(v)
    );
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      txSetHash: this.txSetHash.toXdrObject(),
      closeTime: this.closeTime,
      upgrades: this.upgrades.map((v) => v.toXdrObject()),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new StellarValue({
      txSetHash: Hash.fromXdrObject(wire.txSetHash),
      closeTime: wire.closeTime,
      upgrades: wire.upgrades.map((w) => UpgradeType.fromXdrObject(w)),
      ext: StellarValueExt.fromXdrObject(wire.ext)
    });
  }
}

export { StellarValue };
//# sourceMappingURL=stellar-value.js.map
