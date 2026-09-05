import { union, case as _case, void as _void, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanCredentialsType } from './soroban-credentials-type.js';
import { SorobanAddressCredentials } from './soroban-address-credentials.js';
import { SorobanAddressCredentialsWithDelegates } from './soroban-address-credentials-with-delegates.js';

class SorobanCredentialsBase extends XdrValue {
  constructor() {
    super();
    if (new.target === SorobanCredentialsBase) {
      throw new TypeError(
        "new xdr.SorobanCredentials(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SorobanCredentials.sorobanCredentialsSourceAccount() (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "SorobanCredentials",
    {
      switchOn: SorobanCredentialsType.schema,
      cases: [
        _case("sorobanCredentialsSourceAccount", 0, _void()),
        _case(
          "sorobanCredentialsAddress",
          1,
          field("address", SorobanAddressCredentials.schema)
        ),
        _case(
          "sorobanCredentialsAddressV2",
          2,
          field("addressV2", SorobanAddressCredentials.schema)
        ),
        _case(
          "sorobanCredentialsAddressWithDelegates",
          3,
          field(
            "addressWithDelegates",
            SorobanAddressCredentialsWithDelegates.schema
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
          SorobanAddressCredentials.fromXdrObject(wire.address)
        );
      case 2:
        return new SorobanCredentialsAddressV2(
          SorobanAddressCredentials.fromXdrObject(wire.addressV2)
        );
      case 3:
        return new SorobanCredentialsAddressWithDelegates(
          SorobanAddressCredentialsWithDelegates.fromXdrObject(
            wire.addressWithDelegates
          )
        );
    }
    throw new XdrError(
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

export { SorobanCredentials, SorobanCredentialsAddress, SorobanCredentialsAddressV2, SorobanCredentialsAddressWithDelegates, SorobanCredentialsSourceAccount };
//# sourceMappingURL=soroban-credentials.js.map
