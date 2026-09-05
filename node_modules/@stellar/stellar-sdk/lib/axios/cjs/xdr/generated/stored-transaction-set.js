'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var transactionSet = require('./transaction-set.js');
var generalizedTransactionSet = require('./generalized-transaction-set.js');

class StoredTransactionSetBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === StoredTransactionSetBase) {
      throw new TypeError(
        "new xdr.StoredTransactionSet(...) is not supported: XDR unions are built from per-variant factories. Call xdr.StoredTransactionSet.txSet(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "StoredTransactionSet",
    {
      switchOn: jsXdr.int32(),
      cases: [
        jsXdr.case("txSet", 0, jsXdr.field("txSet", transactionSet.TransactionSet.schema)),
        jsXdr.case(
          "generalizedTxSet",
          1,
          jsXdr.field("generalizedTxSet", generalizedTransactionSet.GeneralizedTransactionSet.schema)
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
          transactionSet.TransactionSet.fromXdrObject(wire.txSet)
        );
      case 1:
        return new StoredTransactionSetGeneralizedTxSet(
          generalizedTransactionSet.GeneralizedTransactionSet.fromXdrObject(wire.generalizedTxSet)
        );
    }
    throw new jsXdr.XdrError(
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

exports.StoredTransactionSet = StoredTransactionSet;
exports.StoredTransactionSetGeneralizedTxSet = StoredTransactionSetGeneralizedTxSet;
exports.StoredTransactionSetTxSet = StoredTransactionSetTxSet;
//# sourceMappingURL=stored-transaction-set.js.map
