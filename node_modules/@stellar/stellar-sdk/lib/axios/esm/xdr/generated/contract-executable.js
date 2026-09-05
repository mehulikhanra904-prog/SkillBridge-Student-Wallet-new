import { union, case as _case, field, void as _void, XdrError } from '@stellar/js-xdr';
import { XdrValue } from '../values/xdr-value.js';
import { ContractExecutableType } from './contract-executable-type.js';
import { Hash } from './hash.js';
import { ContractExecutableExternalRef } from './contract-executable-external-ref.js';

class ContractExecutableBase extends XdrValue {
  constructor() {
    super();
    if (new.target === ContractExecutableBase) {
      throw new TypeError(
        "new xdr.ContractExecutable(...) is not supported: XDR unions are built from per-variant factories. Call xdr.ContractExecutable.contractExecutableWasm(...) (or another arm factory) instead."
      );
    }
  }
  static schema = union(
    "ContractExecutable",
    {
      switchOn: ContractExecutableType.schema,
      cases: [
        _case("contractExecutableWasm", 0, field("wasmHash", Hash.schema)),
        _case("contractExecutableStellarAsset", 1, _void()),
        _case(
          "contractExecutableExternalRef",
          2,
          field("externalRef", ContractExecutableExternalRef.schema)
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
        return new ContractExecutableWasm(Hash.fromXdrObject(wire.wasmHash));
      case 1:
        return new ContractExecutableStellarAsset();
      case 2:
        return new ContractExecutableExternalRefArm(
          ContractExecutableExternalRef.fromXdrObject(wire.externalRef)
        );
    }
    throw new XdrError(
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
    this.wasmHash = wasmHash instanceof Hash ? wasmHash : new Hash(wasmHash);
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

export { ContractExecutable, ContractExecutableExternalRefArm, ContractExecutableStellarAsset, ContractExecutableWasm };
//# sourceMappingURL=contract-executable.js.map
