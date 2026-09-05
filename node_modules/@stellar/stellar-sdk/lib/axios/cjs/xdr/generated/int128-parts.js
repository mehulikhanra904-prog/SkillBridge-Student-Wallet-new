'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Int128Parts extends xdrValue.XdrValue {
  hi;
  lo;
  static schema = jsXdr.struct("Int128Parts", {
    hi: jsXdr.int64(),
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
    return new Int128Parts({
      hi: wire.hi,
      lo: wire.lo
    });
  }
}

exports.Int128Parts = Int128Parts;
//# sourceMappingURL=int128-parts.js.map
