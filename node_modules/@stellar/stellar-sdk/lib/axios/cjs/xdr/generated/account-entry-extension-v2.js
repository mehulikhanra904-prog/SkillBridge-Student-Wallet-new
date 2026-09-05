'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var publicKey = require('./public-key.js');
var accountEntryExtensionV2Ext = require('./account-entry-extension-v2-ext.js');

class AccountEntryExtensionV2 extends xdrValue.XdrValue {
  numSponsored;
  numSponsoring;
  signerSponsoringIDs;
  ext;
  static schema = jsXdr.struct(
    "AccountEntryExtensionV2",
    {
      numSponsored: jsXdr.uint32(),
      numSponsoring: jsXdr.uint32(),
      signerSponsoringIDs: jsXdr.array(jsXdr.option(publicKey.PublicKey.schema), 20),
      ext: accountEntryExtensionV2Ext.AccountEntryExtensionV2Ext.schema
    }
  );
  constructor(input) {
    super();
    this.numSponsored = input.numSponsored;
    this.numSponsoring = input.numSponsoring;
    this.signerSponsoringIDs = input.signerSponsoringIDs;
    this.ext = input.ext;
  }
  toXdrObject() {
    return {
      numSponsored: this.numSponsored,
      numSponsoring: this.numSponsoring,
      signerSponsoringIDs: this.signerSponsoringIDs.map(
        (v) => v === null ? null : v.toXdrObject()
      ),
      ext: this.ext.toXdrObject()
    };
  }
  static fromXdrObject(wire) {
    return new AccountEntryExtensionV2({
      numSponsored: wire.numSponsored,
      numSponsoring: wire.numSponsoring,
      signerSponsoringIDs: wire.signerSponsoringIDs.map(
        (w) => w === null ? null : publicKey.PublicKey.fromXdrObject(w)
      ),
      ext: accountEntryExtensionV2Ext.AccountEntryExtensionV2Ext.fromXdrObject(wire.ext)
    });
  }
}

exports.AccountEntryExtensionV2 = AccountEntryExtensionV2;
//# sourceMappingURL=account-entry-extension-v2.js.map
