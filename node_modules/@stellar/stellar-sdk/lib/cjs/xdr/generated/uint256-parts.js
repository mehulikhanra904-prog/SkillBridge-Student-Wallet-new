'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Uint256Parts extends xdrValue.XdrValue {
  hiHi;
  hiLo;
  loHi;
  loLo;
  static schema = jsXdr.struct("Uint256Parts", {
    hiHi: jsXdr.uint64(),
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
    return new Uint256Parts({
      hiHi: wire.hiHi,
      hiLo: wire.hiLo,
      loHi: wire.loHi,
      loLo: wire.loLo
    });
  }
}

exports.Uint256Parts = Uint256Parts;
//# sourceMappingURL=uint256-parts.js.map
