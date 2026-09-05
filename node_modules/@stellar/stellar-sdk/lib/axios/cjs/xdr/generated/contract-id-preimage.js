'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var contractIdPreimageType = require('./contract-id-preimage-type.js');
var contractIdPreimageFromAddress = require('./contract-id-preimage-from-address.js');
var asset = require('./asset.js');

class ContractIdPreimageBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ContractIdPreimageBase) {
      throw new TypeError(
        "new xdr.ContractIdPreimage(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ContractIdPreimage.contractIdPreimageFromAddress(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ContractIdPreimage",
    {
      switchOn: contractIdPreimageType.ContractIdPreimageType.schema,
      cases: [
        jsXdr.case(
          "contractIdPreimageFromAddress",
          0,
          jsXdr.field("fromAddress", contractIdPreimageFromAddress.ContractIdPreimageFromAddress.schema)
        ),
        jsXdr.case(
          "contractIdPreimageFromAsset",
          1,
          jsXdr.field("fromAsset", asset.Asset.schema)
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
          contractIdPreimageFromAddress.ContractIdPreimageFromAddress.fromXdrObject(wire.fromAddress)
        );
      case 1:
        return new ContractIdPreimageAsset(asset.Asset.fromXdrObject(wire.fromAsset));
    }
    throw new jsXdr.XdrError(
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

exports.ContractIdPreimage = ContractIdPreimage;
exports.ContractIdPreimageAddress = ContractIdPreimageAddress;
exports.ContractIdPreimageAsset = ContractIdPreimageAsset;
//# sourceMappingURL=contract-id-preimage.js.map
