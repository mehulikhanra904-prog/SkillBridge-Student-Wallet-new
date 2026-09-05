'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var sorobanAuthorizedFunctionType = require('./soroban-authorized-function-type.js');
var invokeContractArgs = require('./invoke-contract-args.js');
var createContractArgs = require('./create-contract-args.js');
var createContractArgsV2 = require('./create-contract-args-v2.js');

class SorobanAuthorizedFunctionBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === SorobanAuthorizedFunctionBase) {
      throw new TypeError(
        "new xdr.SorobanAuthorizedFunction(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SorobanAuthorizedFunction.sorobanAuthorizedFunctionTypeContractFn(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union(
    "SorobanAuthorizedFunction",
    {
      switchOn: sorobanAuthorizedFunctionType.SorobanAuthorizedFunctionType.schema,
      cases: [
        jsXdr.case(
          "sorobanAuthorizedFunctionTypeContractFn",
          0,
          jsXdr.field("contractFn", invokeContractArgs.InvokeContractArgs.schema)
        ),
        jsXdr.case(
          "sorobanAuthorizedFunctionTypeCreateContractHostFn",
          1,
          jsXdr.field("createContractHostFn", createContractArgs.CreateContractArgs.schema)
        ),
        jsXdr.case(
          "sorobanAuthorizedFunctionTypeCreateContractV2HostFn",
          2,
          jsXdr.field("createContractV2HostFn", createContractArgsV2.CreateContractArgsV2.schema)
        )
      ]
    }
  );
  static sorobanAuthorizedFunctionTypeContractFn(contractFn) {
    return new SorobanAuthorizedFunctionContractFn(contractFn);
  }
  static sorobanAuthorizedFunctionTypeCreateContractHostFn(createContractHostFn) {
    return new SorobanAuthorizedFunctionCreateContractHostFn(
      createContractHostFn
    );
  }
  static sorobanAuthorizedFunctionTypeCreateContractV2HostFn(createContractV2HostFn) {
    return new SorobanAuthorizedFunctionCreateContractV2HostFn(
      createContractV2HostFn
    );
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new SorobanAuthorizedFunctionContractFn(
          invokeContractArgs.InvokeContractArgs.fromXdrObject(wire.contractFn)
        );
      case 1:
        return new SorobanAuthorizedFunctionCreateContractHostFn(
          createContractArgs.CreateContractArgs.fromXdrObject(wire.createContractHostFn)
        );
      case 2:
        return new SorobanAuthorizedFunctionCreateContractV2HostFn(
          createContractArgsV2.CreateContractArgsV2.fromXdrObject(wire.createContractV2HostFn)
        );
    }
    throw new jsXdr.XdrError(
      `SorobanAuthorizedFunction: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete SorobanAuthorizedFunction variant.
   * Use this instead of `instanceof SorobanAuthorizedFunction`: the exported `SorobanAuthorizedFunction` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `SorobanAuthorizedFunction.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof SorobanAuthorizedFunctionBase;
  }
}
class SorobanAuthorizedFunctionContractFn extends SorobanAuthorizedFunctionBase {
  type = "sorobanAuthorizedFunctionTypeContractFn";
  contractFn;
  constructor(contractFn) {
    super();
    this.contractFn = contractFn;
  }
  get value() {
    return this.contractFn;
  }
  toXdrObject() {
    return { type: 0, contractFn: this.contractFn.toXdrObject() };
  }
}
class SorobanAuthorizedFunctionCreateContractHostFn extends SorobanAuthorizedFunctionBase {
  type = "sorobanAuthorizedFunctionTypeCreateContractHostFn";
  createContractHostFn;
  constructor(createContractHostFn) {
    super();
    this.createContractHostFn = createContractHostFn;
  }
  get value() {
    return this.createContractHostFn;
  }
  toXdrObject() {
    return {
      type: 1,
      createContractHostFn: this.createContractHostFn.toXdrObject()
    };
  }
}
class SorobanAuthorizedFunctionCreateContractV2HostFn extends SorobanAuthorizedFunctionBase {
  type = "sorobanAuthorizedFunctionTypeCreateContractV2HostFn";
  createContractV2HostFn;
  constructor(createContractV2HostFn) {
    super();
    this.createContractV2HostFn = createContractV2HostFn;
  }
  get value() {
    return this.createContractV2HostFn;
  }
  toXdrObject() {
    return {
      type: 2,
      createContractV2HostFn: this.createContractV2HostFn.toXdrObject()
    };
  }
}
const SorobanAuthorizedFunction = SorobanAuthorizedFunctionBase;

exports.SorobanAuthorizedFunction = SorobanAuthorizedFunction;
exports.SorobanAuthorizedFunctionContractFn = SorobanAuthorizedFunctionContractFn;
exports.SorobanAuthorizedFunctionCreateContractHostFn = SorobanAuthorizedFunctionCreateContractHostFn;
exports.SorobanAuthorizedFunctionCreateContractV2HostFn = SorobanAuthorizedFunctionCreateContractV2HostFn;
//# sourceMappingURL=soroban-authorized-function.js.map
