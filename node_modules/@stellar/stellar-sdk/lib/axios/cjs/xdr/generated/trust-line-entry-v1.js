'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var liabilities = require('./liabilities.js');
var trustLineEntryV1Ext = require('./trust-line-entry-v1-ext.js');

class TrustLineEntryV1 extends xdrValue.XdrValue {
  liabilities;
  ext;
  static schema = jsXdr.struct(
    "TrustLineEntryV1",
    {
      liabilities: liabilities.Liabilities.schema,
      ext: trustLineEntryV1Ext.TrustLineEntryV1Ext.schema
    }
  );
  constructor(input) {
    super();
    this.liabilities = input.liabilities;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      liabilities: this.liabilities.toXdrObject(),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TrustLineEntryV1({
      liabilities: liabilities.Liabilities.fromXdrObject(wire.liabilities),
      ext: trustLineEntryV1Ext.TrustLineEntryV1Ext.fromXdrObject(wire.ext)
    });
  }
}

exports.TrustLineEntryV1 = TrustLineEntryV1;
//# sourceMappingURL=trust-line-entry-v1.js.map
