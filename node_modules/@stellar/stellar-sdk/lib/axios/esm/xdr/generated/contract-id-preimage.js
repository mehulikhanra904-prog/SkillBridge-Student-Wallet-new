import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractIdPreimageType } from './contract-id-preimage-type.js';
import { ContractIdPreimageFromAddress } from './contract-id-preimage-from-address.js';
import { Asset as Asset$1 } from './asset.js';

class ContractIdPreimageBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ContractIdPreimageBase) {
      throw new TypeError(
        "new xdr.ContractIdPreimage(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ContractIdPreimage.contractIdPreimageFromAddress(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ContractIdPreimage",
    {
      switchOn: ContractIdPreimageType.schema,
      cases: [
        _case(
          "contractIdPreimageFromAddress",
          0,
          field("fromAddress", ContractIdPreimageFromAddress.schema)
        ),
        _case(
          "contractIdPreimageFromAsset",
          1,
          field("fromAsset", Asset$1.schema)
        )
      ]
    }
  );
  static contractIdPreimageFromAddress(fromAddress) {
    return new ContractIdPreimageAddress(fromAddress);
  }
  static contractIdPreimageFromAsset(fromAsset) {
    return new ContractIdPreimageAsset(fromAsset);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ContractIdPreimageAddress(
          ContractIdPreimageFromAddress.fromXdrObject(wire.fromAddress)
        );
      case 1:
        return new ContractIdPreimageAsset(Asset$1.fromXdrObject(wire.fromAsset));
    }
    throw new XdrError(
      `ContractIdPreimage: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ContractIdPreimage variant.
   * Use this instead of `instanceof ContractIdPreimage`: the exported `ContractIdPreimage` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ContractIdPreimage.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ContractIdPreimageBase;
  }
}
class ContractIdPreimageAddress extends ContractIdPreimageBase {
  type = "contractIdPreimageFromAddress";
  fromAddress;
  constructor(fromAddress) {
    super();
    this.fromAddress = fromAddress;
  }
  get value() {
    return this.fromAddress;
  }
  toXdrObject() {
    return { type: 0, fromAddress: this.fromAddress.toXdrObject() };
  }
}
class ContractIdPreimageAsset extends ContractIdPreimageBase {
  type = "contractIdPreimageFromAsset";
  fromAsset;
  constructor(fromAsset) {
    super();
    this.fromAsset = fromAsset;
  }
  get value() {
    return this.fromAsset;
  }
  toXdrObject() {
    return { type: 1, fromAsset: this.fromAsset.toXdrObject() };
  }
}
const ContractIdPreimage = ContractIdPreimageBase;

export { ContractIdPreimage, ContractIdPreimageAddress, ContractIdPreimageAsset };
//# sourceMappingURL=contract-id-preimage.js.map
