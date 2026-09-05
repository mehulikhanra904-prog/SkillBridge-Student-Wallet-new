'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var xdrString = require('../values/xdr-string.js');

class ScMetaV0 extends xdrValue.XdrValue {
  key;
  val;
  static schema = jsXdr.struct("ScMetaV0", {
    key: xdrString.xdrString(jsXdr.UNBOUNDED_MAX_LENGTH),
    val: xdrString.xdrString(jsXdr.UNBOUNDED_MAX_LENGTH)
  });
  constructor(input) {
    super();
    this.key = input.key instanceof xdrString.XdrString ? input.key : new xdrString.XdrString(input.key);
    this.val = input.val instanceof xdrString.XdrString ? input.val : new xdrString.XdrString(input.val);
  }
  toXdrObject() {
    return {
      key: this.key,
      val: this.val
    };
  }
  static fromXdrObject(wire) {
    return new ScMetaV0({
      key: wire.key,
      val: wire.val
    });
  }
}

exports.ScMetaV0 = ScMetaV0;
//# sourceMappingURL=sc-meta-v0.js.map
