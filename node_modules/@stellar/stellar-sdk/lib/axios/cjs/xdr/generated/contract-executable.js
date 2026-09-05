'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var contractExecutableType = require('./contract-executable-type.js');
var hash = require('./hash.js');
var contractExecutableExternalRef = require('./contract-executable-external-ref.js');

class ContractExecutableBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === ContractExecutableBase) {
      throw new TypeError(
        "new xdr.ContractExecutable(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ContractExecutable.contractExecutableWasm(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "ContractExecutable",
    {
      switchOn: contractExecutableType.ContractExecutableType.schema,
      cases: [
        jsXdr.case("contractExecutableWasm", 0, jsXdr.field("wasmHash", hash.Hash.schema)),
        jsXdr.case("contractExecutableStellarAsset", 1, jsXdr.void()),
        jsXdr.case(
          "contractExecutableExternalRef",
          2,
          jsXdr.field("externalRef", contractExecutableExternalRef.ContractExecutableExternalRef.schema)
        )
      ]
    }
  );
  static contractExecutableWasm(wasmHash) {
    return new ContractExecutableWasm(wasmHash);
  }
  static contractExecutableStellarAsset() {
    return new ContractExecutableStellarAsset();
  }
  static contractExecutableExternalRef(externalRef) {
    return new ContractExecutableExternalRefArm(externalRef);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new ContractExecutableWasm(hash.Hash.fromXdrObject(wire.wasmHash));
      case 1:
        return new ContractExecutableStellarAsset();
      case 2:
        return new ContractExecutableExternalRefArm(
          contractExecutableExternalRef.ContractExecutableExternalRef.fromXdrObject(wire.externalRef)
        );
    }
    throw new jsXdr.XdrError(
      `ContractExecutable: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete ContractExecutable variant.
   * Use this instead of `instanceof ContractExecutable`: the exported `ContractExecutable` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `ContractExecutable.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof ContractExecutableBase;
  }
}
class ContractExecutableWasm extends ContractExecutableBase {
  type = "contractExecutableWasm";
  wasmHash;
  constructor(wasmHash) {
    super();
    this.wasmHash = wasmHash instanceof hash.Hash ? wasmHash : new hash.Hash(wasmHash);
  }
  get value() {
    return this.wasmHash;
  }
  toXdrObject() {
    return { type: 0, wasmHash: this.wasmHash.toXdrObject() };
  }
}
class ContractExecutableStellarAsset extends ContractExecutableBase {
  type = "contractExecutableStellarAsset";
  get value() {
    return null;
  }
  toXdrObject() {
    return { type: 1 };
  }
}
class ContractExecutableExternalRefArm extends ContractExecutableBase {
  type = "contractExecutableExternalRef";
  externalRef;
  constructor(externalRef) {
    super();
    this.externalRef = externalRef;
  }
  get value() {
    return this.externalRef;
  }
  toXdrObject() {
    return { type: 2, externalRef: this.externalRef.toXdrObject() };
  }
}
const ContractExecutable = ContractExecutableBase;

exports.ContractExecutable = ContractExecutable;
exports.ContractExecutableExternalRefArm = ContractExecutableExternalRefArm;
exports.ContractExecutableStellarAsset = ContractExecutableStellarAsset;
exports.ContractExecutableWasm = ContractExecutableWasm;
//# sourceMappingURL=contract-executable.js.map
