'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class Price extends xdrValue.XdrValue {
  n;
  d;
  static schema = jsXdr.struct("Price", {
    n: jsXdr.int32(),
    d: jsXdr.int32()
  });
  constructor(input) {
    super();
    this.n = input.n;
    this.d = input.d;
  }
  toXdrObject() {
    return {
      n: this.n,
      d: this.d
    };
  }
  static fromXdrObject(wire) {
    return new Price({
      n: wire.n,
      d: wire.d
    });
  }
}

exports.Price = Price;
//# sourceMappingURL=price.js.map
