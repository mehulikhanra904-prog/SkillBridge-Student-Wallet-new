'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var claimAtomType = require('./claim-atom-type.js');
var claimOfferAtomV0 = require('./claim-offer-atom-v0.js');
var claimOfferAtom = require('./claim-offer-atom.js');
var claimLiquidityAtom = require('./claim-liquidity-atom.js');

class ClaimAtomBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ClaimAtomBase) {
      throw new TypeError(
        "new xdr.ClaimAtom(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClaimAtom.claimAtomTypeV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("ClaimAtom", {
    switchOn: claimAtomType.ClaimAtomType.schema,
    cases: [
      jsXdr.case("claimAtomTypeV0", 0, jsXdr.field("v0", claimOfferAtomV0.ClaimOfferAtomV0.schema)),
      jsXdr.case(
        "claimAtomTypeOrderBook",
        1,
        jsXdr.field("orderBook", claimOfferAtom.ClaimOfferAtom.schema)
      ),
      jsXdr.case(
        "claimAtomTypeLiquidityPool",
        2,
        jsXdr.field("liquidityPool", claimLiquidityAtom.ClaimLiquidityAtom.schema)
      )
    ]
  });
  static claimAtomTypeV0(v0) {
    return new ClaimAtomV0(v0);
  }
  static claimAtomTypeOrderBook(orderBook) {
    return new ClaimAtomOrderBook(orderBook);
  }
  static claimAtomTypeLiquidityPool(liquidityPool) {
    return new ClaimAtomLiquidityPool(liquidityPool);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ClaimAtomV0(claimOfferAtomV0.ClaimOfferAtomV0.fromXdrObject(wire.v0));
      case 1:
        return new ClaimAtomOrderBook(
          claimOfferAtom.ClaimOfferAtom.fromXdrObject(wire.orderBook)
        );
      case 2:
        return new ClaimAtomLiquidityPool(
          claimLiquidityAtom.ClaimLiquidityAtom.fromXdrObject(wire.liquidityPool)
        );
    }
    throw new jsXdr.XdrError(
      `ClaimAtom: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ClaimAtom variant.
   * Use this instead of `instanceof ClaimAtom`: the exported `ClaimAtom` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ClaimAtom.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ClaimAtomBase;
  }
}
class ClaimAtomV0 extends ClaimAtomBase {
  type = "claimAtomTypeV0";
  v0;
  constructor(v0) {
    super();
    this.v0 = v0;
  }
  get value() {
    return this.v0;
  }
  toXdrObject() {
    return { type: 0, v0: this.v0.toXdrObject() };
  }
}
class ClaimAtomOrderBook extends ClaimAtomBase {
  type = "claimAtomTypeOrderBook";
  orderBook;
  constructor(orderBook) {
    super();
    this.orderBook = orderBook;
  }
  get value() {
    return this.orderBook;
  }
  toXdrObject() {
    return { type: 1, orderBook: this.orderBook.toXdrObject() };
  }
}
class ClaimAtomLiquidityPool extends ClaimAtomBase {
  type = "claimAtomTypeLiquidityPool";
  liquidityPool;
  constructor(liquidityPool) {
    super();
    this.liquidityPool = liquidityPool;
  }
  get value() {
    return this.liquidityPool;
  }
  toXdrObject() {
    return { type: 2, liquidityPool: this.liquidityPool.toXdrObject() };
  }
}
const ClaimAtom = ClaimAtomBase;

exports.ClaimAtom = ClaimAtom;
exports.ClaimAtomLiquidityPool = ClaimAtomLiquidityPool;
exports.ClaimAtomOrderBook = ClaimAtomOrderBook;
exports.ClaimAtomV0 = ClaimAtomV0;
//# sourceMappingURL=claim-atom.js.map
