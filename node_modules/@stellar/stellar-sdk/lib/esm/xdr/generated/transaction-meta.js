import { union, case as _case, field, array, UNBOUNDED_MAX_LENGTH, int32, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { OperationMeta } from './operation-meta.js';
import { TransactionMetaV1 } from './transaction-meta-v1.js';
import { TransactionMetaV2 } from './transaction-meta-v2.js';
import { TransactionMetaV3 } from './transaction-meta-v3.js';
import { TransactionMetaV4 } from './transaction-meta-v4.js';

class TransactionMetaBase extends XdrValue {
  constructor() {
    super();
    if (new.target === TransactionMetaBase) {
      throw new TypeError(
        "new xdr.TransactionMeta(...) is not supported: XDR unions are built from per-variant factories. Call xdr.TransactionMeta.operations(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "TransactionMeta",
    {
      switchOn: int32(),
      cases: [
        _case(
          "operations",
          0,
          field(
            "operations",
            array(OperationMeta.schema, UNBOUNDED_MAX_LENGTH)
          )
        ),
        _case("v1", 1, field("v1", TransactionMetaV1.schema)),
        _case("v2", 2, field("v2", TransactionMetaV2.schema)),
        _case("v3", 3, field("v3", TransactionMetaV3.schema)),
        _case("v4", 4, field("v4", TransactionMetaV4.schema))
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
          wire.operations.map((w) => OperationMeta.fromXdrObject(w))
        );
      case 1:
        return new TransactionMetaV1Arm(
          TransactionMetaV1.fromXdrObject(wire.v1)
        );
      case 2:
        return new TransactionMetaV2Arm(
          TransactionMetaV2.fromXdrObject(wire.v2)
        );
      case 3:
        return new TransactionMetaV3Arm(
          TransactionMetaV3.fromXdrObject(wire.v3)
        );
      case 4:
        return new TransactionMetaV4Arm(
          TransactionMetaV4.fromXdrObject(wire.v4)
        );
    }
    throw new XdrError(
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

export { TransactionMeta, TransactionMetaOperations, TransactionMetaV1Arm, TransactionMetaV2Arm, TransactionMetaV3Arm, TransactionMetaV4Arm };
//# sourceMappingURL=transaction-meta.js.map
