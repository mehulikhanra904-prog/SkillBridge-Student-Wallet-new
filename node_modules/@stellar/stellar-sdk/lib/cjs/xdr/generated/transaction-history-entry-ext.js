'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var generalizedTransactionSet = require('./generalized-transaction-set.js');

class TransactionHistoryEntryExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TransactionHistoryEntryExtBase) {
      throw new TypeError(
        "new xdr.TransactionHistoryEntryExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionHistoryEntryExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TransactionHistoryEntryExt",
    {
      switchOn: jsXdr.int32(),
      cases: [
        jsXdr.case("v0", 0, jsXdr.void()),
        jsXdr.case(
          "generalizedTxSet",
          1,
          jsXdr.field("generalizedTxSet", generalizedTransactionSet.GeneralizedTransactionSet.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new TransactionHistoryEntryExtV0();
  }
  static generalizedTxSet(generalizedTxSet) {
    return new TransactionHistoryEntryExtGeneralizedTxSet(generalizedTxSet);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TransactionHistoryEntryExtV0();
      case 1:
        return new TransactionHistoryEntryExtGeneralizedTxSet(
          generalizedTransactionSet.GeneralizedTransactionSet.fromXdrObject(wire.generalizedTxSet)
        );
    }
    throw new jsXdr.XdrError(
      `TransactionHistoryEntryExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionHistoryEntryExt variant.
   * Use this instead of `instanceof TransactionHistoryEntryExt`: the exported `TransactionHistoryEntryExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionHistoryEntryExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionHistoryEntryExtBase;
  }
}
class TransactionHistoryEntryExtV0 extends TransactionHistoryEntryExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class TransactionHistoryEntryExtGeneralizedTxSet extends TransactionHistoryEntryExtBase {
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
const TransactionHistoryEntryExt = TransactionHistoryEntryExtBase;

exports.TransactionHistoryEntryExt = TransactionHistoryEntryExt;
exports.TransactionHistoryEntryExtGeneralizedTxSet = TransactionHistoryEntryExtGeneralizedTxSet;
exports.TransactionHistoryEntryExtV0 = TransactionHistoryEntryExtV0;
//# sourceMappingURL=transaction-history-entry-ext.js.map
