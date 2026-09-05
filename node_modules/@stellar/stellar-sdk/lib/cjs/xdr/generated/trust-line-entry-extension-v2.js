'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var trustLineEntryExtensionV2Ext = require('./trust-line-entry-extension-v2-ext.js');

class TrustLineEntryExtensionV2 extends xdrValue.XdrValue {
  liquidityPoolUseCount;
  ext;
  static schema = jsXdr.struct(
    "TrustLineEntryExtensionV2",
    {
      liquidityPoolUseCount: jsXdr.int32(),
      ext: trustLineEntryExtensionV2Ext.TrustLineEntryExtensionV2Ext.schema
    }
  );
  constructor(input) {
    super();
    this.liquidityPoolUseCount = input.liquidityPoolUseCount;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      liquidityPoolUseCount: this.liquidityPoolUseCount,
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new TrustLineEntryExtensionV2({
      liquidityPoolUseCount: wire.liquidityPoolUseCount,
      ext: trustLineEntryExtensionV2Ext.TrustLineEntryExtensionV2Ext.fromXdrObject(wire.ext)
    });
  }
}

exports.TrustLineEntryExtensionV2 = TrustLineEntryExtensionV2;
//# sourceMappingURL=trust-line-entry-extension-v2.js.map
