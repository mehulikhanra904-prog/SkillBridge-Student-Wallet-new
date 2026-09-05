'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var operationMeta = require('./operation-meta.js');
var transactionMetaV1 = require('./transaction-meta-v1.js');
var transactionMetaV2 = require('./transaction-meta-v2.js');
var transactionMetaV3 = require('./transaction-meta-v3.js');
var transactionMetaV4 = require('./transaction-meta-v4.js');

class TransactionMetaBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === TransactionMetaBase) {
      throw new TypeError(
        "new xdr.TransactionMeta(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionMeta.operations(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "TransactionMeta",
    {
      switchOn: jsXdr.int32(),
      cases: [
        jsXdr.case(
          "operations",
          0,
          jsXdr.field(
            "operations",
            jsXdr.array(operationMeta.OperationMeta.schema, jsXdr.UNBOUNDED_MAX_LENGTH)
          )
        ),
        jsXdr.case("v1", 1, jsXdr.field("v1", transactionMetaV1.TransactionMetaV1.schema)),
        jsXdr.case("v2", 2, jsXdr.field("v2", transactionMetaV2.TransactionMetaV2.schema)),
        jsXdr.case("v3", 3, jsXdr.field("v3", transactionMetaV3.TransactionMetaV3.schema)),
        jsXdr.case("v4", 4, jsXdr.field("v4", transactionMetaV4.TransactionMetaV4.schema))
      ],
      switchKey: "v"
    }
  );
  static operations(operations) {
    return new TransactionMetaOperations(operations);
  }
  static v1(v1) {
    return new TransactionMetaV1Arm(v1);
  }
  static v2(v2) {
    return new TransactionMetaV2Arm(v2);
  }
  static v3(v3) {
    return new TransactionMetaV3Arm(v3);
  }
  static v4(v4) {
    return new TransactionMetaV4Arm(v4);
  }
  static fromXdrObject(wire) {
    switch (wire.v) {
      case 0:
        return new TransactionMetaOperations(
          wire.operations.map((w) => operationMeta.OperationMeta.fromXdrObject(w))
        );
      case 1:
        return new TransactionMetaV1Arm(
          transactionMetaV1.TransactionMetaV1.fromXdrObject(wire.v1)
        );
      case 2:
        return new TransactionMetaV2Arm(
          transactionMetaV2.TransactionMetaV2.fromXdrObject(wire.v2)
        );
      case 3:
        return new TransactionMetaV3Arm(
          transactionMetaV3.TransactionMetaV3.fromXdrObject(wire.v3)
        );
      case 4:
        return new TransactionMetaV4Arm(
          transactionMetaV4.TransactionMetaV4.fromXdrObject(wire.v4)
        );
    }
    throw new jsXdr.XdrError(
      `TransactionMeta: unknown v ${wire.v}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete TransactionMeta variant.
   * Use this instead of `instanceof TransactionMeta`: the exported `TransactionMeta` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `TransactionMeta.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof TransactionMetaBase;
  }
}
class TransactionMetaOperations extends TransactionMetaBase {
  type = "operations";
  operations;
  constructor(operations) {
    super();
    this.operations = operations;
  }
  get value() {
    return this.operations;
  }
  toXdrObject() {
    return { v: 0, operations: this.operations.map((v) => v.toXdrObject()) };
  }
}
class TransactionMetaV1Arm extends TransactionMetaBase {
  type = "v1";
  v1;
  constructor(v1) {
    super();
    this.v1 = v1;
  }
  get value() {
    return this.v1;
  }
  toXdrObject() {
    return { v: 1, v1: this.v1.toXdrObject() };
  }
}
class TransactionMetaV2Arm extends TransactionMetaBase {
  type = "v2";
  v2;
  constructor(v2) {
    super();
    this.v2 = v2;
  }
  get value() {
    return this.v2;
  }
  toXdrObject() {
    return { v: 2, v2: this.v2.toXdrObject() };
  }
}
class TransactionMetaV3Arm extends TransactionMetaBase {
  type = "v3";
  v3;
  constructor(v3) {
    super();
    this.v3 = v3;
  }
  get value() {
    return this.v3;
  }
  toXdrObject() {
    return { v: 3, v3: this.v3.toXdrObject() };
  }
}
class TransactionMetaV4Arm extends TransactionMetaBase {
  type = "v4";
  v4;
  constructor(v4) {
    super();
    this.v4 = v4;
  }
  get value() {
    return this.v4;
  }
  toXdrObject() {
    return { v: 4, v4: this.v4.toXdrObject() };
  }
}
const TransactionMeta = TransactionMetaBase;

exports.TransactionMeta = TransactionMeta;
exports.TransactionMetaOperations = TransactionMetaOperations;
exports.TransactionMetaV1Arm = TransactionMetaV1Arm;
exports.TransactionMetaV2Arm = TransactionMetaV2Arm;
exports.TransactionMetaV3Arm = TransactionMetaV3Arm;
exports.TransactionMetaV4Arm = TransactionMetaV4Arm;
//# sourceMappingURL=transaction-meta.js.map
