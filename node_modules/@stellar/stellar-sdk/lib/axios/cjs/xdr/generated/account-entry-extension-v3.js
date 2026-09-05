'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var extensionPoint = require('./extension-point.js');

class AccountEntryExtensionV3 extends xdrValue.XdrValue {
  ext;
  seqLedger;
  seqTime;
  static schema = jsXdr.struct(
    "AccountEntryExtensionV3",
    {
      ext: extensionPoint.ExtensionPoint.schema,
      seqLedger: jsXdr.uint32(),
      seqTime: jsXdr.uint64()
    }
  );
  constructor(input) {
    super();
    this.ext = input.ext;
    this.seqLedger = input.seqLedger;
    this.seqTime = input.seqTime;
  }
  toXdrObject() {
    return {
      ext: this.ext.toXdrObject(),
      seqLedger: this.seqLedger,
      seqTime: this.seqTime
    };
  }
  static fromXdrObject(wire) {
    return new AccountEntryExtensionV3({
      ext: extensionPoint.ExtensionPoint.fromXdrObject(wire.ext),
      seqLedger: wire.seqLedger,
      seqTime: wire.seqTime
    });
  }
}

exports.AccountEntryExtensionV3 = AccountEntryExtensionV3;
//# sourceMappingURL=account-entry-extension-v3.js.map
