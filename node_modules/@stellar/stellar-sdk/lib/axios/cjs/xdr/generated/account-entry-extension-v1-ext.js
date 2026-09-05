'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var accountEntryExtensionV2 = require('./account-entry-extension-v2.js');

class AccountEntryExtensionV1ExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === AccountEntryExtensionV1ExtBase) {
      throw new TypeError(
        "new xdr.AccountEntryExtensionV1Ext(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AccountEntryExtensionV1Ext.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "AccountEntryExtensionV1Ext",
    {
      switchOn: jsXdr.int32(),
      cases: [
        jsXdr.case("v0", 0, jsXdr.void()),
        jsXdr.case("v2", 2, jsXdr.field("v2", accountEntryExtensionV2.AccountEntryExtensionV2.schema))
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new AccountEntryExtensionV1ExtV0();
  }
  static v2(v2) {
    return new AccountEntryExtensionV1ExtV2(v2);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new AccountEntryExtensionV1ExtV0();
      case 2:
        return new AccountEntryExtensionV1ExtV2(
          accountEntryExtensionV2.AccountEntryExtensionV2.fromXdrObject(wire.v2)
        );
    }
    throw new jsXdr.XdrError(
      `AccountEntryExtensionV1Ext: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AccountEntryExtensionV1Ext variant.
   * Use this instead of `instanceof AccountEntryExtensionV1Ext`: the exported `AccountEntryExtensionV1Ext` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AccountEntryExtensionV1Ext.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AccountEntryExtensionV1ExtBase;
  }
}
class AccountEntryExtensionV1ExtV0 extends AccountEntryExtensionV1ExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class AccountEntryExtensionV1ExtV2 extends AccountEntryExtensionV1ExtBase {
  type = "v2";
  v2;
  constructor(v2) {
    super();
    this.v2 = v2;
  }
  get value() {
    return this.v2;
  }
  toXdrObject() {
    return { v: 2, v2: this.v2.toXdrObject() };
  }
}
const AccountEntryExtensionV1Ext = AccountEntryExtensionV1ExtBase;

exports.AccountEntryExtensionV1Ext = AccountEntryExtensionV1Ext;
exports.AccountEntryExtensionV1ExtV0 = AccountEntryExtensionV1ExtV0;
exports.AccountEntryExtensionV1ExtV2 = AccountEntryExtensionV1ExtV2;
//# sourceMappingURL=account-entry-extension-v1-ext.js.map
