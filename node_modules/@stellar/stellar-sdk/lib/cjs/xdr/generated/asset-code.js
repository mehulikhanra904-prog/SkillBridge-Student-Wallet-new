'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var assetType = require('./asset-type.js');
var assetCode4 = require('./asset-code4.js');
var assetCode12 = require('./asset-code12.js');

class AssetCodeBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === AssetCodeBase) {
      throw new TypeError(
        "new xdr.AssetCode(...) is not supported: XDR unions are built from per-variant factories. Call xdr.AssetCode.assetTypeCreditAlphanum4(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("AssetCode", {
    switchOn: assetType.AssetType.schema,
    cases: [
      jsXdr.case(
        "assetTypeCreditAlphanum4",
        1,
        jsXdr.field("assetCode4", assetCode4.AssetCode4.schema)
      ),
      jsXdr.case(
        "assetTypeCreditAlphanum12",
        2,
        jsXdr.field("assetCode12", assetCode12.AssetCode12.schema)
      )
    ]
  });
  static assetTypeCreditAlphanum4(assetCode4) {
    return new AssetCodeCreditAlphanum4(assetCode4);
  }
  static assetTypeCreditAlphanum12(assetCode12) {
    return new AssetCodeCreditAlphanum12(assetCode12);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 1:
        return new AssetCodeCreditAlphanum4(
          assetCode4.AssetCode4.fromXdrObject(wire.assetCode4)
        );
      case 2:
        return new AssetCodeCreditAlphanum12(
          assetCode12.AssetCode12.fromXdrObject(wire.assetCode12)
        );
    }
    throw new jsXdr.XdrError(
      `AssetCode: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete AssetCode variant.
   * Use this instead of `instanceof AssetCode`: the exported `AssetCode` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `AssetCode.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof AssetCodeBase;
  }
}
class AssetCodeCreditAlphanum4 extends AssetCodeBase {
  type = "assetTypeCreditAlphanum4";
  assetCode4;
  constructor(assetCode4$1) {
    super();
    this.assetCode4 = assetCode4$1 instanceof assetCode4.AssetCode4 ? assetCode4$1 : new assetCode4.AssetCode4(assetCode4$1);
  }
  get value() {
    return this.assetCode4;
  }
  toXdrObject() {
    return { type: 1, assetCode4: this.assetCode4.toXdrObject() };
  }
}
class AssetCodeCreditAlphanum12 extends AssetCodeBase {
  type = "assetTypeCreditAlphanum12";
  assetCode12;
  constructor(assetCode12$1) {
    super();
    this.assetCode12 = assetCode12$1 instanceof assetCode12.AssetCode12 ? assetCode12$1 : new assetCode12.AssetCode12(assetCode12$1);
  }
  get value() {
    return this.assetCode12;
  }
  toXdrObject() {
    return { type: 2, assetCode12: this.assetCode12.toXdrObject() };
  }
}
const AssetCode = AssetCodeBase;

exports.AssetCode = AssetCode;
exports.AssetCodeCreditAlphanum12 = AssetCodeCreditAlphanum12;
exports.AssetCodeCreditAlphanum4 = AssetCodeCreditAlphanum4;
//# sourceMappingURL=asset-code.js.map
