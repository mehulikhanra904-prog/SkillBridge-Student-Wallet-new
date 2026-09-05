'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ShortHashSeed extends xdrValue.XdrValue {
  seed;
  static schema = jsXdr.struct("ShortHashSeed", {
    seed: jsXdr.opaque(16)
  });
  constructor(input) {
    super();
    this.seed = input.seed;
  }
  toXdrObject() {
    return {
      seed: this.seed
    };
  }
  static fromXdrObject(wire) {
    return new ShortHashSeed({
      seed: wire.seed
    });
  }
}

exports.ShortHashSeed = ShortHashSeed;
//# sourceMappingURL=short-hash-seed.js.map
