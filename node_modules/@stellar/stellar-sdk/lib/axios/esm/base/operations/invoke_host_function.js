import '../../xdr/index.js';
import { Keypair } from '../keypair.js';
import { Address } from '../address.js';
import { Asset } from '../asset.js';
import { setSourceAccount } from '../util/operations.js';
import { ContractExecutableExternalRef } from '../../xdr/generated/contract-executable-external-ref.js';
import { ContractExecutable } from '../../xdr/generated/contract-executable.js';
import { HostFunction } from '../../xdr/generated/host-function.js';
import { CreateContractArgsV2 } from '../../xdr/generated/create-contract-args-v2.js';
import { ContractIdPreimageFromAddress } from '../../xdr/generated/contract-id-preimage-from-address.js';
import { CreateContractArgs } from '../../xdr/generated/create-contract-args.js';
import { InvokeContractArgs } from '../../xdr/generated/invoke-contract-args.js';
import { InvokeHostFunctionOp } from '../../xdr/generated/invoke-host-function-op.js';
import { Hash } from '../../xdr/generated/hash.js';
import { ContractIdPreimage } from '../../xdr/generated/contract-id-preimage.js';
import { OperationBody } from '../../xdr/generated/operation-body.js';
import { Operation } from '../../xdr/generated/operation.js';

function invokeHostFunction(opts) {
  if (!opts.func) {
    throw new TypeError(
      `host function invocation ('func') required (got ${JSON.stringify(opts)})`
    );
  }
  if (opts.func.type === "hostFunctionTypeInvokeContract") {
    opts.func.value.args.forEach((arg) => {
      let scv;
      try {
        scv = Address.fromScVal(arg);
      } catch {
        return;
      }
      switch (scv.type) {
        case "claimableBalance":
        case "liquidityPool":
          throw new TypeError(
            `claimable balances and liquidity pools cannot be arguments to invokeHostFunction`
          );
      }
    });
  }
  const invokeHostFunctionOp = new InvokeHostFunctionOp({
    hostFunction: opts.func,
    auth: opts.auth || []
  });
  const opAttributes = {
    sourceAccount: null,
    body: OperationBody.invokeHostFunction(invokeHostFunctionOp)
  };
  setSourceAccount(opAttributes, opts);
  return new Operation(opAttributes);
}
function invokeContractFunction(opts) {
  const c = new Address(opts.contract);
  if (c.type !== "contract") {
    throw new TypeError(
      `expected contract strkey instance, got ${c.toString()}`
    );
  }
  return invokeHostFunction({
    func: HostFunction.hostFunctionTypeInvokeContract(
      new InvokeContractArgs({
        contractAddress: c.toScAddress(),
        functionName: opts.function,
        args: opts.args
      })
    ),
    ...opts.source !== void 0 && { source: opts.source },
    ...opts.auth !== void 0 && { auth: opts.auth }
  });
}
function createCustomContract(opts) {
  const salt = Uint8Array.from(opts.salt || getSalty());
  let executable;
  if (opts.externalRef !== void 0) {
    if (opts.wasmHash !== void 0) {
      throw new TypeError(
        `Must provide only one of: 'opts.wasmHash' or 'opts.externalRef'`
      );
    }
    let ref = opts.externalRef;
    if (!(ref instanceof ContractExecutableExternalRef)) {
      const owner = ref.owner instanceof Address ? ref.owner : new Address(ref.owner);
      ref = new ContractExecutableExternalRef({
        executableOwner: owner.toScAddress(),
        tag: ref.tag
      });
    }
    if (ref.executableOwner.type !== "scAddressTypeContract") {
      throw new TypeError(
        `expected contract address in 'opts.externalRef.owner', got ` + Address.fromScAddress(ref.executableOwner).toString()
      );
    }
    executable = ContractExecutable.contractExecutableExternalRef(ref);
  } else {
    if (!opts.wasmHash || opts.wasmHash.length !== 32) {
      throw new TypeError(
        `expected hash(contract WASM) in 'opts.wasmHash', got ${String(opts.wasmHash)}`
      );
    }
    executable = ContractExecutable.contractExecutableWasm(
      new Hash(Uint8Array.from(opts.wasmHash))
    );
  }
  if (salt.length !== 32) {
    throw new TypeError(
      `expected 32-byte salt in 'opts.salt', got ${String(opts.salt)}`
    );
  }
  return invokeHostFunction({
    func: HostFunction.hostFunctionTypeCreateContractV2(
      new CreateContractArgsV2({
        executable,
        contractIdPreimage: ContractIdPreimage.contractIdPreimageFromAddress(
          new ContractIdPreimageFromAddress({
            address: opts.address.toScAddress(),
            salt
          })
        ),
        constructorArgs: opts.constructorArgs ?? []
      })
    ),
    ...opts.source !== void 0 && { source: opts.source },
    ...opts.auth !== void 0 && { auth: opts.auth }
  });
}
function createStellarAssetContract(opts) {
  let asset = opts.asset;
  if (typeof asset === "string") {
    const parts = asset.split(":");
    const code = parts[0];
    if (code === void 0) {
      throw new TypeError(
        `expected Asset in 'opts.asset', got ${String(opts.asset)}`
      );
    }
    asset = new Asset(code, parts[1]);
  }
  if (!(asset instanceof Asset)) {
    throw new TypeError(
      `expected Asset in 'opts.asset', got ${String(opts.asset)}`
    );
  }
  return invokeHostFunction({
    func: HostFunction.hostFunctionTypeCreateContract(
      new CreateContractArgs({
        executable: ContractExecutable.contractExecutableStellarAsset(),
        contractIdPreimage: ContractIdPreimage.contractIdPreimageFromAsset(
          asset.toXdrObject()
        )
      })
    ),
    auth: opts.auth || [],
    ...opts.source !== void 0 && { source: opts.source }
  });
}
function uploadContractWasm(opts) {
  return invokeHostFunction({
    func: HostFunction.hostFunctionTypeUploadContractWasm(
      Uint8Array.from(opts.wasm)
      // coalesce subclasses to a plain Uint8Array copy
    ),
    auth: opts.auth || [],
    ...opts.source !== void 0 && { source: opts.source }
  });
}
function getSalty() {
  return Keypair.random().xdrPublicKey().value.toBytes();
}

export { createCustomContract, createStellarAssetContract, invokeContractFunction, invokeHostFunction, uploadContractWasm };
//# sourceMappingURL=invoke_host_function.js.map
