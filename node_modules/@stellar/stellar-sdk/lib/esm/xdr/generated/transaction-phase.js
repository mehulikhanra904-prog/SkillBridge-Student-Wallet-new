import { union, case as _case, field, array, UNBOUNDED_MAX_LENGTH, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TxSetComponent } from './tx-set-component.js';
import { ParallelTxsComponent } from './parallel-txs-component.js';

class TransactionPhaseBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TransactionPhaseBase) {
      throw new TypeError(
        "new xdr.TransactionPhase(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionPhase.v0Components(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TransactionPhase",
    {
      switchOn: int32(),
      cases: [
        _case(
          "v0Components",
          0,
          field(
            "v0Components",
            array(TxSetComponent.schema, UNBOUNDED_MAX_LENGTH)
          )
        ),
        _case(
          "parallelTxsComponent",
          1,
          field("parallelTxsComponent", ParallelTxsComponent.schema)
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
          wire.v0Components.map((w) => TxSetComponent.fromXdrObject(w))
        );
      case 1:
        return new TransactionPhaseParallelTxsComponent(
          ParallelTxsComponent.fromXdrObject(wire.parallelTxsComponent)
        );
    }
    throw new XdrError(
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

export { TransactionPhase, TransactionPhaseParallelTxsComponent, TransactionPhaseV0Components };
//# sourceMappingURL=transaction-phase.js.map
