import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ClaimAtomType } from './claim-atom-type.js';
import { ClaimOfferAtomV0 } from './claim-offer-atom-v0.js';
import { ClaimOfferAtom } from './claim-offer-atom.js';
import { ClaimLiquidityAtom } from './claim-liquidity-atom.js';

class ClaimAtomBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ClaimAtomBase) {
      throw new TypeError(
        "new xdr.ClaimAtom(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ClaimAtom.claimAtomTypeV0(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union("ClaimAtom", {
    switchOn: ClaimAtomType.schema,
    cases: [
      _case("claimAtomTypeV0", 0, field("v0", ClaimOfferAtomV0.schema)),
      _case(
        "claimAtomTypeOrderBook",
        1,
        field("orderBook", ClaimOfferAtom.schema)
      ),
      _case(
        "claimAtomTypeLiquidityPool",
        2,
        field("liquidityPool", ClaimLiquidityAtom.schema)
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
        return new ClaimAtomV0(ClaimOfferAtomV0.fromXdrObject(wire.v0));
      case 1:
        return new ClaimAtomOrderBook(
          ClaimOfferAtom.fromXdrObject(wire.orderBook)
        );
      case 2:
        return new ClaimAtomLiquidityPool(
          ClaimLiquidityAtom.fromXdrObject(wire.liquidityPool)
        );
    }
    throw new XdrError(
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

export { ClaimAtom, ClaimAtomLiquidityPool, ClaimAtomOrderBook, ClaimAtomV0 };
//# sourceMappingURL=claim-atom.js.map
