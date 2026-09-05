'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class ScSpecTypeBytesN extends xdrValue.XdrValue {
  n;
  static schema = jsXdr.struct(
    "ScSpecTypeBytesN",
    {
      n: jsXdr.uint32()
    }
  );
  constructor(input) {
    super();
    this.n = input.n;
  }
  toXdrObject() {
    return {
      n: this.n
    };
  }
  static fromXdrObject(wire) {
    return new ScSpecTypeBytesN({
      n: wire.n
    });
  }
}

exports.ScSpecTypeBytesN = ScSpecTypeBytesN;
//# sourceMappingURL=sc-spec-type-bytes-n.js.map
