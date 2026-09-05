import { union, case as _case, field, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { TransactionSet } from './transaction-set.js';
import { GeneralizedTransactionSet } from './generalized-transaction-set.js';

class StoredTransactionSetBase extends XdrValue {
  constructor() {
    super();
    if (new.target === StoredTransactionSetBase) {
      throw new TypeError(
        "new xdr.StoredTransactionSet(...) is not supported: XDR unions are built from per-variant factories. Call xdr.StoredTransactionSet.txSet(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "StoredTransactionSet",
    {
      switchOn: int32(),
      cases: [
        _case("txSet", 0, field("txSet", TransactionSet.schema)),
        _case(
          "generalizedTxSet",
          1,
          field("generalizedTxSet", GeneralizedTransactionSet.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static txSet(txSet) {
    return new StoredTransactionSetTxSet(txSet);
  }
  static generalizedTxSet(generalizedTxSet) {
    return new StoredTransactionSetGeneralizedTxSet(generalizedTxSet);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new StoredTransactionSetTxSet(
          TransactionSet.fromXdrObject(wire.txSet)
        );
      case 1:
        return new StoredTransactionSetGeneralizedTxSet(
          GeneralizedTransactionSet.fromXdrObject(wire.generalizedTxSet)
        );
    }
    throw new XdrError(
      `StoredTransactionSet: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete StoredTransactionSet variant.
   * Use this instead of `instanceof StoredTransactionSet`: the exported `StoredTransactionSet` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `StoredTransactionSet.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof StoredTransactionSetBase;
  }
}
class StoredTransactionSetTxSet extends StoredTransactionSetBase {
  type = "txSet";
  txSet;
  constructor(txSet) {
    super();
    this.txSet = txSet;
  }
  get value() {
    return this.txSet;
  }
  toXdrObject() {
    return { v: 0, txSet: this.txSet.toXdrObject() };
  }
}
class StoredTransactionSetGeneralizedTxSet extends StoredTransactionSetBase {
  type = "generalizedTxSet";
  generalizedTxSet;
  constructor(generalizedTxSet) {
    super();
    this.generalizedTxSet = generalizedTxSet;
  }
  get value() {
    return this.generalizedTxSet;
  }
  toXdrObject() {
    return { v: 1, generalizedTxSet: this.generalizedTxSet.toXdrObject() };
  }
}
const StoredTransactionSet = StoredTransactionSetBase;

export { StoredTransactionSet, StoredTransactionSetGeneralizedTxSet, StoredTransactionSetTxSet };
//# sourceMappingURL=stored-transaction-set.js.map
