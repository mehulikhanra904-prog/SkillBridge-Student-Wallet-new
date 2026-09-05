'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var txSetComponentType = require('./tx-set-component-type.js');
var txSetComponentTxsMaybeDiscountedFee = require('./tx-set-component-txs-maybe-discounted-fee.js');

class TxSetComponentBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TxSetComponentBase) {
      throw new TypeError(
        "new xdr.TxSetComponent(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TxSetComponent.txsetCompTxsMaybeDiscountedFee(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TxSetComponent",
    {
      switchOn: txSetComponentType.TxSetComponentType.schema,
      cases: [
        jsXdr.case(
          "txsetCompTxsMaybeDiscountedFee",
          0,
          jsXdr.field(
            "txsMaybeDiscountedFee",
            txSetComponentTxsMaybeDiscountedFee.TxSetComponentTxsMaybeDiscountedFee.schema
          )
        )
      ]
    }
  );
  static txsetCompTxsMaybeDiscountedFee(txsMaybeDiscountedFee) {
    return new TxSetComponentTxsetCompTxsMaybeDiscountedFee(
      txsMaybeDiscountedFee
    );
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new TxSetComponentTxsetCompTxsMaybeDiscountedFee(
          txSetComponentTxsMaybeDiscountedFee.TxSetComponentTxsMaybeDiscountedFee.fromXdrObject(
            wire.txsMaybeDiscountedFee
          )
        );
    }
    throw new jsXdr.XdrError(
      `TxSetComponent: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TxSetComponent variant.
   * Use this instead of `instanceof TxSetComponent`: the exported `TxSetComponent` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TxSetComponent.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TxSetComponentBase;
  }
}
class TxSetComponentTxsetCompTxsMaybeDiscountedFee extends TxSetComponentBase {
  type = "txsetCompTxsMaybeDiscountedFee";
  txsMaybeDiscountedFee;
  constructor(txsMaybeDiscountedFee) {
    super();
    this.txsMaybeDiscountedFee = txsMaybeDiscountedFee;
  }
  get value() {
    return this.txsMaybeDiscountedFee;
  }
  toXdrObject() {
    return {
      type: 0,
      txsMaybeDiscountedFee: this.txsMaybeDiscountedFee.toXdrObject()
    };
  }
}
const TxSetComponent = TxSetComponentBase;

exports.TxSetComponent = TxSetComponent;
exports.TxSetComponentTxsetCompTxsMaybeDiscountedFee = TxSetComponentTxsetCompTxsMaybeDiscountedFee;
//# sourceMappingURL=tx-set-component.js.map
