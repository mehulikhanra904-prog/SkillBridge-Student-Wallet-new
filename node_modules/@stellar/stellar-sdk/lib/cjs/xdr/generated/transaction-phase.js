'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var txSetComponent = require('./tx-set-component.js');
var parallelTxsComponent = require('./parallel-txs-component.js');

class TransactionPhaseBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TransactionPhaseBase) {
      throw new TypeError(
        "new xdr.TransactionPhase(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionPhase.v0Components(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TransactionPhase",
    {
      switchOn: jsXdr.int32(),
      cases: [
        jsXdr.case(
          "v0Components",
          0,
          jsXdr.field(
            "v0Components",
            jsXdr.array(txSetComponent.TxSetComponent.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
          )
        ),
        jsXdr.case(
          "parallelTxsComponent",
          1,
          jsXdr.field("parallelTxsComponent", parallelTxsComponent.ParallelTxsComponent.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static v0Components(v0Components) {
    return new TransactionPhaseV0Components(v0Components);
  }
  static parallelTxsComponent(parallelTxsComponent) {
    return new TransactionPhaseParallelTxsComponent(parallelTxsComponent);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TransactionPhaseV0Components(
          wire.v0Components.map((w) => txSetComponent.TxSetComponent.fromXdrObject(w))
        );
      case 1:
        return new TransactionPhaseParallelTxsComponent(
          parallelTxsComponent.ParallelTxsComponent.fromXdrObject(wire.parallelTxsComponent)
        );
    }
    throw new jsXdr.XdrError(
      `TransactionPhase: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionPhase variant.
   * Use this instead of `instanceof TransactionPhase`: the exported `TransactionPhase` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionPhase.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionPhaseBase;
  }
}
class TransactionPhaseV0Components extends TransactionPhaseBase {
  type = "v0Components";
  v0Components;
  constructor(v0Components) {
    super();
    this.v0Components = v0Components;
  }
  get value() {
    return this.v0Components;
  }
  toXdrObject() {
    return {
      v: 0,
      v0Components: this.v0Components.map((v) => v.toXdrObject())
    };
  }
}
class TransactionPhaseParallelTxsComponent extends TransactionPhaseBase {
  type = "parallelTxsComponent";
  parallelTxsComponent;
  constructor(parallelTxsComponent) {
    super();
    this.parallelTxsComponent = parallelTxsComponent;
  }
  get value() {
    return this.parallelTxsComponent;
  }
  toXdrObject() {
    return {
      v: 1,
      parallelTxsComponent: this.parallelTxsComponent.toXdrObject()
    };
  }
}
const TransactionPhase = TransactionPhaseBase;

exports.TransactionPhase = TransactionPhase;
exports.TransactionPhaseParallelTxsComponent = TransactionPhaseParallelTxsComponent;
exports.TransactionPhaseV0Components = TransactionPhaseV0Components;
//# sourceMappingURL=transaction-phase.js.map
