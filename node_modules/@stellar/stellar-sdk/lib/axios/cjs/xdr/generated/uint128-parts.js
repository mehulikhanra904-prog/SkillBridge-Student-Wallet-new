'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Uint128Parts extends xdrValue.XdrValue {
  hi;
  lo;
  static schema = jsXdr.struct("Uint128Parts", {
    hi: jsXdr.uint64(),
    lo: jsXdr.uint64()
  });
  constructor(input) {
    super();
    this.hi = input.hi;
    this.lo = input.lo;
  }
  toXdrObject() {
    return {
      hi: this.hi,
      lo: this.lo
    };
  }
  static fromXdrObject(wire) {
    return new Uint128Parts({
      hi: wire.hi,
      lo: wire.lo
    });
  }
}

exports.Uint128Parts = Uint128Parts;
//# sourceMappingURL=uint128-parts.js.map
