'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var changeTrustAsset = require('./change-trust-asset.js');

class ChangeTrustOp extends xdrValue.XdrValue {
  line;
  limit;
  static schema = jsXdr.struct("ChangeTrustOp", {
    line: changeTrustAsset.ChangeTrustAsset.schema,
    limit: jsXdr.int64()
  });
  constructor(input) {
    super();
    this.line = input.line;
    this.limit = input.limit;
  }
  toXdrObject() {
    return {
      line: this.line.toXdrObject(),
      limit: this.limit
    };
  }
  static fromXdrObject(wire) {
    return new ChangeTrustOp({
      line: changeTrustAsset.ChangeTrustAsset.fromXdrObject(wire.line),
      limit: wire.limit
    });
  }
}

exports.ChangeTrustOp = ChangeTrustOp;
//# sourceMappingURL=change-trust-op.js.map
