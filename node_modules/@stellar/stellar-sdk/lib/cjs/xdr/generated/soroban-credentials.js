'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanCredentialsType = require('./soroban-credentials-type.js');
var sorobanAddressCredentials = require('./soroban-address-credentials.js');
var sorobanAddressCredentialsWithDelegates = require('./soroban-address-credentials-with-delegates.js');

class SorobanCredentialsBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === SorobanCredentialsBase) {
      throw new TypeError(
        "new xdr.SorobanCredentials(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SorobanCredentials.sorobanCredentialsSourceAccount() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "SorobanCredentials",
    {
      switchOn: sorobanCredentialsType.SorobanCredentialsType.schema,
      cases: [
        jsXdr.case("sorobanCredentialsSourceAccount", 0, jsXdr.void()),
        jsXdr.case(
          "sorobanCredentialsAddress",
          1,
          jsXdr.field("address", sorobanAddressCredentials.SorobanAddressCredentials.schema)
        ),
        jsXdr.case(
          "sorobanCredentialsAddressV2",
          2,
          jsXdr.field("addressV2", sorobanAddressCredentials.SorobanAddressCredentials.schema)
        ),
        jsXdr.case(
          "sorobanCredentialsAddressWithDelegates",
          3,
          jsXdr.field(
            "addressWithDelegates",
            sorobanAddressCredentialsWithDelegates.SorobanAddressCredentialsWithDelegates.schema
          )
        )
      ]
    }
  );
  static sorobanCredentialsSourceAccount() {
    return new SorobanCredentialsSourceAccount();
  }
  static sorobanCredentialsAddress(address) {
    return new SorobanCredentialsAddress(address);
  }
  static sorobanCredentialsAddressV2(addressV2) {
    return new SorobanCredentialsAddressV2(addressV2);
  }
  static sorobanCredentialsAddressWithDelegates(addressWithDelegates) {
    return new SorobanCredentialsAddressWithDelegates(addressWithDelegates);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new SorobanCredentialsSourceAccount();
      case 1:
        return new SorobanCredentialsAddress(
          sorobanAddressCredentials.SorobanAddressCredentials.fromXdrObject(wire.address)
        );
      case 2:
        return new SorobanCredentialsAddressV2(
          sorobanAddressCredentials.SorobanAddressCredentials.fromXdrObject(wire.addressV2)
        );
      case 3:
        return new SorobanCredentialsAddressWithDelegates(
          sorobanAddressCredentialsWithDelegates.SorobanAddressCredentialsWithDelegates.fromXdrObject(
            wire.addressWithDelegates
          )
        );
    }
    throw new jsXdr.XdrError(
      `SorobanCredentials: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SorobanCredentials variant.
   * Use this instead of `instanceof SorobanCredentials`: the exported `SorobanCredentials` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SorobanCredentials.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SorobanCredentialsBase;
  }
}
class SorobanCredentialsSourceAccount extends SorobanCredentialsBase {
  type = "sorobanCredentialsSourceAccount";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 0 };
  }
}
class SorobanCredentialsAddress extends SorobanCredentialsBase {
  type = "sorobanCredentialsAddress";
  address;
  constructor(address) {
    super();
    this.address = address;
  }
  get value() {
    return this.address;
  }
  toXdrObject() {
    return { type: 1, address: this.address.toXdrObject() };
  }
}
class SorobanCredentialsAddressV2 extends SorobanCredentialsBase {
  type = "sorobanCredentialsAddressV2";
  addressV2;
  constructor(addressV2) {
    super();
    this.addressV2 = addressV2;
  }
  get value() {
    return this.addressV2;
  }
  toXdrObject() {
    return { type: 2, addressV2: this.addressV2.toXdrObject() };
  }
}
class SorobanCredentialsAddressWithDelegates extends SorobanCredentialsBase {
  type = "sorobanCredentialsAddressWithDelegates";
  addressWithDelegates;
  constructor(addressWithDelegates) {
    super();
    this.addressWithDelegates = addressWithDelegates;
  }
  get value() {
    return this.addressWithDelegates;
  }
  toXdrObject() {
    return {
      type: 3,
      addressWithDelegates: this.addressWithDelegates.toXdrObject()
    };
  }
}
const SorobanCredentials = SorobanCredentialsBase;

exports.SorobanCredentials = SorobanCredentials;
exports.SorobanCredentialsAddress = SorobanCredentialsAddress;
exports.SorobanCredentialsAddressV2 = SorobanCredentialsAddressV2;
exports.SorobanCredentialsAddressWithDelegates = SorobanCredentialsAddressWithDelegates;
exports.SorobanCredentialsSourceAccount = SorobanCredentialsSourceAccount;
//# sourceMappingURL=soroban-credentials.js.map
