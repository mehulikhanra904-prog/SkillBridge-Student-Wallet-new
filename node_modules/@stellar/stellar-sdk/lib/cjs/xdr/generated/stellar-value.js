'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hash = require('./hash.js');
var upgradeType = require('./upgrade-type.js');
var stellarValueExt = require('./stellar-value-ext.js');

class StellarValue extends xdrValue.XdrValue {
  txSetHash;
  closeTime;
  upgrades;
  ext;
  static schema = jsXdr.struct("StellarValue", {
    txSetHash: hash.Hash.schema,
    closeTime: jsXdr.uint64(),
    upgrades: jsXdr.array(upgradeType.UpgradeType.schema, 6),
    ext: stellarValueExt.StellarValueExt.schema
  });
  constructor(input) {
    super();
    this.txSetHash = input.txSetHash instanceof hash.Hash ? input.txSetHash : new hash.Hash(input.txSetHash);
    this.closeTime = input.closeTime;
    this.upgrades = input.upgrades.map(
      (v) => v instanceof upgradeType.UpgradeType ? v : new upgradeType.UpgradeType(v)
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
      txSetHash: hash.Hash.fromXdrObject(wire.txSetHash),
      closeTime: wire.closeTime,
      upgrades: wire.upgrades.map((w) => upgradeType.UpgradeType.fromXdrObject(w)),
      ext: stellarValueExt.StellarValueExt.fromXdrObject(wire.ext)
    });
  }
}

exports.StellarValue = StellarValue;
//# sourceMappingURL=stellar-value.js.map
