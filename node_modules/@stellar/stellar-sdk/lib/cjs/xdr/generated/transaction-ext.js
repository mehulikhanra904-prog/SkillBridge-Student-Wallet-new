'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanTransactionData = require('./soroban-transaction-data.js');

class TransactionExtBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TransactionExtBase) {
      throw new TypeError(
        "new xdr.TransactionExt(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionExt.v0() (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TransactionExt",
    {
      switchOn: jsXdr.int32(),
      cases: [
        jsXdr.case("v0", 0, jsXdr.void()),
        jsXdr.case(
          "sorobanData",
          1,
          jsXdr.field("sorobanData", sorobanTransactionData.SorobanTransactionData.schema)
        )
      ],
      switchKey: "v"
    }
  );
  static v0() {
    return new TransactionExtV0();
  }
  static sorobanData(sorobanData) {
    return new TransactionExtSorobanData(sorobanData);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TransactionExtV0();
      case 1:
        return new TransactionExtSorobanData(
          sorobanTransactionData.SorobanTransactionData.fromXdrObject(wire.sorobanData)
        );
    }
    throw new jsXdr.XdrError(
      `TransactionExt: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionExt variant.
   * Use this instead of `instanceof TransactionExt`: the exported `TransactionExt` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionExt.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionExtBase;
  }
}
class TransactionExtV0 extends TransactionExtBase {
  type = "v0";
  get value() {
    return null;
  }
  toXdrObject() {
    return { v: 0 };
  }
}
class TransactionExtSorobanData extends TransactionExtBase {
  type = "sorobanData";
  sorobanData;
  constructor(sorobanData) {
    super();
    this.sorobanData = sorobanData;
  }
  get value() {
    return this.sorobanData;
  }
  toXdrObject() {
    return { v: 1, sorobanData: this.sorobanData.toXdrObject() };
  }
}
const TransactionExt = TransactionExtBase;

exports.TransactionExt = TransactionExt;
exports.TransactionExtSorobanData = TransactionExtSorobanData;
exports.TransactionExtV0 = TransactionExtV0;
//# sourceMappingURL=transaction-ext.js.map
