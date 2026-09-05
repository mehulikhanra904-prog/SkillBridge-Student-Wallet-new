'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Int256Parts extends xdrValue.XdrValue {
  hiHi;
  hiLo;
  loHi;
  loLo;
  static schema = jsXdr.struct("Int256Parts", {
    hiHi: jsXdr.int64(),
    hiLo: jsXdr.uint64(),
    loHi: jsXdr.uint64(),
    loLo: jsXdr.uint64()
  });
  constructor(input) {
    super();
    this.hiHi = input.hiHi;
    this.hiLo = input.hiLo;
    this.loHi = input.loHi;
    this.loLo = input.loLo;
  }
  toXdrObject() {
    return {
      hiHi: this.hiHi,
      hiLo: this.hiLo,
      loHi: this.loHi,
      loLo: this.loLo
    };
  }
  static fromXdrObject(wire) {
    return new Int256Parts({
      hiHi: wire.hiHi,
      hiLo: wire.hiLo,
      loHi: wire.loHi,
      loLo: wire.loLo
    });
  }
}

exports.Int256Parts = Int256Parts;
//# sourceMappingURL=int256-parts.js.map
