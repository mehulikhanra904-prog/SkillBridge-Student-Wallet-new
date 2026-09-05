import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TxSetComponentType } from './tx-set-component-type.js';
import { TxSetComponentTxsMaybeDiscountedFee } from './tx-set-component-txs-maybe-discounted-fee.js';

class TxSetComponentBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TxSetComponentBase) {
      throw new TypeError(
        "new xdr.TxSetComponent(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TxSetComponent.txsetCompTxsMaybeDiscountedFee(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TxSetComponent",
    {
      switchOn: TxSetComponentType.schema,
      cases: [
        _case(
          "txsetCompTxsMaybeDiscountedFee",
          0,
          field(
            "txsMaybeDiscountedFee",
            TxSetComponentTxsMaybeDiscountedFee.schema
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
          TxSetComponentTxsMaybeDiscountedFee.fromXdrObject(
            wire.txsMaybeDiscountedFee
          )
        );
    }
    throw new XdrError(
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

export { TxSetComponent, TxSetComponentTxsetCompTxsMaybeDiscountedFee };
//# sourceMappingURL=tx-set-component.js.map
