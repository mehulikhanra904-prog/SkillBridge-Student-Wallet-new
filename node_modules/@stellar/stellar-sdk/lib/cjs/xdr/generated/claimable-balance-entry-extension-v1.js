'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimableBalanceEntryExtensionV1Ext = require('./claimable-balance-entry-extension-v1-ext.js');

class ClaimableBalanceEntryExtensionV1 extends xdrValue.XdrValue {
  ext;
  flags;
  static schema = jsXdr.struct("ClaimableBalanceEntryExtensionV1", {
    ext: claimableBalanceEntryExtensionV1Ext.ClaimableBalanceEntryExtensionV1Ext.schema,
    flags: jsXdr.uint32()
  });
  constructor(input) {
    super();
    this.ext = input.ext;
    this.flags = input.flags;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      flags: this.flags
    };
  }
  static fromXdrObject(wire) {
    return new ClaimableBalanceEntryExtensionV1({
      ext: claimableBalanceEntryExtensionV1Ext.ClaimableBalanceEntryExtensionV1Ext.fromXdrObject(wire.ext),
      flags: wire.flags
    });
  }
}

exports.ClaimableBalanceEntryExtensionV1 = ClaimableBalanceEntryExtensionV1;
//# sourceMappingURL=claimable-balance-entry-extension-v1.js.map
