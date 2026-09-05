'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');

class BumpSequenceOp extends xdrValue.XdrValue {
  bumpTo;
  static schema = jsXdr.struct(
    "BumpSequenceOp",
    {
      bumpTo: jsXdr.int64()
    }
  );
  constructor(input) {
    super();
    this.bumpTo = input.bumpTo;
  }
  toXdrObject() {
    return {
      bumpTo: this.bumpTo
    };
  }
  static fromXdrObject(wire) {
    return new BumpSequenceOp({
      bumpTo: wire.bumpTo
    });
  }
}

exports.BumpSequenceOp = BumpSequenceOp;
//# sourceMappingURL=bump-sequence-op.js.map
