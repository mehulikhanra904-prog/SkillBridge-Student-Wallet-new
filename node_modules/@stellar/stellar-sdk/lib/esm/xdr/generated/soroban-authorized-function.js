import { union, case as _case, field, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { SorobanAuthorizedFunctionType } from './soroban-authorized-function-type.js';
import { InvokeContractArgs } from './invoke-contract-args.js';
import { CreateContractArgs } from './create-contract-args.js';
import { CreateContractArgsV2 } from './create-contract-args-v2.js';

class SorobanAuthorizedFunctionBase extends XdrValue {
  constructor() {
    super();
    if (new.target === SorobanAuthorizedFunctionBase) {
      throw new TypeError(
        "new xdr.SorobanAuthorizedFunction(...) is not supported: XDR unions are built from per-variant factories. Call xdr.SorobanAuthorizedFunction.sorobanAuthorizedFunctionTypeContractFn(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "SorobanAuthorizedFunction",
    {
      switchOn: SorobanAuthorizedFunctionType.schema,
      cases: [
        _case(
          "sorobanAuthorizedFunctionTypeContractFn",
          0,
          field("contractFn", InvokeContractArgs.schema)
        ),
        _case(
          "sorobanAuthorizedFunctionTypeCreateContractHostFn",
          1,
          field("createContractHostFn", CreateContractArgs.schema)
        ),
        _case(
          "sorobanAuthorizedFunctionTypeCreateContractV2HostFn",
          2,
          field("createContractV2HostFn", CreateContractArgsV2.schema)
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
          InvokeContractArgs.fromXdrObject(wire.contractFn)
        );
      case 1:
        return new SorobanAuthorizedFunctionCreateContractHostFn(
          CreateContractArgs.fromXdrObject(wire.createContractHostFn)
        );
      case 2:
        return new SorobanAuthorizedFunctionCreateContractV2HostFn(
          CreateContractArgsV2.fromXdrObject(wire.createContractV2HostFn)
        );
    }
    throw new XdrError(
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

export { SorobanAuthorizedFunction, SorobanAuthorizedFunctionContractFn, SorobanAuthorizedFunctionCreateContractHostFn, SorobanAuthorizedFunctionCreateContractV2HostFn };
//# sourceMappingURL=soroban-authorized-function.js.map
