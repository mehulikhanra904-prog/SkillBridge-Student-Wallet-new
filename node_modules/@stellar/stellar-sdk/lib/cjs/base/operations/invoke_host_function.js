'use strict';

require('../../xdr/index.js');
var keypair = require('../keypair.js');
var address = require('../address.js');
var asset = require('../asset.js');
var operations = require('../util/operations.js');
var contractExecutableExternalRef = require('../../xdr/generated/contract-executable-external-ref.js');
var contractExecutable = require('../../xdr/generated/contract-executable.js');
var hostFunction = require('../../xdr/generated/host-function.js');
var createContractArgsV2 = require('../../xdr/generated/create-contract-args-v2.js');
var contractIdPreimageFromAddress = require('../../xdr/generated/contract-id-preimage-from-address.js');
var createContractArgs = require('../../xdr/generated/create-contract-args.js');
var invokeContractArgs = require('../../xdr/generated/invoke-contract-args.js');
var invokeHostFunctionOp = require('../../xdr/generated/invoke-host-function-op.js');
var hash = require('../../xdr/generated/hash.js');
var contractIdPreimage = require('../../xdr/generated/contract-id-preimage.js');
var operationBody = require('../../xdr/generated/operation-body.js');
var operation = require('../../xdr/generated/operation.js');

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
        scv = address.Address.fromScVal(arg);
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
  const invokeHostFunctionOp$1 = new invokeHostFunctionOp.InvokeHostFunctionOp({
    hostFunction: opts.func,
    auth: opts.auth || []
  });
  const opAttributes = {
    sourceAccount: null,
    body: operationBody.OperationBody.invokeHostFunction(invokeHostFunctionOp$1)
  };
  operations.setSourceAccount(opAttributes, opts);
  return new operation.Operation(opAttributes);
}
function invokeContractFunction(opts) {
  const c = new address.Address(opts.contract);
  if (c.type !== "contract") {
    throw new TypeError(
      `expected contract strkey instance, got ${c.toString()}`
    );
  }
  return invokeHostFunction({
    func: hostFunction.HostFunction.hostFunctionTypeInvokeContract(
      new invokeContractArgs.InvokeContractArgs({
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
    if (!(ref instanceof contractExecutableExternalRef.ContractExecutableExternalRef)) {
      const owner = ref.owner instanceof address.Address ? ref.owner : new address.Address(ref.owner);
      ref = new contractExecutableExternalRef.ContractExecutableExternalRef({
        executableOwner: owner.toScAddress(),
        tag: ref.tag
      });
    }
    if (ref.executableOwner.type !== "scAddressTypeContract") {
      throw new TypeError(
        `expected contract address in 'opts.externalRef.owner', got ` + address.Address.fromScAddress(ref.executableOwner).toString()
      );
    }
    executable = contractExecutable.ContractExecutable.contractExecutableExternalRef(ref);
  } else {
    if (!opts.wasmHash || opts.wasmHash.length !== 32) {
      throw new TypeError(
        `expected hash(contract WASM) in 'opts.wasmHash', got ${String(opts.wasmHash)}`
      );
    }
    executable = contractExecutable.ContractExecutable.contractExecutableWasm(
      new hash.Hash(Uint8Array.from(opts.wasmHash))
    );
  }
  if (salt.length !== 32) {
    throw new TypeError(
      `expected 32-byte salt in 'opts.salt', got ${String(opts.salt)}`
    );
  }
  return invokeHostFunction({
    func: hostFunction.HostFunction.hostFunctionTypeCreateContractV2(
      new createContractArgsV2.CreateContractArgsV2({
        executable,
        contractIdPreimage: contractIdPreimage.ContractIdPreimage.contractIdPreimageFromAddress(
          new contractIdPreimageFromAddress.ContractIdPreimageFromAddress({
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
  let asset$1 = opts.asset;
  if (typeof asset$1 === "string") {
    const parts = asset$1.split(":");
    const code = parts[0];
    if (code === void 0) {
      throw new TypeError(
        `expected Asset in 'opts.asset', got ${String(opts.asset)}`
      );
    }
    asset$1 = new asset.Asset(code, parts[1]);
  }
  if (!(asset$1 instanceof asset.Asset)) {
    throw new TypeError(
      `expected Asset in 'opts.asset', got ${String(opts.asset)}`
    );
  }
  return invokeHostFunction({
    func: hostFunction.HostFunction.hostFunctionTypeCreateContract(
      new createContractArgs.CreateContractArgs({
        executable: contractExecutable.ContractExecutable.contractExecutableStellarAsset(),
        contractIdPreimage: contractIdPreimage.ContractIdPreimage.contractIdPreimageFromAsset(
          asset$1.toXdrObject()
        )
      })
    ),
    auth: opts.auth || [],
    ...opts.source !== void 0 && { source: opts.source }
  });
}
function uploadContractWasm(opts) {
  return invokeHostFunction({
    func: hostFunction.HostFunction.hostFunctionTypeUploadContractWasm(
      Uint8Array.from(opts.wasm)
      // coalesce subclasses to a plain Uint8Array copy
    ),
    auth: opts.auth || [],
    ...opts.source !== void 0 && { source: opts.source }
  });
}
function getSalty() {
  return keypair.Keypair.random().xdrPublicKey().value.toBytes();
}

exports.createCustomContract = createCustomContract;
exports.createStellarAssetContract = createStellarAssetContract;
exports.invokeContractFunction = invokeContractFunction;
exports.invokeHostFunction = invokeHostFunction;
exports.uploadContractWasm = uploadContractWasm;
//# sourceMappingURL=invoke_host_function.js.map
