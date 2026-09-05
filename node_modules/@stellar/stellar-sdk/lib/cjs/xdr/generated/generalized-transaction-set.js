'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionSetV1 = require('./transaction-set-v1.js');

class GeneralizedTransactionSetBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === GeneralizedTransactionSetBase) {
      throw new TypeError(
        "new xdr.GeneralizedTransactionSet(...) is not supported: XDR unions are built from per-variant factories. Call xdr.GeneralizedTransactionSet.v1TxSet(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "GeneralizedTransactionSet",
    {
      switchOn: jsXdr.int32(),
      cases: [jsXdr.case("v1TxSet", 1, jsXdr.field("v1TxSet", transactionSetV1.TransactionSetV1.schema))],
      switchKey: "v"
    }
  );
  static v1TxSet(v1TxSet) {
    return new GeneralizedTransactionSetV1TxSet(v1TxSet);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 1:
        return new GeneralizedTransactionSetV1TxSet(
          transactionSetV1.TransactionSetV1.fromXdrObject(wire.v1TxSet)
        );
    }
    throw new jsXdr.XdrError(
      `GeneralizedTransactionSet: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete GeneralizedTransactionSet variant.
   * Use this instead of `instanceof GeneralizedTransactionSet`: the exported `GeneralizedTransactionSet` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `GeneralizedTransactionSet.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof GeneralizedTransactionSetBase;
  }
}
class GeneralizedTransactionSetV1TxSet extends GeneralizedTransactionSetBase {
  type = "v1TxSet";
  v1TxSet;
  constructor(v1TxSet) {
    super();
    this.v1TxSet = v1TxSet;
  }
  get value() {
    return this.v1TxSet;
  }
  toXdrObject() {
    return { v: 1, v1TxSet: this.v1TxSet.toXdrObject() };
  }
}
const GeneralizedTransactionSet = GeneralizedTransactionSetBase;

exports.GeneralizedTransactionSet = GeneralizedTransactionSet;
exports.GeneralizedTransactionSetV1TxSet = GeneralizedTransactionSetV1TxSet;
//# sourceMappingURL=generalized-transaction-set.js.map
