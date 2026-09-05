'use strict';

var jsXdr = require('@stellar/js-xdr');
var xdrValue = require('../values/xdr-value.js');
var hostFunctionType = require('./host-function-type.js');
var invokeContractArgs = require('./invoke-contract-args.js');
var createContractArgs = require('./create-contract-args.js');
var createContractArgsV2 = require('./create-contract-args-v2.js');

class HostFunctionBase extends xdrValue.XdrValue {
  constructor() {
    super();
    if (new.target === HostFunctionBase) {
      throw new TypeError(
        "new xdr.HostFunction(...) is not supported: XDR unions are built from per-variant factories. Call xdr.HostFunction.hostFunctionTypeInvokeContract(...) (or another arm factory) instead."
      );
    }
  }
  static schema = jsXdr.union("HostFunction", {
    switchOn: hostFunctionType.HostFunctionType.schema,
    cases: [
      jsXdr.case(
        "hostFunctionTypeInvokeContract",
        0,
        jsXdr.field("invokeContract", invokeContractArgs.InvokeContractArgs.schema)
      ),
      jsXdr.case(
        "hostFunctionTypeCreateContract",
        1,
        jsXdr.field("createContract", createContractArgs.CreateContractArgs.schema)
      ),
      jsXdr.case(
        "hostFunctionTypeUploadContractWasm",
        2,
        jsXdr.field("wasm", jsXdr.varOpaque(jsXdr.UNBOUNDED_MAX_LENGTH))
      ),
      jsXdr.case(
        "hostFunctionTypeCreateContractV2",
        3,
        jsXdr.field("createContractV2", createContractArgsV2.CreateContractArgsV2.schema)
      )
    ]
  });
  static hostFunctionTypeInvokeContract(invokeContract) {
    return new HostFunctionInvokeContract(invokeContract);
  }
  static hostFunctionTypeCreateContract(createContract) {
    return new HostFunctionCreateContract(createContract);
  }
  static hostFunctionTypeUploadContractWasm(wasm) {
    return new HostFunctionUploadContractWasm(wasm);
  }
  static hostFunctionTypeCreateContractV2(createContractV2) {
    return new HostFunctionCreateContractV2(createContractV2);
  }
  static fromXdrObject(wire) {
    switch (wire.type) {
      case 0:
        return new HostFunctionInvokeContract(
          invokeContractArgs.InvokeContractArgs.fromXdrObject(wire.invokeContract)
        );
      case 1:
        return new HostFunctionCreateContract(
          createContractArgs.CreateContractArgs.fromXdrObject(wire.createContract)
        );
      case 2:
        return new HostFunctionUploadContractWasm(wire.wasm);
      case 3:
        return new HostFunctionCreateContractV2(
          createContractArgsV2.CreateContractArgsV2.fromXdrObject(wire.createContractV2)
        );
    }
    throw new jsXdr.XdrError(
      `HostFunction: unknown type ${wire.type}`
    );
  }
  /**
   * Type guard narrowing an unknown value to a concrete HostFunction variant.
   * Use this instead of `instanceof HostFunction`: the exported `HostFunction` value
   * is the abstract base, so `instanceof` narrows to the base (not the
   * variant union) and forces a cast. `HostFunction.is(x)` narrows to the union.
   */
  static is(value) {
    return value instanceof HostFunctionBase;
  }
}
class HostFunctionInvokeContract extends HostFunctionBase {
  type = "hostFunctionTypeInvokeContract";
  invokeContract;
  constructor(invokeContract) {
    super();
    this.invokeContract = invokeContract;
  }
  get value() {
    return this.invokeContract;
  }
  toXdrObject() {
    return { type: 0, invokeContract: this.invokeContract.toXdrObject() };
  }
}
class HostFunctionCreateContract extends HostFunctionBase {
  type = "hostFunctionTypeCreateContract";
  createContract;
  constructor(createContract) {
    super();
    this.createContract = createContract;
  }
  get value() {
    return this.createContract;
  }
  toXdrObject() {
    return { type: 1, createContract: this.createContract.toXdrObject() };
  }
}
class HostFunctionUploadContractWasm extends HostFunctionBase {
  type = "hostFunctionTypeUploadContractWasm";
  wasm;
  constructor(wasm) {
    super();
    this.wasm = wasm;
  }
  get value() {
    return this.wasm;
  }
  toXdrObject() {
    return { type: 2, wasm: this.wasm };
  }
}
class HostFunctionCreateContractV2 extends HostFunctionBase {
  type = "hostFunctionTypeCreateContractV2";
  createContractV2;
  constructor(createContractV2) {
    super();
    this.createContractV2 = createContractV2;
  }
  get value() {
    return this.createContractV2;
  }
  toXdrObject() {
    return { type: 3, createContractV2: this.createContractV2.toXdrObject() };
  }
}
const HostFunction = HostFunctionBase;

exports.HostFunction = HostFunction;
exports.HostFunctionCreateContract = HostFunctionCreateContract;
exports.HostFunctionCreateContractV2 = HostFunctionCreateContractV2;
exports.HostFunctionInvokeContract = HostFunctionInvokeContract;
exports.HostFunctionUploadContractWasm = HostFunctionUploadContractWasm;
//# sourceMappingURL=host-function.js.map
